import React from 'react';
import Link from 'next/link';
import { categories } from "@/data/products";

function Navbar() {
  return (
    <nav className="bg-accentBeige shadow-md">
      <div className="container mx-auto md:px-4">
        <ul
          className="
            flex flex-nowrap md:flex-wrap
            md:justify-center
            overflow-x-auto md:overflow-visible
            gap-2 sm:gap-3
            py-2 no-scrollbar
          "
        >
          {categories.map((category) => {
            const label = category.name;
            const href = category.id === "all" ? "/products" : `/products/${category.id}`;
            return (
              <li key={category.id} className="flex-shrink-0">
                <Link
                  href={href}
                  className="
                    block
                    whitespace-nowrap
                    px-3 sm:px-4 py-2
                    text-sm sm:text-[15px]
                    font-medium
                    text-primaryText
                    rounded-md
                    transition-all
                    duration-300
                    hover:text-white
                    hover:bg-accentGold
                  "
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
