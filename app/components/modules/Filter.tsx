import React from "react";
import Image from "next/image";
export const Filter = () => {
  return (
    <>
      <div className="flex items-center pl-5">
        <span className="text-xs font-regular text-neutral-gray-7">فیلتر</span>
        <span>
          <Image src="./icons/filter.svg" width={24} height={24} alt="فیلتر" />
        </span>
      </div>
    </>
  );
};
