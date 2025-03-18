import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AwardPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-12">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-medium mb-4">
              DineINLuxembourg Award
            </h1>
            <p className="text-gray-600 mb-8">
              Display our award badge on your website to showcase your excellence
            </p>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex flex-col items-center space-y-6">
                {/* Award SVG Display */}
                <div className="relative w-48 h-48">
                  <Image 
                    src="/awards/dine-in-award-badge.svg" 
                    alt="DineINLuxembourg Award Badge" 
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="text-center max-w-2xl">
                  <h2 className="text-2xl font-medium mb-4">How to Add the Award Badge</h2>
                  <p className="text-gray-600 mb-6">
                    Follow these steps to add the DineINLuxembourg Award badge to your website:
                  </p>
                  <ol className="text-left space-y-4 text-gray-600">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">1.</span>
                      Download the award SVG file from the button below
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">2.</span>
                      Upload the SVG file to your website's assets directory
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">3.</span>
                      Add the following HTML code to your website where you want to display the badge:
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">4.</span>
                      <code className="block bg-gray-100 p-4 rounded-lg text-sm w-full">
                        {`<a href="https://dineinluxembourg.com" target="_blank" rel="noopener noreferrer">
  <img src="/path/to/your/dine-in-award-badge.svg" alt="DineINLuxembourg Award" width="150" height="150" />
</a>`}
                      </code>
                    </li>
                  </ol>
                </div>

                <a 
                  href="/awards/dine-in-award-badge.svg" 
                  download="dine-in-award-badge.svg"
                  className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Download Award SVG
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-medium mb-4">Award Guidelines</h2>
              <ul className="space-y-4 text-gray-600">
                <li>• The award badge should be displayed prominently on your website</li>
                <li>• The badge should link back to DineINLuxembourg.com</li>
                <li>• The badge should not be modified or altered in any way</li>
                <li>• The badge should be displayed with appropriate spacing and alignment</li>
                <li>• The badge should be responsive and look good on all devices</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 