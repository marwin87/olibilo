import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/brand";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BRAND.name,
    short_name: BRAND.name,
    description: "Household bill tracking made simple",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2f9e5f",
    icons: [
      {
        src: "/olibilo-google-play-512.png",
        sizes: "192x192 512x512",
        type: "image/png",
      },
    ],
  };
}
