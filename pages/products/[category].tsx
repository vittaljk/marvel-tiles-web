import { useRouter } from "next/router";
import { products, categories } from "@/data/products";
import CategoryView from "@/components/Molecules/CategoryView/CategoryView";
import * as Templates from "@/components/Templates";

export default function CategoryPage() {
    const router = useRouter();
    const { category } = router.query;

    if (!category) return null;

    const catId = Array.isArray(category) ? category[0] : category;
    const categoryData = categories.find((c) => c.id === catId);
    const filtered = catId === "all" ? products : products.filter((p) => p.category === catId);

    return (
        <Templates.Layout>
            <CategoryView categoryData={categoryData} products={filtered} title={categoryData?.name} />
        </Templates.Layout>
    );
}
