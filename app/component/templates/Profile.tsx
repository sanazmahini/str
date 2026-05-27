import React from "react";
import Image from "next/image";
export const Profile = () => {
  return (
    <>
      <div>
        <Image src="/image/avatar.png" width={50} height={50} alt="load img" />
      </div>
      <div>
        <span>ساناز ماهینی</span>
      </div>
      <div>
        <span>کارشناس هوش تجاری</span>
      </div>
    </>
  );
};
