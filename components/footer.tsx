"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const PageFooter = () => {
  const footerNavs = [
    {
      label: "Menu",
      items: [
        {
          href: "#",
          name: "About Us",
        },
        {
          href: "#",
          name: "Pricing",
        },
        {
          href: "#",
          name: "Careers",
        },
        {
          href: "#",
          name: "Contact Us",
        },
      ],
    },
    {
      label: "Info",
      items: [
        {
          href: "#",
          name: "Download",
        },
        {
          href: "#",
          name: "Demos",
        },
        {
          href: "#",
          name: "Support",
        },
        {
          href: "#",
          name: "Privacy Policy",
        },
      ],
    },
    {
      label: "Developer",
      items: [
        {
          href: "#",
          name: "Documentation",
        },
        {
          href: "#",
          name: "API Pricing",
        },
        {
          href: "#",
          name: "Guide",
        },
        {
          href: "#",
          name: "Change Log",
        },
      ],
    },
  ];

  return (
    <footer className="container px-4 pt-32 justify-between max-w-7xl">
      <div className="gap-6 justify-between md:flex">
        <div className="flex-1">
          <div className="max-w-xs">
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
          </div>
          <div className="mt-6">
            <h1 className="lg:text-2xl text-xl font-bold text-primary">
              Join Our Newsletter to get regular updates
            </h1>
            <p className="text-customColor max-w-xl mt-2">
              Subscribe our newsletter to get more free design course and
              resource
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="mt-2">
            <div className="max-w-sm flex items-center border rounded-full p-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 outline-none rounded-full"
              />
              <Button className="bg-secondary text-primary hover:bg-secondary/80">
                Subscribe
              </Button>
            </div>
          </form>
        </div>
        <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4" key={idx}>
              <h4 className="text-primary font-medium">{item.label}</h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <a href={el.href} className="text-customColor">
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0 text-customColor">
          &copy; 2024 FinEdge All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Linkedin className="text-primary/60 hover:text-primary cursor-pointer" />
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Twitter className="text-primary/60 hover:text-primary cursor-pointer" />
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Instagram className="text-primary/60 hover:text-primary cursor-pointer" />
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Youtube className="text-primary/60 hover:text-primary cursor-pointer" />
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .svg-icon path,
        .svg-icon polygon,
        .svg-icon rect {
          fill: currentColor;
        }
      `}</style>
    </footer>
  );
};

export default PageFooter;
