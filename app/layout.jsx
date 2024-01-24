// Import necessary modules and components
import Header from "../components/header/BoschHeader";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "../components/footer/Footer";
import FixedCallButtons from "../components/buttons/FixedCallButtons";
import { GTM_ID } from "../lib/gtm";
import { Suspense } from "react";
import Script from "next/script";
import { NavigationEvents } from "../components/navigation-events";

// Create Inter instance for styling
const inter = Inter({ subsets: ["latin"] });

// Metadata for the HTML document
export const metadata = {
  title: "RepairHomeUAE | Home Appliance Repair Service",
  description:
    "RepairHomeUAE is a leading home appliance repair company in Dubai and Abu Dhabi. We offer repair services for Samsung, Bosch, Lg and Siemens appliances.",
  creator: "cyhammad"
};

// Main layout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Other head elements... */}
        {/* Google Tag Manager - Global base code */}
        <Script
          id="gtag-base"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtag/js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', '${GTM_ID}');
            `
          }}
        />
        <Script
          defer
          src="https://pulse.clickguard.com/s/accAKdAZtP5Vl/astWa776s9CIj"
        />
        {/* Other head scripts... */}
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
          {/* ClickCease.com tracking */}
          {/* <a href="https://www.clickcease.com" rel="nofollow">
            <img
              loading="lazy"
              src="https://monitor.clickcease.com"
              alt="ClickCease"
            />
          </a> */}
          {/* ClickCease.com tracking */}
        </noscript>
        <Header className="mt-[-10px]" />
        {children}
        <FixedCallButtons />
        <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
