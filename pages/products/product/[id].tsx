// pages/product/[id].tsx
import { useRouter } from "next/router";
import { products } from "@/data/products";
import Image from "next/image";

export default function ProductDetail() {
    const router = useRouter();
    const { id } = router.query;

    const product = products.find((p) => p.id === id);
    if (!product) return <p className="p-8">Product not found</p>;

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    {product.images.map((img) => (
                        <Image
                            key={img}
                            src={img}
                            alt={product.name}
                            width={800}
                            height={600}
                            className="rounded-lg shadow-sm"
                        />
                    ))}
                </div>
                <div>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <ul className="space-y-2 text-gray-600">
                        <li>
                            <strong>Category:</strong>{" "}
                            {product.category.replace(/-/g, " ")}
                        </li>
                        <li>
                            <strong>Size:</strong> {product.size}
                        </li>
                        <li>
                            <strong>Thickness:</strong> {String(product.thickness)}
                        </li>
                    </ul>
                    <button
                        className="mt-8 bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition"
                        onClick={() => alert("Redirect to Contact / Visit Page")}
                    >
                        Visit Showroom
                    </button>
                </div>
            </div>
        </div>
    );
}