import * as Atoms from "@/components/Atoms";
import { Product, ProductCategory } from "@/data/products";

interface CategoryViewProps {
    categoryData?: ProductCategory;
    products: Product[];
    title?: string; // optional override
    noteCard?: boolean; // whether to show Atoms.ProductNoteCard
    infoCard?: boolean; // whether to show Atoms.ProductInfoCard
    heroBanner?: boolean; // whether to show hero banner
}

export default function CategoryView({
    categoryData,
    products,
    title,
    noteCard = true,
    infoCard = true,
    heroBanner = true,
}: CategoryViewProps) {
    return (
        <>
            {/* Hero Banner */}
            {categoryData && heroBanner && (
                <div
                    className="relative w-full h-[50vh] overflow-hidden"
                    data-aos="fade-in"
                >
                    <Atoms.Image
                        path={categoryData.thumbnail}
                        alt={categoryData.name}
                        imgClassName="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

                    <div
                        className="absolute inset-0 flex flex-col md:justify-center pt-4 md:pt-0 items-start px-6 md:px-16 text-left"
                        data-aos="fade-right"
                        data-aos-delay="200"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white drop-shadow-md">
                            {title || categoryData.name}
                        </h1>
                        <p className="text-accentBeige text-base md:text-lg max-w-lg">
                            Discover our premium collection of{" "}
                            {categoryData.name.toLowerCase()}.
                        </p>
                    </div>
                </div>
            )}

            {/* Product Grid Section */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                {noteCard && (
                    <div className="mb-8">
                        <Atoms.ProductNoteCard />
                    </div>
                )}
                {infoCard && (
                    <div className="mb-8">
                        <Atoms.ProductInfoCard />
                    </div>
                )}

                {products.length === 0 ? (
                    <p className="text-gray-500 text-center" data-aos="fade-up">
                        No products found in this category.
                    </p>
                ) : (
                    <div
                        className="grid grid-cols-1 md:grid-cols-3 gap-10"
                        data-aos="fade-up"
                        data-aos-delay="150"
                    >
                        {products.map((p, index) => (
                            <div
                                key={p.id}
                                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-500 overflow-hidden"
                                data-aos="zoom-in"
                                data-aos-delay={index * 100}
                            >
                                <div className="overflow-hidden">
                                    <Atoms.Image
                                        path={p.thumbnail}
                                        alt={p.name}
                                        imgClassName="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                                <div className="p-5 text-center">
                                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-accentGold transition-colors duration-300">
                                        {p.name}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </>
    );
}
