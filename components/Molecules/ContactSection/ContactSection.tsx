import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

function ContactSection() {
    return (
        <div className="w-full overflow-x-hidden">
            <section className="bg-gray-50 py-12 md:py-16">
                <div className="md:container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left Column - Contact Info */}
                    <div data-aos="fade-right" className="space-y-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Contact Information
                        </h2>

                        <div className="flex items-start space-x-4">
                            <Phone className="w-6 h-6 text-primary mt-1" />
                            <div>
                                <p className="text-gray-700 font-medium">Phone</p>
                                <p className="text-gray-600">{siteConfig.phone}</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <Mail className="w-6 h-6 text-primary mt-1" />
                            <div>
                                <p className="text-gray-700 font-medium">Email</p>
                                <p className="text-gray-600"><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <MapPin className="w-6 h-6 text-primary mt-1" />
                            <div>
                                <p className="text-gray-700 font-medium">Address</p>
                                <p className="text-gray-600">
                                    {siteConfig.address}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <Clock className="w-6 h-6 text-primary mt-1" />
                            <div>
                                <p className="text-gray-700 font-medium">Working Hours</p>
                                <p className="text-gray-600">Mon to Sat: 08:30 am – 08:30 pm</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Google Map */}
                    <div data-aos="fade-left" className="w-full h-[400px] lg:h-[500px] shadow-lg rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.251872218111!2d77.5843177768254!3d12.826994087475242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b32a86b53f1%3A0x94c31b225f71893!2sMarvel%20Tiles%20%7C%20Pure%20Vitrified%20GVT%20%7C%20Smart%20Marbles%20%7C%20Large%20Format%20Tiles%20For%20Homes%20%26%20Projects%20Near%20Bannerghatta%20Road%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1762026585447!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactSection