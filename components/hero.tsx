import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Avatars from "./avatars";

const Hero = () => {
  return (
    <main className="container px-4 py-16 sm:py-24 lg:py-32 justify-between max-w-7xl">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="mt-0 md:mt-14">
          <h1 className="lg:text-6xl text-primary md:text-5xl text-3xl font-bold mb-4">
            Your Digital Banking Revolution
          </h1>
          <p className="text-customColor max-w-md mt-2 mb-4">
            Experience seamless, secure, and smart banking at your fingertips.
          </p>
          <div className="flex gap-4 mt-4">
            <Button className="bg-secondary text-primary hover:bg-secondary/80">Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
          <Avatars />
        </div>
        <div className="w-full shadow-xl rounded-3xl shadow-primary/40 border">
          <Image
            src="/assests/income-finedge.png"
            alt="Your Digital Banking"
            quality={100}
            width={1024}
            height={768}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
