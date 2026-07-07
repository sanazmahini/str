import React from "react";
import Image from "next/image";
import { Profile } from "./Profile";
export const Header = () => {
  return (
    <>
      <header className="header ">
        <div className="flex items-center pr-5">
          <span>
            <Image
              src="/image/MainLogo.png"
              width="160"
              height="37"
              alt="load"
              loading="eager"
            />
          </span>

          <h1 className="pr-3">سامانه ضدپولشویی</h1>
        </div>
        <div>
          <Profile />
        </div>
      </header>
    </>
  );
};
