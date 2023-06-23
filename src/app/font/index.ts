import { Roboto } from "next/font/google";

import localFont from "next/font/local";

//TODO:   display: "swap", нужен ли
export const roboto = Roboto({
    weight: ["400", "700"],
    style: ["italic", "normal"],
    subsets: ["cyrillic"],
    /*  display: "swap", */
});

//local font
export const sfpro = localFont({
    src: "./font/SFProText-Regular.ttf",
    weight: "400",
    display: "swap",
});