"use client";

import React from "react";
import BrandRepairPage from "../../components/pages/BrandRepairPage";

const HomePage = () => {
  return (
    <BrandRepairPage
      brandName="Siemens"
      primaryColor="#01A4B4"
      secondaryColor="#007a87"
      heroGradient="linear-gradient(160deg, #003d43 0%, #005a61 25%, #01A4B4 75%, #007a87 100%)"
      sectionGradient="linear-gradient(135deg, #0a1a1c 0%, #0d2a2e 25%, #01A4B4 75%, #007a87 100%)"
      statsGradient="linear-gradient(135deg, #01A4B4 0%, #007a87 100%)"
      includeTV={false}
    />
  );
};

export default HomePage;
