"use client";

import * as Avatar from "@radix-ui/react-avatar";

const avatarData = [
  {
    name: "CT",
    imgURL: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "CT",
    imgURL: "https://randomuser.me/api/portraits/med/men/44.jpg",
  },
  {
    name: "CT",
    imgURL: "https://randomuser.me/api/portraits/med/men/66.jpg",
  },
];
export default () => (
  <div className="flex -space-x-2 mt-10 overflow-hidden">
    {avatarData.map((item, idx) => {
      return (
        <Avatar.Root
          key={idx}
          className="border-2 border-primary h-14 w-14 flex items-center justify-center overflow-hidden rounded-full"
        >
          <Avatar.Image
            src={item.imgURL}
            className="h-full w-full object-cover"
          />
          <Avatar.Fallback delayMs={600}>{item.name}</Avatar.Fallback>
        </Avatar.Root>
      );
    })}
    <div>
      <h1 className="text-4xl text-primary font-semibold translate-x-5">
        10 Million+
      </h1>
      <p className="text-customColor w-52 mt-2 translate-x-5 text-xs">
        Trusted by millions of satisfied users. Our financial services have made
        real impact in people's lives
      </p>
    </div>
  </div>
);
