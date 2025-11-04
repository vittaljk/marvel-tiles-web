import { siteConfig } from "@/config/site";
import Link from "next/link";
import * as Atoms from "@/components/Atoms";
import { categories } from "@/data/products";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  MapPinned,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-primary text-accentBeige pt-12">
      {/* Top Section */}
      <div className="md:container md:mx-auto px-6 flex flex-wrap md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Column 1 — Logo & Description */}
        <div className="flex flex-col">
          <div className="w-36 md:w-40 mb-4">
            <Atoms.Image
              path="/images/footer-big-logo.webp"
              alt="Marvel Tiles Logo"
              lazy={false}
            />
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Marvel Tiles is a premier manufacturer of roofing tiles, combining
            tradition and modern technology to deliver high-quality, durable
            tiles.
          </p>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h4 className="text-accentGold font-semibold mb-4 uppercase tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-accentGold transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Contact Info & Social */}
        <div className="flex flex-col items-start">
          <h4 className="text-accentGold font-semibold mb-4 uppercase tracking-wide">
            Contact Info
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex md:justify-start gap-3">
              <Phone className="w-5 h-5 text-accentGold flex-shrink-0" />
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                className="hover:text-accentGold"
              >
                {siteConfig.phone}
              </a>
            </li>

            <li className="flex md:justify-start gap-3">
              <Mail className="w-5 h-5 text-accentGold flex-shrink-0" />
              <a
                href="mailto:marveltiles2024@gmail.com"
                className="hover:text-accentGold"
              >
                marveltiles2024@gmail.com
              </a>
            </li>

            <li className="flex items-start md:justify-start gap-3">
              <MapPin className="w-5 h-5 text-accentGold mt-1 flex-shrink-0" />
              <span>
                95/4, Bannerghatta Rd, opposite to Euro School, Laxmipura,
                Bengaluru, Karnataka 560083, India
              </span>
            </li>

            <li className="flex items-center md:justify-start gap-3">
              <Clock className="w-5 h-5 text-accentGold flex-shrink-0" />
              <span>Mon to Sat: 08:30 am to 08:30 pm</span>
            </li>
          </ul>

          {/* Social Links */}
          <div className="mt-6 w-full">
            <h4 className="text-accentGold font-semibold mb-3 uppercase tracking-wide md:text-left">
              Connect with Us
            </h4>
            <div className="flex md:justify-start space-x-5">
              <a
                href="https://www.instagram.com/marvel_tiles/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accentGold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>

              <a
                href="https://maps.app.goo.gl/vzpib6Ph24QAVNFc8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accentGold transition-colors"
                aria-label="Google Maps"
              >
                <MapPinned className="w-6 h-6" />
              </a>

              <a
                href="https://wa.me/918884222269"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accentGold transition-colors"
                aria-label="WhatsApp"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path d="M38.9,8.1A20.9,20.9,0,0,0,3.2,22.8,19.8,19.8,0,0,0,6,33.2L3,44l11.1-2.9a20.3,20.3,0,0,0,10,2.5A20.8,20.8,0,0,0,38.9,8.1Zm-14.8,32a17.1,17.1,0,0,1-9.5-2.8L8,39.1l1.8-6.4a17.9,17.9,0,0,1-3.1-9.9A17.4,17.4,0,1,1,24.1,40.1Z" />
                  <path d="M33.6,27.2A29.2,29.2,0,0,0,30,25.5c-.4-.2-.8-.3-1.1.2s-1.4,1.7-1.7,2.1a.8.8,0,0,1-1.1.1,15.2,15.2,0,0,1-4.2-2.6A15,15,0,0,1,19,21.7a.7.7,0,0,1,.2-1l.8-1a3.5,3.5,0,0,0,.5-.8.9.9,0,0,0,0-.9c-.2-.3-1.2-2.8-1.6-3.9s-.9-.9-1.2-.9h-1a1.7,1.7,0,0,0-1.4.7,5.5,5.5,0,0,0-1.8,4.3,10.4,10.4,0,0,0,2.1,5.4c.3.3,3.7,5.6,8.9,7.8a16.4,16.4,0,0,0,3,1.1,6.4,6.4,0,0,0,3.3.2c1-.1,3.1-1.2,3.5-2.4s.5-2.3.3-2.5A2.1,2.1,0,0,0,33.6,27.2Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

         {/* Column 4 — Products */}
        <div>
          <h4 className="text-accentGold font-semibold mb-4 uppercase tracking-wide">
            Products
          </h4>
          <ul className="space-y-2">
            {categories.map((cat) => {
              const href = cat.id === "all" ? "/products" : `/products/${cat.id}`;
              return (
                <li key={cat.id}>
                  <Link
                    href={href}
                    className="inline-block rounded-md duration-200 hover:text-accentGold transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-10 py-6 text-center text-xs sm:text-sm bg-[#16214B] text-accentBeige">
        Copyright © {new Date().getFullYear()} Marvel Tiles Online. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
