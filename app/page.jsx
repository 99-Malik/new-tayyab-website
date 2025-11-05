"use client";

import React from "react";
import BrandRepairPage from "../components/pages/BrandRepairPage";

const HomePage = () => {
  return (
    <BrandRepairPage
      brandName="Fix Appliances AE"
      primaryColor="#06b6d4"
      secondaryColor="#3b82f6"
      heroGradient="linear-gradient(160deg, #1e293b 0%, #334155 25%, #06b6d4 75%, #3b82f6 100%)"
      sectionGradient="linear-gradient(135deg, #1e293b 0%, #334155 25%, #06b6d4 75%, #3b82f6 100%)"
      statsGradient="linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)"
      includeTV={true}
    />
  );
};

export default HomePage;
