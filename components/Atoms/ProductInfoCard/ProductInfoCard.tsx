import { products, categories, productSizes, productThicknesses, thicknessUnit } from "@/data/products";

function ProductInfoCard() {
    return (
        <div
            className="bg-white border border-accentGold/30 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-duration="800"
        >
            <h3 className="text-lg md:text-xl font-semibold text-primary mb-4 text-center md:text-left">
                Available Options
            </h3>

            <div className="flex flex-col md:flex-row justify-between gap-6">
                {/* Sizes */}
                <div className="flex-1">
                    <p className="text-sm md:text-base font-medium text-primaryText mb-2">
                        Sizes
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {productSizes.map((size) => (
                            <span
                                key={size}
                                className="px-4 py-2 bg-accentCream text-primaryText border border-accentGold/20 rounded-full text-sm font-medium"
                            >
                                {size}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Thickness */}
                <div className="flex-1">
                    <p className="text-sm md:text-base font-medium text-primaryText mb-2">
                        Thickness
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {productThicknesses.map((t) => (
                            <span
                                key={t}
                                className="px-4 py-2 bg-accentCream text-primaryText border border-accentGold/20 rounded-full text-sm font-medium"
                            >
                                {t}{thicknessUnit}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfoCard