import React from 'react';
import Link from 'next/link';
import { categories } from "@/data/products";

function Navbar() {
  return (
    <div className="bg-accentBeige h-14 flex items-center shadow-md">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-3 overflow-auto no-scrollbar py-2">
          {categories.map((category) => {
            const label = category.name;
            const href = category.id === "all" ? "/products" : `/products/${category.id}`;
            return (
              <Link
                key={category.id}
                href={href}
                className="relative px-3 py-2 text-[15px] font-medium text-primaryText transition-all duration-300 hover:text-white hover:bg-accentGold rounded-md"
              >
                {label}
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  )
}

export default Navbar