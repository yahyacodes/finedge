import React from "react";
import Image from "next/image";
import { ArrowBigUpDash, CircleCheck, ScanEye } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Benefits = () => {
  return (
    <main
      className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 justify-between max-w-5xl"
      id="about"
    >
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-0 ">
        <div className="lg:col-span-2 mx-auto mb-10">
          <h1 className="md:text-4xl text-2xl max-w-md font-bold text-primary">
            Ultimate Convenience
          </h1>
          <p className="text-customColor max-w-md mt-6">
            With FinEdge, manage your finances anytime, anywhere, directly from
            your mobile device. Whether you need to transfer money, pay bills,
            or track your spending, everything is at your fingertips with just a
            few taps
          </p>

          <div className="flex gap-2 mt-4 text-customColor">
            <ScanEye
              className="mt-1 bg-secondary text-primary p-2 rounded-full"
              size={35}
            />
            <p className="mt-2">Access Anywhere, Anytime</p>
          </div>

          <div className="flex gap-2 mt-1 text-customColor">
            <ArrowBigUpDash
              className="mt-1 bg-secondary text-primary p-2 rounded-full"
              size={35}
            />
            <p className="mt-2">Seamless Transaction</p>
          </div>

          <Link href="/waitlist">
            <Button className="mt-10 py-2">Start Free Trial</Button>
          </Link>
        </div>
        <div className="lg:col-span-1">
          <div className="w-full bg-secondary/40 rounded-3xl p-4">
            <Image
              src="/assests/Container.png"
              alt="Workflow Nexusai"
              className=""
              quality={100}
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-0 mt-24">
        <div className="lg:col-span-1">
          <div className="w-full bg-secondary/40 rounded-3xl p-4">
            <Image
              src="/assests/custom-card-finedge.png"
              alt="Workflow Nexusai"
              className="bg-white rounded-3xl"
              quality={100}
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="lg:col-span-2 mx-auto mb-10">
          <h1 className="md:text-4xl text-2xl max-w-md font-bold text-primary">
            Ultimate Convenience
          </h1>
          <p className="text-customColor max-w-md mt-6">
            With FinEdge, manage your finances anytime, anywhere, directly from
            your mobile device. Whether you need to transfer money, pay bills,
            or track your spending, everything is at your fingertips with just a
            few taps
          </p>

          <div className="flex gap-2 mt-4 text-customColor">
            <ScanEye
              className="mt-1 bg-secondary text-primary p-2 rounded-full"
              size={35}
            />
            <p className="mt-2">Access Anywhere, Anytime</p>
          </div>

          <div className="flex gap-2 mt-1 text-customColor">
            <ArrowBigUpDash
              className="mt-1 bg-secondary text-primary p-2 rounded-full"
              size={35}
            />
            <p className="mt-2">Seamless Transaction</p>
          </div>

          <Link href="/waitlist">
            <Button className="mt-10 py-2">Start Free Trial</Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Benefits;
