"use client";

import Link from "next/link";
import { cities, cuisines } from "@/data/restaurants";

// Get the top 5 cities
const popularCities = cities.slice(0, 5).map(city => ({
  name: city.name,
  path: city.path
}));

// Get the top 5 cuisines
const popularCuisines = cuisines.slice(0, 5).map(cuisine => ({
  name: cuisine.name,
  path: cuisine.path
}));

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-200 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-medium mb-4">About DineINLuxembourg</h3>
            <p className="text-sm text-zinc-400 mb-4">
              Your guide to the best restaurants in Luxembourg.
              Find top-rated places to eat near you.
            </p>
            <Link
              href="/about"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Learn more about us
            </Link>
            <div className="mt-4">
              <Link
                href="https://www.tiktok.com/"
                className="text-zinc-400 hover:text-white transition-colors flex items-center space-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
                </svg>
                <span>TikTok</span>
              </Link>
            </div>
          </div>

          {/* Popular Cities */}
          <div>
            <h3 className="text-lg font-medium mb-4">Popular Cities</h3>
            <ul className="text-sm space-y-2">
              {popularCities.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Cuisines */}
          <div>
            <h3 className="text-lg font-medium mb-4">Popular Cuisines</h3>
            <ul className="text-sm space-y-2">
              {popularCuisines.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/award"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Award
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-xs text-zinc-500 flex flex-col md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} DineINLuxembourg. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/about" className="hover:text-zinc-300 transition-colors">
              About
            </Link>
            <Link href="/award" className="hover:text-zinc-300 transition-colors">
              Award
            </Link>
            <Link href="/sitemap.xml" className="hover:text-zinc-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
