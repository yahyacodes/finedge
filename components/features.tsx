import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { LockKeyhole, Wallet, Zap } from "lucide-react";

const Features = () => {
  return (
    <main className="container px-4 py-16 sm:py-24 lg:py-32 justify-between max-w-7xl">
      <div className="mx-auto text-center">
        <h1 className="lg:text-3xl md:text-2xl text-xl font-bold">
          Banking Made Easy
        </h1>
        <p className="text-customColor max-w-md mt-2 mx-auto">
          FinEdge simplifies your financial life with seamless, secure, and
          user-friendly banking features tailored for your convenience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 mt-10">
        <div className="bg-cardCustom rounded-3xl p-4">
          <div className="flex gap-2">
            <Zap
              className="bg-secondary text-primary rounded-full p-2"
              size={40}
            />
            <h1 className="text-lg font-semibold mt-2">Instant Transfers</h1>
          </div>
          <p className="text-customColor p-4">
            Transfer money instantly and securely to any bank account, anytime,
            anywhere.
          </p>
        </div>

        <div className="bg-cardCustom rounded-3xl p-4">
          <div className="flex gap-2">
            <LockKeyhole
              className="bg-secondary text-primary rounded-full p-2"
              size={40}
            />
            <h1 className="text-lg font-semibold mt-2">Secure Payments</h1>
          </div>
          <p className="text-customColor p-4">
            Make payments with top-tier security, ensuring your transactions are
            protected.
          </p>
        </div>

        <div className="bg-cardCustom rounded-3xl p-4">
          <div className="flex gap-2">
            <Wallet
              className="bg-secondary text-primary rounded-full p-2"
              size={40}
            />
            <h1 className="text-lg font-semibold mt-2">Mobile Wallet</h1>
          </div>
          <p className="text-customColor p-4">
            Manage your finances effortlessly with our all-in-one mobile wallet.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Features;
