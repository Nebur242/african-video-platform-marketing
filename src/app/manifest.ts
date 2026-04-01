import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Senflix",
    short_name: "Senflix",
    description:
      "A bilingual marketing site for Senflix focused on creator growth, discovery, moderation, and mobile-first distribution.",
    start_url: "/",
    display: "standalone",
    background_color: "#fcf8f6",
    theme_color: "#e74c3c",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-192-maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
