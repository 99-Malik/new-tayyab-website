import BrandHeader from "../../components/header/BrandHeader";
import BrandFooter from "../../components/footer/BrandFooter";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
export default function BoschLayout({ children }) {
  return (
    <>
      {/* <BrandHeader 
        brandName="Bosch" 
        logoPath="/bosch.svg" 
        brandColor="#CF1F3B"
        logoWidth={140}
        logoHeight={45}
      />
      {children}
      <BrandFooter 
        brandName="Bosch" 
        logoPath="/bosch.svg" 
        brandColor="#CF1F3B"
        logoWidth={120}
        logoHeight={40}
      /> */}
      {children}
    </>
  );
}

