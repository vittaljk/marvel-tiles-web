// pages/products/index.tsx
import * as Templates from "@/components/Templates";
import * as Molecules from "@/components/Molecules";

export default function ProductsIndex() {
  return (
     <Templates.Layout>
      <div className="max-w-6xl mx-auto px-6 py-12" data-aos="fade-up">
        <Molecules.ProductCategoryCarousel />
      </div>
     </Templates.Layout>
  );
}