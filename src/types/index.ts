export interface Restaurant {
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

export interface City {
  name: string;
  count: number;
  path: string;
}

export interface Cuisine {
  name: string;
  count: number;
  path: string;
} 