const fs = require('fs');
const path = require('path');

// Read the large JSON file
const inputFile = path.join(__dirname, '../../tableConvert.com_cxbx71.json');
const outputFile = path.join(__dirname, '../data/restaurants.ts');

try {
  // Read the JSON file
  const jsonData = fs.readFileSync(inputFile, 'utf8');
  const restaurants = JSON.parse(jsonData);

  // Create a mapping of restaurant types to standardized cuisine categories
  const cuisineTypes = new Map();
  restaurants.forEach(restaurant => {
    if (restaurant.type) {
      cuisineTypes.set(restaurant.type, (cuisineTypes.get(restaurant.type) || 0) + 1);
    }
  });

  // Transform to the cuisine format
  const cuisines = Array.from(cuisineTypes.entries())
    .map(([name, count]) => {
      // Remove "restaurant" from the name if it's at the end to avoid duplication
      const cleanName = name.endsWith(' restaurant') 
        ? name.slice(0, -11) 
        : name;
      
      return {
        name,
        count,
        path: `/cuisine/${cleanName.toLowerCase().replace(/\s+/g, '-')}`,
      };
    })
    .sort((a, b) => b.count - a.count);

  // Create cities and cuisines from the data
  const cities = new Map();

  // Transform the data to match our format - use all restaurants instead of just 100
  const transformedRestaurants = restaurants.map((restaurant, index) => {
    // Add city to cities map
    if (restaurant.city) {
      cities.set(restaurant.city, (cities.get(restaurant.city) || 0) + 1);
    }
    
    // Mark restaurants as top restaurants if they have a high rating and reviews
    // This ensures there are enough top restaurants for the homepage
    const rating = parseFloat(restaurant.rating) || 0;
    const reviewCount = parseInt(restaurant.reviews) || 0;
    const isTopRestaurant = 
      (index < 50) || // First 50 restaurants
      (rating >= 4.8 && reviewCount >= 20); // Or highly-rated restaurants

    return {
      id: (index + 1).toString(),
      name: restaurant.name,
      imageUrl: restaurant.photo || 'https://via.placeholder.com/400x220',
      rating: rating,
      reviewCount: reviewCount,
      address: restaurant.full_address || '',
      phone: restaurant.phone || '',
      websiteUrl: restaurant.site || undefined,
      isTopRestaurant: isTopRestaurant,
      cuisineType: restaurant.type || '', 
    };
  });

  // Transform to the cities format
  const allCities = Array.from(cities.entries())
    .map(([name, count]) => ({
      name,
      count,
      path: `/${name.toLowerCase().replace(/\s+/g, '-')}`,
    }))
    .sort((a, b) => b.count - a.count);

  // Create the content for the restaurants.ts file
  const fileContent = `export const topRestaurants = ${JSON.stringify(transformedRestaurants, null, 2)};

export const cities = ${JSON.stringify(allCities, null, 2)};

export const cuisines = ${JSON.stringify(cuisines, null, 2)};
`;

  // Write the content to the restaurants.ts file
  fs.writeFileSync(outputFile, fileContent);
  console.log('Successfully converted the data and updated restaurants.ts');

} catch (error) {
  console.error('Error processing the file:', error);
} 