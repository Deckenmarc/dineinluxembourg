import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">About DineINLuxembourg</h1>

          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Welcome to DineINLuxembourg, your ultimate guide to discovering the best dining experiences in the beautiful country of Luxembourg.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">Our Mission</h2>
            <p>
              At DineINLuxembourg, we're passionate about connecting locals and visitors with exceptional restaurants across Luxembourg. Our mission is to help you discover the diverse culinary landscape that makes Luxembourg one of Europe's most exciting food destinations.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">What We Offer</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Curated Restaurant Recommendations:</strong> Our team of food enthusiasts selects and highlights the most outstanding restaurants in Luxembourg, from hidden gems to Michelin-starred establishments.</li>
              <li><strong>City Guides:</strong> Explore dining options by city, making it easy to find great restaurants wherever you are in the country.</li>
              <li><strong>Cuisine Categories:</strong> Whether you're craving traditional Luxembourgish dishes, seeking the best Italian food, or exploring Luxembourg's diverse international dining scene, we organize restaurants by cuisine to help you find exactly what you're hungry for.</li>
              <li><strong>Expert Food Knowledge:</strong> Our content is created by locals who know Luxembourg's food scene inside and out.</li>
            </ul>

            <h2 className="text-2xl font-medium mt-8 mb-4">Our Story</h2>
            <p>
              DineINLuxembourg was founded in 2020 by a group of food-loving friends who were tired of seeing the same restaurant recommendations on major review sites. What started as a passion project has grown into a trusted resource for thousands of diners looking to explore Luxembourg's diverse culinary landscape.
            </p>
            <p className="mt-4">
              Over the years, we've expanded our coverage to include all cities and cuisines in Luxembourg, always maintaining our commitment to quality recommendations and honest insights.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">Contact Us</h2>
            <p>
              Have a restaurant recommendation or feedback about our site? We'd love to hear from you! Reach out to us at <a href="mailto:hello@dineinluxembourg.com" className="text-primary hover:underline">hello@dineinluxembourg.com</a>.
            </p>

            <p className="mt-12 text-sm text-gray-500">
              © {new Date().getFullYear()} DineINLuxembourg. 
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
