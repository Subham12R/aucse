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
import { useState } from "react";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Slider from "@/components/ui/slider";

const sampleItems = [
  {
    id: "1",
    title: "Beautiful Landscape",
    description: "A stunning view of mountains and valleys",
    image: "../1.jpg",
  },
  {
    id: "2",
    title: "City Skyline",
    description: "Modern architecture against the evening sky",
    image: "../2.jpg",
  },
  {
    id: "3",
    title: "Ocean Waves",
    description: "Peaceful waves crashing on the shore",
    image: "../3.jpg",
  },
    {
    id: "4",
    title: "Ocean Waves",
    description: "Peaceful waves crashing on the shore",
    image: "../4.jpg",
  },
    {
    id: "5",
    title: "Adamas",
    description: "Peaceful waves crashing on the shore",
    image: "../5.jpg",
  },
  
]

export default function HomePage() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Notice",
      link: "#contact",
    },
    {
      name: "Programs",
      link: "#contact",
    },
    {
      name: "Calendar",
      link: "#contact",
    },
    {
      name: "Infrastructure",
      link: "#contact",
    },
        {
      name: "More",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary">Apply Now</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Apply Now
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
      {/* Hero */}
      <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-5xl font-bold text-shadow-blue-950 dark:text-blue-950">
              Adamas University<br />
              <span className="text-3xl md:text-[4rem] font-bold mt-1 leading-none text-blue-950">
                Department Of Computer Science
              </span>
            </h1>
          </>
        }
      >

        {/* Auto-playing slider */}
        <div className="flex justify-center w-full h-full">
          <Slider items={sampleItems} autoPlay={true} autoPlayInterval={4000} />
        </div>
      </ContainerScroll>
    </div>

    {/* Notice Board */}
    </div>
  );
}

