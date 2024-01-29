// Import necessary modules and components
import Head from "next/head";
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
  return <html lang="en">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=GT-KFTQ5FS" />
      <Script dangerouslySetInnerHTML={{ __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'GT-KFTQ5FS');
            ` }} />

      <Head>
        {/* Other head elements... */}
        {/* Google Tag Manager - Global base code */}
        <Script dangerouslySetInnerHTML={{ __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5X9MZ6FF');
            ` }} />
        <Script defer src="https://pulse.clickguard.com/s/accAKdAZtP5Vl/astWa776s9CIj" />
        {/* Google tag (gtag.js) */}
        {/* Other head scripts... */}
      </Head>
      <body className={inter.className}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5X9MZ6FF" height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>
        <Header className="mt-[-10px]" />
        {children}
        <FixedCallButtons />
        <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense>
        <Footer />
      </body>
    </html>;
}
