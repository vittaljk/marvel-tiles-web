import * as Templates from "@/components/Templates";
import * as Atoms from "@/components/Atoms";
import CategoryView from '@/components/Molecules/CategoryView/CategoryView';
import { categories, products } from '@/data/products';
// Assuming you have an SEO component defined elsewhere, let's import it:
import SEO from "@/components/SEO"; 

function Gallery() {
    return (
        <Templates.Layout>
            <SEO
                title="Full Product Gallery & Catalog of Premium Tiles in Bengaluru | Marvel Tiles"
                description="Browse the complete gallery and catalog of Marvel Tiles. Find the widest selection of Flooring, Bathroom, Kitchen, Parking, Elevation, Full Body Vitrified, GVT, PGVT, and Smart Marbles."
                url="http://marveltiles.com/gallery" // Assuming the path is /gallery
            />
            <div className="max-w-7xl mx-auto">
                <div className="mt-0 md:mt-32 mb-10 px-6">
                    <Atoms.ProductNoteCard />
                </div>
                <div className="px-6">
                    <Atoms.ProductInfoCard />
                </div>
                {categories.map((category) => {
                    const catProducts = category.id === 'all' ? products : products.filter((p) => p.category === category.id);
                    return (
                        <CategoryView
                            key={category.id}
                            categoryData={category}
                            products={catProducts}
                            title={category.name}
                            noteCard={false}
                            infoCard={false}
                            heroBanner={false}
                        />
                    );
                })}
            </div>
        </Templates.Layout>
    );
}

export default Gallery;