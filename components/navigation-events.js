"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pageview } from "../lib/gtm";

export function NavigationEvents() {
  const pathname = usePathname();

  useEffect(() => {
    const url = pathname;
    console.log("URLLLLL", url);
    // pageview(url);
  }, [pathname]);

  return null;
}
