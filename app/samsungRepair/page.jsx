"use client";

import React from "react";
import BrandRepairPage from "../../components/pages/BrandRepairPage";

const HomePage = () => {
  return (
    <BrandRepairPage
      brandName="Samsung"
      primaryColor="#000000"
      secondaryColor="#1a1a1a"
      heroGradient="linear-gradient(160deg, #1a1a1a 0%, #2a2a2a 25%, #333333 75%, #1a1a1a 100%)"
      sectionGradient="linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #333333 75%, #1a1a1a 100%)"
      statsGradient="linear-gradient(135deg, #000000 0%, #1a1a1a 100%)"
      includeTV={true}
    />
  );
};

export default HomePage;
