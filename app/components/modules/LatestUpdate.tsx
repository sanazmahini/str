import React from "react";
import Image from "next/image";
export const LatestUpdate = () => {
  return (
    <>
      <div className="flex items-center bg-neutral-200  border border-gray-500 rounded-3xs font-regular text-xs px-1 mr-2 h-[24px]">
        <span className="bg-gray-100 ">
          <Image src="/icons/refresh.svg" width={11} height={11} alt="رفرش" />
        </span>
        <span className="mr-2">اخرین بروزرسانی:</span>
        <span className="mr-1">14:23:00</span>
        <span className="mr-2">1404/05/12</span>
      </div>
    </>
  );
};
