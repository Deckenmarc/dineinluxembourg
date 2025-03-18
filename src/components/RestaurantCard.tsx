"use client";

import Image from "next/image";
import { Star, StarHalf } from "lucide-react";

interface RestaurantCardProps {
  id: string;
  name: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  address: string;
  phone: string;
  websiteUrl?: string;
  isTopRestaurant?: boolean;
}

export default function RestaurantCard({
  id,
  name,
  imageUrl,
  rating,
  reviewCount,
  address,
  phone,
  websiteUrl,
  isTopRestaurant = false,
}: RestaurantCardProps) {
  // Function to render star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} size={16} fill="currentColor" />);
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" size={16} fill="currentColor" />);
    }

    // Add empty stars to make a total of 5 stars
    const emptyStarsCount = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStarsCount; i++) {
      stars.push(
        <Star
          key={`empty-star-${i}`}
          size={16}
          className="text-gray-300"
        />
      );
    }

    return stars;
  };

  return (
    <div className="restaurant-card">
      {/* Restaurant image */}
      <div className="relative">
        <Image
          src={imageUrl}
          alt={name}
          className="restaurant-card-image"
          width={400}
          height={220}
        />
        {isTopRestaurant && (
          <div className="top-restaurant-badge">TOP RESTAURANT</div>
        )}
      </div>

      {/* Restaurant details */}
      <div className="p-4">
        <h3 className="font-medium text-lg mb-2">{name}</h3>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="star-rating mr-2">
            {renderStars(rating)}
          </div>
          <span className="text-sm text-gray-500">({reviewCount})</span>
        </div>

        {/* Address */}
        <p className="text-sm text-gray-700 mb-1">{address}</p>

        {/* Phone */}
        <p className="text-sm text-gray-700 mb-4">{phone}</p>

        {/* Website link */}
        {websiteUrl && (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="visit-website-btn"
          >
            Visit Website
          </a>
        )}
      </div>
    </div>
  );
}
