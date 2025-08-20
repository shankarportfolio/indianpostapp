import { Raleway, Lilita_One, Manrope } from "next/font/google";

export const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  style: ["normal", "italic"]
});

export const lilita_one = Lilita_One({
  weight: ["400"],
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  style: ["normal"]
});

export const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  style: ["normal"]
});