"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import Image from "next/image";
import { useState } from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuContent, NavigationMenuTrigger, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { createPortal } from "react-dom";

export function Header() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "AI",
      link: "#ai",
    },
   
    {
      name: "API Docs",
      link: "#api-docs",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <Image
            src="/logo/senjaro-pay-dark.png"
            alt="logo"
            width={100}
            height={40}
            className="p-1"
          />
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3 flex flex-col items-center">
                      <Image
                        src="/logo/senjaro-pay-dark.png"
                        alt="Features"
                        width={80}
                        height={32}
                        className="mb-2"
                      />
                      <NavigationMenuLink asChild>
                        <a
                          className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                          href="#features"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium">
                            Features
                          </div>
                          <p className="text-muted-foreground text-sm leading-tight">
                            Discover all the features of our platform.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>AI</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#ai">AI Features</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            
              <NavigationMenuItem>
                <NavigationMenuTrigger>API Docs</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#api-docs">API Documentation</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary" className="text-black border border-primary rounded-sm">Login</NavbarButton>
            <NavbarButton variant="primary" className="text-white rounded-sm py-3.5 bg-primary">Sign Up - It's Free</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="px-4 justify-between">
          <MobileNavHeader>
              <Image
            src="/logo/senjaro-pay-dark.png"
            alt="logo"
            width={80}
            height={40}
            className="w-20 h-10 object-contain"
          />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
        
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {/* Scrollable nav links */}
              <div className="flex-1 flex flex-col w-full px-4 text-xl font-bold overflow-hidden py-6">
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300 my-2"
                >
                  <span className="block hover:underline">{item.name}</span>
                </a>
              ))}
            </div>
            {/* Button row at the bottom of the menu */}
            <div className="w-full px-4 pb-6 flex flex-row gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full bg-none border border-primary rounded-sm"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full bg-primary rounded-sm text-white"
              >
                Sign Up
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* Navbar */}
    </div>
  );
}



// Helper for navigation menu list items
interface ListItemProps extends React.ComponentPropsWithoutRef<"li"> {
  title: string;
  href: string;
  children: React.ReactNode;
}
function ListItem({ title, children, href, ...props }: ListItemProps) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
