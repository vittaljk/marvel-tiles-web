import * as Templates from "@/components/Templates";
import * as Molecules from "@/components/Molecules";
// import * as Organisms from "@/components/Organisms";
import * as Atoms from "@/components/Atoms";

export default function Contact() {
    return (
        <Templates.Layout>
            {/* <Atoms.HeroBanner /> */}
            <Molecules.Navbar />
            {/* <Molecules.ProductCarousel /> */}
            <>Contact</>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.251872218111!2d77.5843177768254!3d12.826994087475242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b32a86b53f1%3A0x94c31b225f71893!2sMarvel%20Tiles%20%7C%20Pure%20Vitrified%20GVT%20%7C%20Smart%20Marbles%20%7C%20Large%20Format%20Tiles%20For%20Homes%20%26%20Projects%20Near%20Bannerghatta%20Road%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1762026585447!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
        </Templates.Layout>
    );
}
