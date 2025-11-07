
import * as Templates from "@/components/Templates";
import * as Molecules from "@/components/Molecules";
import SEO from "@/components/SEO";

export default function Contact() {
  return (
    <Templates.Layout>
      <SEO
        title="Contact Marvel Tiles in Bengaluru | Bannerghatta Road Showroom"
        description="Visit or contact Marvel Tiles, located on Bannerghatta Road, Bengaluru. Get directions, hours, and speak to an expert about our Vitrified, Marble, and Large Format Tile selections."
        url="http://marveltiles.com/contact"
      />
      <div data-aos="fade-up">
        <Molecules.Navbar />
      </div>

      <div data-aos="fade-left">
        <Molecules.ContactSection />
      </div>
    </Templates.Layout>
  );
}