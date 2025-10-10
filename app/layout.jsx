// layout.jsx

import Head from "next/head";
import Header from "../components/header/Header";
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
  title: "Fix Appliances AE | Professional Appliance Repair Services",
  description:
    "Fix Appliances AE is a leading appliance repair company in Dubai and Abu Dhabi. Expert technicians providing 24/7 repair services for Samsung, LG, Bosch, Siemens, and all major appliance brands.",
  creator: "Fix Appliances AE",
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/svg+xml' }
    ],
    apple: '/icon.svg',
  },
  manifest: '/manifest.js'
};

// Define gtag_report_conversion if window is defined



// Main layout component
export default function RootLayout({ children }) {
  return <html lang="en">
      <head>
        {/* Include gtag.js script */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17622011404" />

        {/* Include gtag.js initialization script */}
        <Script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17622011404');
        ` }} />

      </head>
      <body className={inter.className}>
       
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
