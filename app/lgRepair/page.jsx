"use client";

import React from "react";
import BrandRepairPage from "../../components/pages/BrandRepairPage";

const HomePage = () => {
  return (
    <BrandRepairPage
      brandName="LG"
      primaryColor="#A50034"
      secondaryColor="#7a0026"
      heroGradient="linear-gradient(160deg, #3d0012 0%, #5a001b 25%, #A50034 75%, #7a0026 100%)"
      sectionGradient="linear-gradient(135deg, #0a0a0a 0%, #1a0a0e 25%, #A50034 75%, #7a0026 100%)"
      statsGradient="linear-gradient(135deg, #A50034 0%, #7a0026 100%)"
      includeTV={true}
    />
  );
};

export default HomePage;
