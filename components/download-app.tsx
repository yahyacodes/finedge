"use client";

import { Button } from "./ui/button";
import Image from "next/image";

const DownloadApp = () => {
  const handleForm = (e: any) => {
    e.preventDefault();
  };
  return (
    <main className="container px-4 py-16 sm:py-24 lg:py-32 justify-between max-w-7xl">
      <div className="relative overflow-hidden mx-4 px-4 py-14 rounded-2xl bg-secondary md:px-8 md:mx-8">
        <div className="relative z-10 max-w-xl mx-auto sm:text-center">
          <div className="space-y-3">
            <h1 className="lg:text-3xl md:text-2xl text-xl font-bold">
              Download Our App
            </h1>
            <p className="text-primary/80  max-w-lg mt-6">
              Get started with FinEdge today — download our app to manage your
              finances seamlessly anytime, anywhere.
            </p>
          </div>
          <div className="mt-10 mx-auto">
            <div className="md:flex flex-none md:space-x-4">
              <Button className="md:w-[20rem]">Download on App Store</Button>
              <Button
                className="md:w-[20rem] bg-secondary border-2 border-primary hover:bg-secondary/70 md:mt-0 mt-5"
                variant="outline"
              >
                Download on Google Play
              </Button>
            </div>
            <p className="text-primary/60 max-w-lg mt-10">
              Get started now and take control of your financial future with
              FinEdge!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DownloadApp;
