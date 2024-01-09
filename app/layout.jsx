import Head from 'next/head';
import Script from 'next/script';
import Header from "../components/header/BoschHeader";
import Footer from "../components/footer/Footer";
import FixedCallButtons from "../components/buttons/FixedCallButtons";
import { GTM_ID } from "../lib/gtm";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { NavigationEvents } from "../components/navigation-events";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "RepairHomeUAE | Home Appliance Repair Service",
  description:
    "RepairHomeUAE is a leading home appliance repair company in Dubai and Abu Dhabi. We offer repair services for Samsung, Bosch, Lg and Siemens appliances.",
  creator: "cyhammad",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        {/* Google Tag Manager - Global base code */}
        <Script
          id="gtag-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtag/js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', '${GTM_ID}');
            `,
          }}
        />
        {/* Other head elements */}
      </Head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header className="mt-[-10px]" />
        {children}
        
        <FixedCallButtons />
        <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense>
        <Footer/>
      </body>
    </>
  );
}
