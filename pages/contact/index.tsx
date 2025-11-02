
import * as Templates from "@/components/Templates";
import * as Molecules from "@/components/Molecules";

export default function Contact() {
  return (
    <Templates.Layout>
      {/* TODO: without video */}
      {/* <Atoms.HeroBanner /> */}
      <Molecules.Navbar />
      <Molecules.ContactSection />
    </Templates.Layout>
  );
}