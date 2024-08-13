"use client";

import { useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      avatar: "https://randomuser.me/api/portraits/men/30.jpg",
      name: "James Harrison",
      title: "Founder of TechFlow",
      quote:
        "FinEdge has been a game-changer for our company. The ability to manage finances with such ease and security has allowed us to focus more on growing our business. It's the ultimate banking solution for any startup.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/60.jpg",
      name: "Olivia Parker",
      title: "CEO of GreenWave Solutionsr",
      quote:
        "As a rapidly growing company, managing cash flow efficiently is critical. FinEdge's real-time alerts and automated budgeting tools have streamlined our financial processes, giving us more time to innovate and scale.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      name: "Laura Grant",
      title: "Owner of UrbanEats",
      quote:
        "What I love about FinEdge is the flexibility it offers. Whether it's handling multi-currency transactions or ensuring our funds are secure, FinEdge delivers exactly what we need as a global startup. It's like having a financial team in your pocket.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
      name: "Daniel Kim",
      title: "Co-Founder of NexGen Media",
      quote:
        "Running a fast-paced food startup, I need a banking partner that's as agile as my business. FinEdge's intuitive interface and reliable support have made managing our finances incredibly simple and stress-free. I can't imagine operating without it.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Michelle Roberts",
      title: "Founder of Spark Innovations",
      quote:
        "FinEdge has provided our startup with the financial tools we need to grow. The secure payment options and insightful budget tracking have given us confidence in our financial decisions, allowing us to focus on what we do best—innovation.",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <main className="container px-4 py-16 sm:py-24 lg:py-32 justify-between max-w-7xl">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="lg:text-3xl md:text-2xl text-xl font-bold">
            Join Thousands of Happy Customers
          </h1>
          <ul>
            {testimonials.map((item, idx) =>
              currentTestimonial == idx ? (
                <li key={idx}>
                  <figure>
                    <blockquote>
                      <p className="text-customColor max-w-6xl mt-6">
                        “{item.quote}“
                      </p>
                    </blockquote>
                    <div className="mt-6">
                      <img
                        src={item.avatar}
                        className="w-16 h-16 mx-auto rounded-full"
                      />
                      <div className="mt-3">
                        <span className="block text-primary font-semibold">
                          {item.name}
                        </span>
                        <span className="block text-customColor text-sm mt-0.5">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </figure>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
        <div className="mt-6">
          <ul className="flex gap-x-3 justify-center">
            {testimonials.map((item, idx) => (
              <li key={idx}>
                <button
                  className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-secondary focus:ring ${
                    currentTestimonial == idx ? "bg-secondary" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(idx)}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
