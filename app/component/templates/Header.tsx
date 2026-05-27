import React from "react";
import Image from "next/image";
import { Profile } from "./Profile";
export const Header = () => {
  return (
    <>
      <span>
        <Image
          src="/image/MainLogo.png"
          width={200}
          height={200}
          alt="load"
          loading="lazy"
        />
      </span>
      <h3>سامانه ضدپولشویی</h3>
      <Profile />
    </>
  );
};
