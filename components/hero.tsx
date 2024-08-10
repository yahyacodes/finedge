import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Avatars from "./avatars";

const Hero = () => {
  return (
    <main className="container px-4 py-16 sm:py-24 lg:py-32 justify-between max-w-5xl">
      <div className="grid grid-cols-2 gap-4">
        <div className="mt-5">
          <h1 className="lg:text-5xl md:text-5xl text-3xl font-bold">
            Your Digital Banking Revolution
          </h1>
          <p className="text-customColor max-w-md mt-2">
            Experience seamless, secure, and smart banking at your fingertips.
          </p>
          <div className="flex gap-4 mt-4">
            <Button className="bg-secondary text-primary">Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
          <Avatars />
        </div>
        <div className="w-full shadow-md rounded-3xl shadow-primary/20">
          <Image
            src="/assests/income-finedge.png"
            alt="Automation Nexusai"
            className="rounded-3xl"
            width={1024}
            height={768}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
