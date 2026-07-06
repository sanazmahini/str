import localFont from "next/font/local";

export const iransans = localFont({
  src: [
    {
      path: "./iran-sans/woff2/IRANSansWeb(FaNum)_UltraLight.woff2",
      weight: "200",
      style: "extralight",
    },
    {
      path: "./iran-sans/woff2/IRANSansWeb(FaNum)_Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "./iran-sans/woff2/IRANSansWeb(FaNum).woff2",
      weight: "400",
      style: "normal",
    },

    {
      path: "./iran-sans/woff2/IRANSansWeb(FaNum)_Medium.woff2",
      weight: "500",
      style: "medium",
    },

    {
      path: "./iran-sans/woff2/IRANSansWeb(FaNum)_Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "./iran-sans/woff2/IRANSansWeb(FaNum)_Black.woff2",
      weight: "900",
      style: "black",
    },
  ],
  variable:"--font-iransans"
});
