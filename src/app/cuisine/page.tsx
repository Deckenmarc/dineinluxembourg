import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import { cuisines, topRestaurants } from "@/data/restaurants";

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

export default function AllCuisinesPage() {
  // Get the restaurants with proper typing
  const restaurantsWithTypes = topRestaurants as unknown as Restaurant[];
  
  // Create a map to count restaurants by cuisine type
  const cuisineCounts = new Map<string, number>();
  
  // Count restaurants for each cuisine
  restaurantsWithTypes.forEach(restaurant => {
    if (restaurant.cuisineType) {
      cuisineCounts.set(
        restaurant.cuisineType, 
        (cuisineCounts.get(restaurant.cuisineType) || 0) + 1
      );
    }
  });
  
  // Update the cuisine objects with the actual counts
  const updatedCuisines = cuisines.map(cuisine => ({
    ...cuisine,
    // Use the actual count if available, otherwise use the original count
    count: cuisineCounts.get(cuisine.name) || cuisine.count
  }));

  return (
    <>
      <Header />
      <main>
        <section className="py-12">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-medium mb-4">
              All Cuisine Types
            </h1>
            <p className="text-gray-600 mb-8">
              Browse restaurants by cuisine type, sorted by popularity
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {updatedCuisines.map((cuisine) => (
                <CategoryCard
                  key={cuisine.path}
                  name={cuisine.name}
                  count={cuisine.count}
                  href={cuisine.path}
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