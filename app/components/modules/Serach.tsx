import React from "react";
import Image from "next/image";
export const Serach = () => {
  return (
    <>
      <div className="flex items-center pl-5">
        <span className="text-xs font-regular text-neutral-gray-7">جستجو</span>
        <span>
          <Image
            src="./icons/searchNormal.svg"
            width={24}
            height={24}
            alt="جستجو"
          />
        </span>
      </div>
    </>
  );
};
