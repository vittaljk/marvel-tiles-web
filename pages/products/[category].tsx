// pages/products/[category].tsx
import { useRouter } from "next/router";
import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import * as Atoms from "@/components/Atoms";

export default function CategoryPage() {
    const router = useRouter();
    const { category } = router.query;

    if (!category) return null;

    const filtered = products.filter((p) => p.category === category);

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-semibold mb-8 capitalize text-gray-800">
                {category.toString().replace(/-/g, " ")}
            </h1>

            {filtered.length === 0 ? (
                <p className="text-gray-500">No products found in this category.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {filtered.map((p) => (
                        <Link href={`/product/${p.id}`} key={p.id}>
                            <div className="group">
                                <div className="overflow-hidden rounded-xl shadow-sm">
                                    <Atoms.Image path={p.thumbnail} />
                                </div>
                                <h3 className="mt-4 text-lg font-medium text-gray-900 group-hover:text-yellow-600">
                                    {p.name}
                                </h3>
                                <p className="text-sm text-gray-500">{p.size}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}