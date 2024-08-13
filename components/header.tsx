"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { Logs } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (!isClient) {
    return null;
  }

  return (
    <>
      <div className="sticky top-0 z-50 flex items-center justify-between">
        <NavigationMenu
          className={`transition-all duration-300 ${
            hasScrolled
              ? "md:border border-neutral-300 shadow-lg"
              : "border-transparent"
          } lg:w-[60rem] md:w-[45rem] w-[24rem] mt-4 rounded-full p-2 relative bg-gradient-to-b from-background/40 via-background/0 to-background/80 backdrop-blur-xl`}
        >
          <NavigationMenuList className="md:w-full md:flex md:items-center md:justify-between">
            <NavigationMenuItem className="xl:mr-24 md:mr-0 md:flex hidden">
              <Link className="flex gap-2" href="/">
                <svg
                  fill="none"
                  height="48"
                  viewBox="0 0 40 48"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#0c111d">
                    <path d="m17.6231 4.98456c1.3127-1.31275 3.4411-1.31275 4.7538 0l4.7539 4.75386c1.3127 1.31278 1.3127 3.44108 0 4.75388l-4.7539 4.7538c-1.3127 1.3128-3.4411 1.3128-4.7538 0l-4.7539-4.7538c-1.3127-1.3128-1.3127-3.4411 0-4.75388z" />
                    <path d="m29.5077 16.8692c1.3128-1.3127 3.4411-1.3127 4.7539 0l4.7538 4.7539c1.3128 1.3127 1.3128 3.4411 0 4.7538l-4.7538 4.7539c-1.3128 1.3127-3.4411 1.3127-4.7539 0l-4.7538-4.7539c-1.3128-1.3127-1.3128-3.4411 0-4.7538z" />
                    <path d="m5.73842 16.8692c1.31274-1.3127 3.44112-1.3127 4.75388 0l4.7538 4.7539c1.3128 1.3127 1.3128 3.4411 0 4.7538l-4.7538 4.7539c-1.31276 1.3127-3.44114 1.3127-4.75388 0l-4.753863-4.7539c-1.312743-1.3127-1.312743-3.4411 0-4.7538z" />
                    <path d="m17.6231 28.7539c1.3127-1.3128 3.4411-1.3128 4.7538 0l4.7539 4.7538c1.3127 1.3128 1.3127 3.4411 0 4.7539l-4.7539 4.7538c-1.3127 1.3128-3.4411 1.3128-4.7538 0l-4.7539-4.7538c-1.3127-1.3128-1.3127-3.4411 0-4.7539z" />
                  </g>
                </svg>
                <h1 className="font-bold tex-xl mt-3 text-primary">FinEdge</h1>
              </Link>
            </NavigationMenuItem>
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } md:block absolute md:relative top-full md:mt-0 md:left-0 mt-10 left-10 right-0`}
            >
              <div className="flex flex-col md:flex-row text-primary cursor-pointer font-medium">
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Services
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Pricing
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Careers
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </div>
            </div>
            <NavigationMenuItem>
              <Button className="transition-colors duration-200 xl:ml-24 md:ml-0 hidden md:flex bg-secondary text-primary hover:bg-secondary/80">
                Get Started
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>

          <NavigationMenuList className="flex md:hidden justify-center">
            <div className="flex">
              <NavigationMenuItem>
                <Link className="flex gap-2" href="/">
                  <svg
                    fill="none"
                    height="48"
                    viewBox="0 0 40 48"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#0c111d">
                      <path d="m17.6231 4.98456c1.3127-1.31275 3.4411-1.31275 4.7538 0l4.7539 4.75386c1.3127 1.31278 1.3127 3.44108 0 4.75388l-4.7539 4.7538c-1.3127 1.3128-3.4411 1.3128-4.7538 0l-4.7539-4.7538c-1.3127-1.3128-1.3127-3.4411 0-4.75388z" />
                      <path d="m29.5077 16.8692c1.3128-1.3127 3.4411-1.3127 4.7539 0l4.7538 4.7539c1.3128 1.3127 1.3128 3.4411 0 4.7538l-4.7538 4.7539c-1.3128 1.3127-3.4411 1.3127-4.7539 0l-4.7538-4.7539c-1.3128-1.3127-1.3128-3.4411 0-4.7538z" />
                      <path d="m5.73842 16.8692c1.31274-1.3127 3.44112-1.3127 4.75388 0l4.7538 4.7539c1.3128 1.3127 1.3128 3.4411 0 4.7538l-4.7538 4.7539c-1.31276 1.3127-3.44114 1.3127-4.75388 0l-4.753863-4.7539c-1.312743-1.3127-1.312743-3.4411 0-4.7538z" />
                      <path d="m17.6231 28.7539c1.3127-1.3128 3.4411-1.3128 4.7538 0l4.7539 4.7538c1.3127 1.3128 1.3127 3.4411 0 4.7539l-4.7539 4.7538c-1.3127 1.3128-3.4411 1.3128-4.7538 0l-4.7539-4.7538c-1.3127-1.3128-1.3127-3.4411 0-4.7539z" />
                    </g>
                  </svg>
                  <h1 className="font-bold tex-xl mt-3 text-primary">
                    FinEdge
                  </h1>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="flex justify-end mt-2">
                <Logs className="text-primary ml-40" onClick={toggleMenu} />
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-secondary h-96 z-40 md:hidden p-4 rounded-br-3xl rounded-bl-3xl shadow-lg">
          {/* This div creates a full-screen white background when the menu is open on small screens */}
        </div>
      )}
    </>
  );
}
