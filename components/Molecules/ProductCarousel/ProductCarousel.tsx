import React from "react";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Product, products } from "@/data/products";
import * as Atoms from "@/components/Atoms";

interface ProductCarouselProps {
    products: Product[];
}

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function ProductCarousel({ products }: ProductCarouselProps) {
    return (
        <div className="relative py-10 bg-white">
            <div className="max-w-7xl mx-auto">
                <Carousel
                    responsive={responsive}
                    infinite
                    autoPlay
                    autoPlaySpeed={3000}
                    keyBoardControl
                    transitionDuration={800}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    itemClass="px-3"
                    containerClass="pb-6"
                >
                    {products.map((product, idx) => (
                        <Link
                            key={idx}
                            href={`/category/${encodeURIComponent(product.category)}`}
                        >
                            <div className="group relative overflow-hidden transition-all duration-500">
                                <img
                                    src={product.thumbnail}
                                    alt={product.name}
                                    className="w-full h-36 object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl shadow-md hover:shadow-xl"
                                />
                                <h3 className="mt-2 text-lg font-semibold text-center text-gray-800">
                                    {product.name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default ProductCarousel;

ProductCarousel.defaultProps = {
    products,
};