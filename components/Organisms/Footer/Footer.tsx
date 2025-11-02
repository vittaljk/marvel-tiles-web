import { siteConfig } from "@/config/site";
import Link from "next/link";
import * as Atoms from "@/components/Atoms";
import { categories } from "@/data/products";

function Footer() {
  return (
    <footer className="bg-primary text-accentBeige pt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 — Logo & Description */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-40">
              <Atoms.Image path="/images/footer-big-logo.webp" alt="Marvel Tiles Logo" lazy={false} />
            </div>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Marvel Tiles is a premier manufacturer of roofing tiles, combining
            tradition and modern technology to deliver high-quality, durable
            tiles.
          </p>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h4 className="text-accentGold font-semibold mb-4">Quick Links</h4>
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

        {/* Column 3 — Products */}
        <div>
          <h4 className="text-accentGold font-semibold mb-4">Products</h4>
          <ul className="space-y-2">
            {categories.map((cat) => {
              const formatted = cat.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
              const href = cat === "all" ? "/products" : `/products/${cat}`;
              return (
                <li key={cat}>
                  <Link
                    href={href}
                    className="inline-block rounded-md duration-200 hover:text-accentGold transition-colors"
                  >
                    {formatted}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Column 4 — Contact Info */}
        <div>
          <h4 className="text-accentGold font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm">
            <li>📞&nbsp;&nbsp;088842 22269</li>
            <li><a href="mailto:marveltiles2024@gmail.com">📧&nbsp;&nbsp;marveltiles2024@gmail.com</a></li>
            <li>
              📍&nbsp;95/4, Bannerghatta Rd, opposite to Euro School, Laxmipura,
              Bengaluru, Karnataka 560083, India
            </li>
            <li>🕒&nbsp;&nbsp;Mon to Sat: 08:30 am to 08:30 pm</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-10 py-6 text-center text-sm bg-[#16214B] text-accentBeige">
        Copyright © {new Date().getFullYear()} Marvel Tiles Online. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
