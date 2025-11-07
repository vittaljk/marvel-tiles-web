// pages/products/index.tsx
import * as Templates from "@/components/Templates";
import * as Molecules from "@/components/Molecules";
import SEO from "@/components/SEO";

export default function Products() {
  return (
     <Templates.Layout>
      <SEO
        title="Tile Categories & Collections in Bengaluru | Marvel Tiles"
        description="Explore the full range of Marvel Tiles' collections: Flooring, Bathroom, Kitchen, Parking, and Elevation Tiles. Specialists in Full Body, GVT, PGVT, and Smart Marbles."
        url="http://marveltiles.com/products"
      />
      <div className="max-w-6xl mx-auto px-6 py-12" data-aos="fade-up">
        <Molecules.ProductCategoryCarousel />
      </div>
     </Templates.Layout>
  );
}