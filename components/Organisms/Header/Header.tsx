
import styles from "./Header.module.scss";
import * as Molecules from "@/components/Molecules";
import { siteConfig } from "@/config/site";
import Link from "next/link";

function Header() {

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <header className="bg-primary text-white py-4 shadow-md h-full">
          <div className="relative container mx-auto flex items-center justify-between px-4 md:px-6 h-full">
            <div className="md:hidden">
              <button
                aria-label="Open menu"
                className="p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>

            <div className="flex-1 flex justify-center md:justify-start">
              <div className="flex items-center space-x-2 z-10">
                <Molecules.Logo />
              </div>
            </div>

            {/* Nav + Phone */}
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex items-center space-x-6">
                {siteConfig.navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-accentBeige hover:text-accentGold transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <a href="tel:+919876543210" className="inline-flex items-center px-4 py-2 bg-accentBeige text-primary rounded-full font-semibold shadow-sm hover:shadow-md transition-shadow">
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
                <span className="pl-2">+91 98765 43210</span>
              </a>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
