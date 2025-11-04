import * as Templates from "@/components/Templates";
import * as Molecules from "@/components/Molecules";
import * as Atoms from "@/components/Atoms";

export default function IndexPage() {
  return (
    <Templates.Layout>
      <div data-aos="fade-down">
        <Atoms.HeroBanner />
      </div>

      <div data-aos="fade-up">
        <Molecules.Navbar />
      </div>

      <div data-aos="fade-up">
        <Molecules.ProductCategoryCarousel />
      </div>

      <Molecules.AboutUsSection />
    
      <Molecules.ContactSection />

      {/* <div data-aos="fade-up">
        <Molecules.ExploreOurRanges />
      </div> */}
    </Templates.Layout>
  );
}
