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
        <Script async src="https://www.googletagmanager.com/gtag/js?id=GT-KFTQ5FS" />

        {/* Include gtag.js initialization script */}
        <Script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GT-KFTQ5FS');
        ` }} />

        {/* Include gtag_report_conversion script */}
        <Script dangerouslySetInnerHTML={{ __html: `
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
              'send_to': 'AW-11336173490/ms1BCO3F1o0ZELKPwZ0q',
              'event_callback': callback
            });
            return false;
          }
        ` }} />

        {/* Other head elements... */}
        {/* Google Tag Manager - Global base code */}
        <Script dangerouslySetInnerHTML={{ __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5X9MZ6FF');
        ` }} />

        <Script type="text/javascript" async dangerouslySetInnerHTML={{ __html: `
            var script = document.createElement('script');
            script.async = true;
            script.type = 'text/javascript';
            var target = 'https://www.clickcease.com/monitor/stat.js';
            script.src = target;
            var elem = document.head;
            elem.appendChild(script);
          ` }} />
        {/* Google tag (gtag.js) */}
        {/* Other head scripts... */}
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5X9MZ6FF" height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
          {/* <!--  ClickCease.com tracking--> */}
          <a href="https://www.clickcease.com" rel="nofollow">
            <img src="https://monitor.clickcease.com" alt="ClickCease" />
          </a>
          {/* <!--  ClickCease.com tracking--> */}
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
