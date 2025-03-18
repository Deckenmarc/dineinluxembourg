import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import { cities, topRestaurants } from "@/data/restaurants";

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

export default function AllCitiesPage() {
  // Get the restaurants with proper typing
  const restaurantsWithTypes = topRestaurants as unknown as Restaurant[];
  
  // Create a map to count restaurants by city
  const cityCounts = new Map<string, number>();
  
  // Count restaurants for each city
  restaurantsWithTypes.forEach(restaurant => {
    // Extract city from the address
    cities.forEach(city => {
      if (restaurant.address.includes(city.name)) {
        cityCounts.set(
          city.name, 
          (cityCounts.get(city.name) || 0) + 1
        );
      }
    });
  });
  
  // Update the city objects with the actual counts
  const updatedCities = cities.map(city => ({
    ...city,
    // Use the actual count if available, otherwise use the original count
    count: cityCounts.get(city.name) || city.count
  }));

  return (
    <>
      <Header />
      <main>
        <section className="py-12">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-medium mb-4">
              All Cities
            </h1>
            <p className="text-gray-600 mb-8">
              Browse restaurants by city, sorted by number of restaurants
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {updatedCities.map((city) => (
                <CategoryCard
                  key={city.path}
                  name={city.name}
                  count={city.count}
                  href={city.path}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 