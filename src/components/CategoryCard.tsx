"use client";

import Link from "next/link";

interface CategoryCardProps {
  name: string;
  count: number;
  href: string;
}

export default function CategoryCard({ name, count, href }: CategoryCardProps) {
  return (
    <Link href={href} className="category-card block">
      <h3 className="font-medium text-lg mb-1">{name}</h3>
      <p className="text-sm text-gray-500">{count} restaurants</p>
    </Link>
  );
}
