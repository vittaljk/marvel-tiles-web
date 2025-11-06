import React from 'react'
import { Info } from "lucide-react";

function ProductInfoCard() {
    return (
        <div
            className="flex items-start gap-3 bg-white border border-accentGold/30 rounded-xl p-5 mt-10 shadow-sm hover:shadow-md transition-all duration-300"
            data-aos="fade-up"
            data-aos-duration="800"
        >
            <Info className="w-6 h-6 text-accentGold mt-1 flex-shrink-0" />

            <p className="text-primaryText text-sm md:text-base leading-relaxed">
                <span className="font-semibold text-primary">Versatile Design:</span>{" "}
                Every Marvel Tile is crafted to fit multiple spaces. Whether it’s{" "}
                <span className="text-accentGold font-medium">
                    kitchens, bathrooms, floors, elevations, or parking areas
                </span>
                , our tiles combine strength and beauty to match any setting.
            </p>
        </div>
    )
}

export default ProductInfoCard