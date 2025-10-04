export default function manifest() {
  return {
    name: "Fix Appliances AE - Appliance Repair Services",
    short_name: "Fix Appliances AE",
    description: "Professional appliance repair services in Dubai and Abu Dhabi. Expert technicians for Samsung, LG, Bosch, Siemens and all major brands.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#06b6d4",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any maskable"
      }
    ],
    categories: ["business", "utilities", "productivity"],
    lang: "en",
    dir: "ltr"
  }
}
