import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RestaurantCard from "@/components/RestaurantCard";
import CategoryCard from "@/components/CategoryCard";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { topRestaurants, cities, cuisines } from "@/data/restaurants";

export default function Home() {
  // Filter restaurants that:
  // 1. Have a high rating (>= 4.8)
  // 2. Have sufficient reviews (> 20)
  // 3. Have the TOP RESTAURANT badge (isTopRestaurant = true)
  const featuredRestaurants = topRestaurants
    .filter((restaurant) => 
      restaurant.rating >= 4.8 && 
      restaurant.reviewCount > 20 && 
      restaurant.isTopRestaurant === true
    )
    // Sort by rating (highest to lowest)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 12); // Show up to 12 restaurants

  return (
    <>
      <Header />

      <main>
        <Hero />

        {/* Top Restaurants Section */}
        <section className="py-12" id="top-restaurants">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-medium mb-8">Top-Rated Restaurants Near You</h2>
            
            {featuredRestaurants.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredRestaurants.map((restaurant) => (
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
                    isTopRestaurant={true} // Ensure the badge is always shown
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl mb-2">No top-rated restaurants found</h3>
                <p className="text-gray-600">
                  We couldn't find any top restaurants with a rating of 4.8+ and more than 20 reviews.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Cities Section (formerly Neighbourhoods) */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-medium mb-8">All Cities</h2>
            <p className="text-gray-600 mb-8">Browse restaurants by city, sorted by number of restaurants</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cities.slice(0, 8).map((city) => (
                <CategoryCard
                  key={city.path}
                  name={city.name}
                  count={city.count}
                  href={city.path}
                />
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
                asChild
              >
                <a href="/cities">View All Cities</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Cuisines Section */}
        <section className="py-12">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-medium mb-8">All Cuisines</h2>
            <p className="text-gray-600 mb-8">Browse restaurants by cuisine type, sorted by popularity</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cuisines.slice(0, 8).map((cuisine) => (
                <CategoryCard
                  key={cuisine.path}
                  name={cuisine.name}
                  count={cuisine.count}
                  href={cuisine.path}
                />
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
                asChild
              >
                <a href="/cuisine">View All Cuisines</a>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />
      </main>

      <Footer />
    </>
  );
}
