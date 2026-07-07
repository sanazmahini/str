import React from "react";
import Image from "next/image";
export const CreateButton = () => {
  return (
    <div>
      <div className="flex items-center bg-neutral-600  rounded-2 px-2 py-2 ">
        <span className="font-regular text-sm text-text-primary">
          ایجاد گزارش جدید
        </span>
        <span>
          <Image
            src="./icons/addSquare.svg"
            width={24}
            height={24}
            alt="افزودن گزارش جدید"
          />
        </span>
      </div>
    </div>
  );
};
