import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RestaurantCard from "@/components/RestaurantCard";
import { topRestaurants, cities } from "@/data/restaurants";

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

export function generateStaticParams() {
  return cities.map((city) => ({
    city: city.path.substring(1), // Remove the leading slash
  }));
}

export default function CityPage({ params }: { params: { city: string } }) {
  const citySlug = params.city;
  const cityName = citySlug.replace(/-/g, ' ');
  const cityInfo = cities.find(
    (c) => c.path === `/${citySlug}` || c.name.toLowerCase() === cityName
  );
  
  // Filter restaurants by city with proper type assertion
  const restaurantsWithTypes = topRestaurants as unknown as Restaurant[];
  
  const cityRestaurants = restaurantsWithTypes
    .filter((restaurant) => restaurant.address.includes(cityInfo?.name || ''))
    // Sort restaurants by rating (highest to lowest)
    .sort((a, b) => b.rating - a.rating);

  return (
    <>
      <Header />
      <main>
        <section className="py-12">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-medium mb-4 capitalize">
              Restaurants in {cityInfo?.name || cityName}
            </h1>
            <p className="text-gray-600 mb-8">
              Discover the best {cityRestaurants.length} restaurants in {cityInfo?.name || cityName}, 
              sorted by rating
            </p>

            {cityRestaurants.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cityRestaurants.map((restaurant) => (
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
                  We couldn't find any restaurants in this city. Please try another city.
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