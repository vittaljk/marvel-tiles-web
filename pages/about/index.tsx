import * as Templates from "@/components/Templates";
import * as Molecules from "@/components/Molecules";
import SEO from "@/components/SEO";

export default function About() {
  return (
    <Templates.Layout>
      <SEO
        title="About Marvel Tiles Bengaluru | Premium GVT & Marble Supplier"
        description="Learn about Marvel Tiles, Bengaluru's premier supplier on Bannerghatta Road. We offer premium Flooring, Bathroom, and Elevation tiles, specializing in Full Body Vitrified, GVT/PGVT, and Smart Marbles."
        url="http://marveltiles.com/about"
      />
      <Molecules.Navbar />
      <div className="mb-16">
        <Molecules.AboutUsSection />
      </div>
    </Templates.Layout>
  );
}