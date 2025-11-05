import BrandHeader from "../../components/header/BrandHeader";
import BrandFooter from "../../components/footer/BrandFooter";

export default function SiemensLayout({ children }) {
  return (
    <>
      <BrandHeader 
        brandName="Siemens" 
        logoPath="/siemens.svg" 
        brandColor="#01A4B4"
        logoWidth={140}
        logoHeight={20}
      />
      {children}
      <BrandFooter 
        brandName="Siemens" 
        logoPath="/siemens.svg" 
        brandColor="#01A4B4"
        logoWidth={120}
        logoHeight={40}
      />
    </>
  );
}

