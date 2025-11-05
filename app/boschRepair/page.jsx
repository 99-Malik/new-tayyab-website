"use client";

import React from "react";
import BrandRepairPage from "../../components/pages/BrandRepairPage";

const HomePage = () => {
  return (
    <BrandRepairPage
      brandName="Bosch"
      primaryColor="#CF1F3B"
      secondaryColor="#8b1a2a"
      heroGradient="linear-gradient(160deg, #4d0c16 0%, #6b0f1e 25%, #CF1F3B 75%, #8b1a2a 100%)"
      sectionGradient="linear-gradient(135deg, #0a0a0a 0%, #1a0a0e 25%, #CF1F3B 75%, #8b1a2a 100%)"
      statsGradient="linear-gradient(135deg, #CF1F3B 0%, #8b1a2a 100%)"
      includeTV={false}
    />
  );
};

export default HomePage;
