'use client'
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string>("");
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  // Function to set active link and close the sheet
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsSheetOpen(false); // Close the sheet when a link is clicked
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto p-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-4xl font-bold tracking-wide">
          Lens
          <span className="text-primary">Guy</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 items-center">
          <li
            className={`cursor-pointer font-medium text-lg transition ${
              activeLink === "/" ? "text-primary underline" : "hover:text-primary"
            }`}
          >
            <Link href="/" onClick={() => handleLinkClick("/")}>
              Home
            </Link>
          </li>
          <li
            className={`cursor-pointer font-medium text-lg transition ${
              activeLink === "#portfolio" ? "text-primary underline" : "hover:text-primary"
            }`}
          >
            <Link href="#portfolio" onClick={() => handleLinkClick("#portfolio")}>
              Portfolio
            </Link>
          </li>
          <li
            className={`cursor-pointer font-medium text-lg transition ${
              activeLink === "#reviews" ? "text-primary underline" : "hover:text-primary"
            }`}
          >
            <Link href="#reviews" onClick={() => handleLinkClick("#reviews")}>
              Reviews
            </Link>
          </li>
          <li
            className={`cursor-pointer font-medium text-lg transition ${
              activeLink === "#contact" ? "text-primary underline" : "hover:text-primary"
            }`}
          >
            <Link href="#contact" onClick={() => handleLinkClick("#contact")}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Contact Button for Desktop */}
        <div className="hidden lg:flex">
          <Link href="https://instagram.com/thee.lens_guyy?igshid=MmVlMjlkMTBhMg==">
            <Button className="bg-primary text-white hover:bg-primary/80">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-5">
          <Link
            href="https://instagram.com/thee.lens_guyy?igshid=MmVlMjlkMTBhMg=="
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80"
          >
            Book Now
          </Link>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger>
              <Menu className="w-6 h-6 cursor-pointer text-primary" />
            </SheetTrigger>
            <SheetContent>
              <div className="pt-10">
                <ul className="flex flex-col gap-8 items-center">
                  <li
                    className={`cursor-pointer font-medium text-2xl p-5 transition ${
                      activeLink === "/" ? "text-primary underline" : "hover:text-primary"
                    }`}
                  >
                    <SheetClose>
                      <Link href="/" onClick={() => handleLinkClick("/")}>
                        Home
                      </Link>
                    </SheetClose>
                  </li>
                  <li
                    className={`cursor-pointer font-medium text-2xl p-5 transition ${
                      activeLink === "#portfolio" ? "text-primary underline" : "hover:text-primary"
                    }`}
                  >
                    <SheetClose>
                      <Link href="#portfolio" onClick={() => handleLinkClick("#portfolio")}>
                        Portfolio
                      </Link>
                    </SheetClose>
                  </li>
                  <li
                    className={`cursor-pointer font-medium text-2xl p-5 transition ${
                      activeLink === "#reviews" ? "text-primary underline" : "hover:text-primary"
                    }`}
                  >
                    <SheetClose>
                      <Link href="#reviews" onClick={() => handleLinkClick("#reviews")}>
                        Reviews
                      </Link>
                    </SheetClose>
                  </li>
                  <li
                    className={`cursor-pointer font-medium text-2xl p-5 transition ${
                      activeLink === "#contact" ? "text-primary underline" : "hover:text-primary"
                    }`}
                  >
                    <SheetClose>
                      <Link href="#contact" onClick={() => handleLinkClick("#contact")}>
                        Contact
                      </Link>
                    </SheetClose>
                  </li>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
