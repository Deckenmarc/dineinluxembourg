import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RestaurantCard from "@/components/RestaurantCard";
import { topRestaurants, cuisines } from "@/data/restaurants";

// Define the restaurant type inline to avoid TypeScript errors
interface Restaurant {
  id: string;
  name: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  address: string;
  phone: string;
  websiteUrl?: string;
  isTopRestaurant: boolean;
  cuisineType: string;
}

type Props = {
  params: {
    cuisine: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateStaticParams() {
  return cuisines.map((cuisine) => ({
    cuisine: cuisine.path.substring(9), // Remove the leading "/cuisine/"
  }));
}

export default async function CuisinePage({ params }: Props) {
  const cuisineSlug = params.cuisine;
  const cuisineName = cuisineSlug.replace(/-/g, ' ');
  const cuisineInfo = cuisines.find(
    (c) => c.path === `/cuisine/${cuisineSlug}` || 
           c.name.toLowerCase() === cuisineName
  );
  
  // Find restaurants of this cuisine type with proper type assertion
  const restaurantsWithTypes = topRestaurants as unknown as Restaurant[];
  
  let cuisineRestaurants = restaurantsWithTypes.filter(restaurant => {
    if (cuisineInfo) {
      // Use exact match on cuisineType for better accuracy
      return restaurant.cuisineType === cuisineInfo.name;
    }
    return false;
  });

  // If we don't have enough results, try fuzzy matching as a fallback
  if (cuisineRestaurants.length < 3 && cuisineInfo) {
    const fuzzyMatchRestaurants = restaurantsWithTypes.filter(restaurant => {
      const name = cuisineInfo.name.toLowerCase().replace(' restaurant', '');
      return (
        !cuisineRestaurants.includes(restaurant) && // Don't include restaurants already matched
        (restaurant.name.toLowerCase().includes(name) || 
         (restaurant.address && restaurant.address.toLowerCase().includes(name)))
      );
    });
    
    // Add unique fuzzy matched restaurants
    fuzzyMatchRestaurants.forEach(restaurant => {
      if (!cuisineRestaurants.includes(restaurant)) {
        cuisineRestaurants.push(restaurant);
      }
    });
  }
  
  // Sort restaurants by rating (highest to lowest)
  cuisineRestaurants = cuisineRestaurants.sort((a, b) => b.rating - a.rating);

  return (
    <>
      <Header />
      <main>
        <section className="py-12">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-medium mb-4 capitalize">
              {cuisineInfo?.name || cuisineName} Restaurants
            </h1>
            <p className="text-gray-600 mb-8">
              Discover the best {cuisineRestaurants.length} {cuisineInfo?.name || cuisineName} restaurants, 
              sorted by rating
            </p>

            {cuisineRestaurants.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cuisineRestaurants.map((restaurant) => (
                  <RestaurantCard
                    key={restaurant.id}
                    id={restaurant.id}
                    name={restaurant.name}
                    imageUrl={restaurant.imageUrl}
                    rating={restaurant.rating}
                    reviewCount={restaurant.reviewCount}
                    address={restaurant.address}
                    phone={restaurant.phone}
                    websiteUrl={restaurant.websiteUrl}
                    isTopRestaurant={restaurant.isTopRestaurant}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl mb-2">No restaurants found</h3>
                <p className="text-gray-600">
                  We couldn't find any {cuisineInfo?.name || cuisineName} restaurants. Please try another cuisine.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 