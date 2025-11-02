import * as Templates from "@/components/Templates";
import * as Molecules from "@/components/Molecules";
import * as Atoms from "@/components/Atoms";

export default function IndexPage() {
  return (
    <Templates.Layout>
      {/* <Atoms.HeroBanner />
      <Molecules.Navbar />
      <Molecules.ProductCarousel /> */}
      <Molecules.AboutUsSection />
      <Molecules.ContactSection />
      <Molecules.ExploreOurRanges />
    </Templates.Layout>
  );
}
