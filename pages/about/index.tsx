import * as Templates from "@/components/Templates";
import * as Molecules from "@/components/Molecules";
import * as Organisms from "@/components/Organisms";

export default function About() {
  return (
    <Templates.Layout>
       {/* TODO: without video */}
      {/* <Atoms.HeroBanner /> */}
      <Molecules.Navbar />
      <Molecules.AboutUsSection />
    </Templates.Layout>
  );
}