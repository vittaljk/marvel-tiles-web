import { useRouter } from "next/router";
import { products, categories } from "@/data/products";
import CategoryView from "@/components/Molecules/CategoryView/CategoryView";
import * as Templates from "@/components/Templates";
// Assuming you have an SEO component defined elsewhere, let's import it:
import SEO from "@/components/SEO"; 

export default function CategoryPage() {
    const router = useRouter();
    const { category } = router.query;

    if (!category) return null;

    const catId = Array.isArray(category) ? category[0] : category;
    const categoryData = categories.find((c) => c.id === catId);
    const filtered = catId === "all" ? products : products.filter((p) => p.category === catId);

    // --- Dynamic SEO Implementation ---
    // Use the category name for the title, defaulting to 'Tile Collections'
    const categoryName = categoryData?.name || 'Tile Collections';
    
    // Construct the canonical URL dynamically
    const currentUrl = `http://marveltiles.com/products/${catId}`;

    // SEO Title: Dynamic Name | Location | Brand
    const seoTitle = `${categoryName} in Bengaluru | Marvel Tiles`;
    
    // SEO Description: Dynamic Name + Reinforcement of core product types (Vitrified, GVT, Marble)
    const seoDescription = `Explore our comprehensive collection of premium ${categoryName} tiles at Marvel Tiles, Bengaluru. Find specialized options including Full Body, GVT, PGVT, and Smart Marbles for your project needs.`;
    // --- End Dynamic SEO Implementation ---

    return (
        <Templates.Layout>
            {/* The SEO component is placed here to update the head section */}
            <SEO
                title={seoTitle}
                description={seoDescription}
                url={currentUrl}
            />
            <CategoryView categoryData={categoryData} products={filtered} title={categoryName} />
        </Templates.Layout>
    );
}