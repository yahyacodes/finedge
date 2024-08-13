"use client";

import { useRef, useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqsCardProps {
  faqsList: FaqItem;
  idx: number;
}

const FaqsCard = ({ faqsList, idx }: FaqsCardProps) => {
  const answerElRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");

  const handleOpenAnswer = () => {
    const answerEl = answerElRef.current?.childNodes[0] as HTMLElement;
    const answerElH = answerEl?.offsetHeight || 0;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-500">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

const Faqs = () => {
  const faqsList: FaqItem[] = [
    {
      q: "How does FinEdge help startups manage their finances more efficiently?",
      a: "FinEdge provides powerful tools like real-time alerts, automated budgeting, and easy multi-currency management, allowing startups to streamline financial processes and focus more on business growth.",
    },
    {
      q: "Is FinEdge secure enough for a growing business?",
      a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
    },
    {
      q: "Can FinEdge handle international transactions for startups with global operations?",
      a: "Absolutely! FinEdge is designed to support multi-currency accounts and international transactions, making it ideal for startups and companies with global reach.",
    },
    {
      q: " What kind of support does FinEdge offer for business owners?",
      a: "FinEdge provides 24/7 customer support to assist with any banking needs, ensuring that business owners can get help whenever they need it.",
    },
    {
      q: "Can FinEdge be customized to fit the specific needs of my startup?",
      a: "Yes, FinEdge offers a customizable interface and flexible account options, allowing you to tailor your banking experience to suit your startup's unique needs.",
    },
  ];

  return (
    <main className="container px-4 py-16 sm:py-24 lg:py-32 justify-between max-w-7xl">
      <div className="space-y-3 text-center">
        <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-primary">
          Got Questions? We Have Answers
        </h1>
        <p className="text-customColor max-w-xl mt-2 mx-auto">
          Find answers to common questions from entrepreneurs and business
          owners about how FinEdge's features and support.
        </p>
      </div>
      <div className="mt-14">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} idx={idx} faqsList={item} />
        ))}
      </div>
    </main>
  );
};

export default Faqs;
