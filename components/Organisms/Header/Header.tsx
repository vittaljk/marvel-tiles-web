
import { useState } from "react";
import styles from "./Header.module.scss";
import * as Molecules from "@/components/Molecules";
import * as Atoms from "@/components/Atoms";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, Button } from "@heroui/react";
import { Menu, X } from "lucide-react";


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <header className="bg-primary text-white md:py-4 shadow-md h-full">
          <div className="relative md:container mx-auto md:flex items-center justify-between px-4 md:px-6 h-full">
            <div className="md:hidden flex items-center justify-between h-full">
              <Button
                isIconOnly
                onPress={() => setIsOpen(true)}
                aria-label="Open menu"
                variant="light"
                className="text-white hover:bg-white/10"
              >
                <Menu size={26} />
              </Button>
              <div className="w-10">
                <Atoms.Image
                  path="/images/logo-mobile.png"
                  alt="Marvel Tiles Logo"
                  lazy={false}
                />
              </div>
            </div>


            <div className="hidden md:flex flex-1 justify-center md:justify-start">
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
      <Drawer isOpen={isOpen} onOpenChange={setIsOpen} placement="left" closeButton={<X size={50} className="text-accentGold cursor-pointer" />} >
        <DrawerContent className="bg-primary text-accentBeige">
          <DrawerHeader className="flex items-center justify-between border-b border-accentGold/20 px-5 py-4">
            <Molecules.Logo />
          </DrawerHeader>

          <DrawerBody className="flex flex-col space-y-6 px-6 py-6">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-accentBeige hover:text-accentGold transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>

    </div>
  );
}

export default Header;
