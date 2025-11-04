
import * as Templates from "@/components/Templates";
import * as Molecules from "@/components/Molecules";

export default function Contact() {
  return (
    <Templates.Layout>
      {/* TODO: without video */}
      {/* <Atoms.HeroBanner /> */}
      <div data-aos="fade-up">
        <Molecules.Navbar />
      </div>

      <div data-aos="fade-left">
        <Molecules.ContactSection />
      </div>
    </Templates.Layout>
  );
}