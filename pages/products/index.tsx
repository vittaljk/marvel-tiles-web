// pages/products/index.tsx
import Link from "next/link";
import { categories } from "@/data/products";

export default function ProductsIndex() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold mb-8 text-gray-800">
        Explore Our Collections
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((categories) => (
          <Link
            key={categories}
            href={`/products/${categories}`}
            className="p-6 border rounded-lg shadow-sm hover:shadow-md hover:border-yellow-600 transition"
          >
            <h2 className="text-lg capitalize text-gray-700">
              {categories.replace(/-/g, " ")}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}