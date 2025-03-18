"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { cities, cuisines } from "@/data/restaurants";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Define the navigation data structure
const navigationData = {
  cities: cities.map(city => ({
    name: city.name,
    path: city.path
  })),
  cuisines: [
    { name: "All Cuisines", path: "/cuisine" },
    ...cuisines.slice(0, 9).map(cuisine => ({
      name: cuisine.name,
      path: cuisine.path
    }))
  ],
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 border-b sticky top-0 z-50">
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="logo-text text-3xl text-primary font-bold">DineIN</span>
          <span className="logo-text text-xl text-foreground">Luxembourg</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>

          {/* Cities Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors flex items-center">
              Cities
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 grid grid-cols-2 gap-1 p-2">
              <DropdownMenuItem asChild>
                <Link href="/cities">All Cities</Link>
              </DropdownMenuItem>
              {navigationData.cities.map((item) => (
                <DropdownMenuItem key={item.path} asChild>
                  <Link href={item.path}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Cuisines Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors flex items-center">
              Cuisines
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 grid grid-cols-2 gap-1 p-2">
              {navigationData.cuisines.map((item) => (
                <DropdownMenuItem key={item.path} asChild>
                  <Link href={item.path}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
          
          <Link href="/award" className="text-foreground hover:text-primary transition-colors">
            Award
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <button className="p-2 text-gray-600 hover:text-gray-900">
          <Search className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden container-custom py-4 border-t">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div className="border-t pt-4">
              <h3 className="font-medium text-foreground mb-2">Cities</h3>
              <Link
                href="/cities"
                className="text-foreground hover:text-primary transition-colors text-sm block mb-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                All Cities
              </Link>
              <div className="grid grid-cols-2 gap-2">
                {navigationData.cities.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="text-foreground hover:text-primary transition-colors text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-medium text-foreground mb-2">Cuisines</h3>
              <div className="grid grid-cols-2 gap-2">
                {navigationData.cuisines.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="text-foreground hover:text-primary transition-colors text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors border-t pt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            
            <Link
              href="/award"
              className="text-foreground hover:text-primary transition-colors border-t pt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Award
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
