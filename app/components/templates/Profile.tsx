import React from "react";
import Image from "next/image";
export const Profile = () => {
  return (
    <>
    <div className="flex pl-10">
      <div>
        <Image src="/image/avatar.png" width={50} height={50} alt="load img" />
      </div>
     
      <div className="d-flex flex-col">
      <div>
        <h2 className="">ساناز ماهینی</h2>
      </div>
      <div>
        <span className="font-regular text-2xs">کارشناس هوش تجاری</span>
      </div>
      </div>
      </div>
    </>
  );
};
