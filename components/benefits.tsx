import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Dot,
  Gauge,
  MailCheck,
  ScanQrCode,
  SmartphoneNfc,
} from "lucide-react";

const Benefits = () => {
  return (
    <main className="container px-4 py-16 sm:py-24 lg:py-32 justify-between max-w-7xl">
      <div className="mx-auto text-center">
        <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-primary">
          Affordable and Transparent
        </h1>
      </div>
      <div className="grid lg:grid-cols-6 grid-cols-1 gap-4 mt-10">
        <div className="lg:col-span-3 bg-cardCustom rounded-3xl">
          <div className="p-8">
            <Gauge
              className="bg-secondary text-primary rounded-full p-2"
              size={40}
            />
            <h1 className="text-2xl font-semibold mt-4">
              Ultimate Convenience
            </h1>
            <p className="text-customColor max-w-lg mt-6">
              With FinEdge, manage your finances anytime, anywhere, directly
              from your mobile device. Whether you need to transfer money, pay
              bills, or track your spending, everything is at your fingertips
              with just a few taps.
            </p>

            <div className="flex gap-2 mt-4 text-customColor">
              <Check
                className="bg-secondary text-primary rounded-full p-1"
                size={20}
              />
              <p className=" ">Access Anywhere, Anytime</p>
            </div>

            <div className="flex gap-2 mt-1 text-customColor">
              <Check
                className="bg-secondary text-primary rounded-full p-1"
                size={20}
              />
              <p className=" ">Seamless Transactions</p>
            </div>
          </div>
          <Image
            src="/assests/convenience.png"
            alt="Ultimate Convenience"
            quality={100}
            width={800}
            height={800}
          />
        </div>

        <div className="lg:col-span-3 bg-cardCustom rounded-3xl">
          <div className="p-8">
            <ScanQrCode
              className="bg-secondary text-primary rounded-full p-2"
              size={40}
            />
            <h1 className="text-2xl font-semibold mt-4">
              Enhanced Security and Peace of Mind
            </h1>
            <p className="text-customColor max-w-lg mt-6">
              Your financial security is our top priority. FinEdge employs
              advanced encryption, two-factor authentication, and real-time
              fraud detection to ensure your money and personal information are
              always protected, giving you the peace of mind you deserve.
            </p>

            <div className="flex gap-2 mt-4 text-customColor">
              <Check
                className="bg-secondary text-primary rounded-full p-1"
                size={20}
              />
              <p className=" ">Top-Tier Protection</p>
            </div>

            <div className="flex gap-2 mt-1 text-customColor">
              <Check
                className="bg-secondary text-primary rounded-full p-1"
                size={20}
              />
              <p className=" ">Fraud Detection</p>
            </div>
          </div>
          <Image
            src="/assests/security.png"
            alt="Enhanced Security"
            quality={100}
            width={800}
            height={800}
          />
        </div>
      </div>
      <div className="bg-cardCustom rounded-3xl mt-4">
        <div className="lg:flex flex-none gap-0">
          <div className="p-8">
            <SmartphoneNfc
              className="bg-secondary text-primary rounded-full p-2"
              size={40}
            />
            <h1 className="text-2xl font-semibold mt-4">
              Smart Financial Management
            </h1>
            <p className="text-customColor max-w-6xl mt-6">
              Take control of your finances with FinEdge's intelligent budgeting
              tools and personalized savings plans. Our app helps you track your
              expenses, optimize your budget, and achieve your financial goals
              with ease.
            </p>

            <div className="flex gap-2 mt-4 text-customColor">
              <Check
                className="bg-secondary text-primary rounded-full p-1"
                size={20}
              />
              <p className=" ">Automated Budgeting</p>
            </div>

            <div className="flex gap-2 mt-1 text-customColor">
              <Check
                className="bg-secondary text-primary rounded-full p-1"
                size={20}
              />
              <p className=" ">Savings Optimization</p>
            </div>
          </div>
          <Image
            src="/assests/smart.png"
            alt="Enhanced Security"
            quality={100}
            width={1024}
            height={768}
          />
        </div>
      </div>
    </main>
  );
};

export default Benefits;
