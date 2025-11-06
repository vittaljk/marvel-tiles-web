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
      <div className="mb-8 max-w-7xl mx-auto px-4" data-aos="fade-up">
        <Atoms.ProductNoteCard />
      </div>
      <Molecules.AboutUsSection />
    
      <Molecules.ContactSection />

      {/* <div data-aos="fade-up">
        <Molecules.ExploreOurRanges />
      </div> */}
    </Templates.Layout>
  );
}
