import React from "react";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { categories } from "@/data/products";
import * as constants from "@/constants";
import * as Atoms from "@/components/Atoms";

function ProductCategoryCarousel() {
    const filteredCategories = categories.filter((cat) => cat.id !== "all");

    return (
        <section className="relative pt-20 pb-12">
            <div className="max-w-7xl mx-auto px-4">
                {/* Desktop / Tablet Carousel */}
                <div className="hidden md:block">
                    <Carousel
                        responsive={constants.CarouselResponsive}
                        infinite
                        autoPlay
                        autoPlaySpeed={3000}
                        keyBoardControl
                        transitionDuration={700}
                        removeArrowOnDeviceType={["tablet"]}
                        itemClass="px-3"
                        containerClass="pb-6"
                    >
                        {filteredCategories.map((cat) => {
                            const href = cat.id === "all" ? "/products" : `/products/${cat.id}`;

                            return (
                                <Link key={cat.id} href={href}>
                                    <div className="group relative overflow-hidden transition-all duration-500 cursor-pointer">
                                        <div className="w-full h-64 transform group-hover:scale-105 transition-transform duration-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl">
                                            <Atoms.Image
                                                path={cat.thumbnail}
                                                alt={cat.name}
                                                lazy={false}
                                            />
                                        </div>
                                        <h3 className="mt-3 text-center text-lg font-semibold text-primary group-hover:text-accentGold transition-colors duration-300">
                                            {cat.name}
                                        </h3>
                                    </div>
                                </Link>
                            );
                        })}
                    </Carousel>
                </div>

                {/* Mobile Grid View */}
                <div className="md:hidden grid grid-cols-1 gap-6">
                    {filteredCategories.map((cat) => {
                        const href = cat.id === "all" ? "/products" : `/products/${cat.id}`;
                        return (
                            <Link key={cat.id} href={href}>
                                <div className="group relative overflow-hidden transition-all duration-500 cursor-pointer">
                                    <div className="w-full h-56 rounded-xl overflow-hidden shadow-md hover:shadow-xl">
                                        <Atoms.Image
                                            path={cat.thumbnail}
                                            alt={cat.name}
                                            lazy={false}
                                        />
                                    </div>
                                    <h3 className="mt-3 text-center text-base font-semibold text-primary group-hover:text-accentGold transition-colors duration-300">
                                        {cat.name}
                                    </h3>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default ProductCategoryCarousel;

ProductCategoryCarousel.defaultProps = {};