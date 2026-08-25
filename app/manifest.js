export default function manifest() {
  return {
    name: "Amalie & Ole Andreas",
    short_name: "A&O",
    description: "Bryllup på Lyngør 6.-8. august 2027",
    start_url: "/",
    display: "standalone",
    background_color: "#38414F",
    theme_color: "#38414F",
    icons: [
      { src: "/icon", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
