import { Roboto } from "next/font/google";
import localFont from "next/font/local";

export const roboto = Roboto({
  weight: ["400", "700"],
  style: ["italic", "normal"],
  subsets: ["cyrillic"],
});

//local font
export const sfpro = localFont({
  src: "./SFProText-Regular.ttf",
  weight: "400",
  display: "swap",
});
