import image from "./assets/ferris-rust.png";
import { getImage } from "astro:assets";

export const logo = await getImage({
	src: image
});