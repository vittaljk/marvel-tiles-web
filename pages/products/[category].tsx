import { useRouter } from "next/router";
import { products, categories } from "@/data/products";
import * as Atoms from "@/components/Atoms";
import * as Templates from "@/components/Templates";

export default function CategoryPage() {
    const router = useRouter();
    const { category } = router.query;

    if (!category) return null;

    const categoryData = categories.find((c) => c.id === category);
    const filtered =
        category === "all"
            ? products
            : products.filter((p) => p.category === category);

    return (
        <Templates.Layout>
            {/* Hero Banner */}
            {categoryData && (
                <div
                    className="relative w-full h-[50vh] overflow-hidden"
                    data-aos="fade-in"
                >
                    <Atoms.Image
                        path={categoryData.thumbnail}
                        alt={categoryData.name}
                        imgClassName="object-cover w-full h-full"
                    />

                    {/* Gradient overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

                    {/* Text content */}
                    <div
                        className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 text-left"
                        data-aos="fade-right"
                        data-aos-delay="200"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white drop-shadow-md">
                            {categoryData.name}
                        </h1>
                        <p className="text-accentBeige text-base md:text-lg max-w-lg">
                            Discover our premium collection of{" "}
                            {categoryData.name.toLowerCase()}.
                        </p>
                    </div>
                </div>
            )}

            {/* Product Grid */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                {filtered.length === 0 ? (
                    <p className="text-gray-500 text-center" data-aos="fade-up">
                        No products found in this category.
                    </p>
                ) : (
                    <div
                        className="grid grid-cols-1 md:grid-cols-3 gap-10"
                        data-aos="fade-up"
                        data-aos-delay="150"
                    >
                        {filtered.map((p, index) => (
                            <div
                                key={p.id}
                                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-500 overflow-hidden"
                                data-aos="zoom-in"
                                data-aos-delay={index * 100} // stagger animations
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
                                    <div className="text-sm text-gray-600 mt-1">
                                        <span className="mr-3">
                                            Size: <span className="font-medium">{p.size}</span>
                                        </span>
                                        <span>
                                            Thickness:{" "}
                                            <span className="font-medium">
                                                {p.thickness.value}
                                                {p.thickness.unit}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </Templates.Layout>
    );
}
