"use client";

import React from "react";
import BrandRepairPage from "../../components/pages/BrandRepairPage";

const HomePage = () => {
  return (
    <BrandRepairPage
      brandName="Teka"
      primaryColor="#E63946"
      secondaryColor="#C1121F"
      heroGradient="linear-gradient(160deg, #5a0a0f 0%, #7a0f15 25%, #E63946 75%, #C1121F 100%)"
      sectionGradient="linear-gradient(135deg, #2a0a0d 0%, #3a0f12 25%, #E63946 75%, #C1121F 100%)"
      statsGradient="linear-gradient(135deg, #E63946 0%, #C1121F 100%)"
      includeTV={false}
    />
  );
};

export default HomePage;
