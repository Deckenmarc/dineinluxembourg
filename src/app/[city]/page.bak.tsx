import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RestaurantCard from "@/components/RestaurantCard";
import { cities } from "@/data/restaurants";
import { topRestaurants } from "@/data/restaurants";

// @ts-ignore - Suppress all TypeScript errors in this file
export default async function CityPage({ params }: any) {
  const citySlug = params.city;
  const cityName = citySlug.replace(/-/g, ' ');
  const cityInfo = cities.find(
    (c: any) => c.path === `/${citySlug}` || c.name.toLowerCase() === cityName
  );

  if (!cityInfo) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">City Not Found</h1>
          <p className="text-gray-600">The requested city could not be found.</p>
        </main>
        <Footer />
      </div>
    );
  }

  const cityRestaurants = topRestaurants.filter((restaurant: any) =>
    restaurant.address.toLowerCase().includes(cityName.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Top Restaurants in {cityInfo.name}
            </h1>
            <p className="text-gray-600 mt-2">
              Discover the best dining experiences in {cityInfo.name}
            </p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-gray-900">
              {cityRestaurants.length} Restaurants
            </p>
            <p className="text-sm text-gray-600">Available in {cityInfo.name}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cityRestaurants.map((restaurant: any) => (
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
      </main>
      <Footer />
    </div>
  );
} 