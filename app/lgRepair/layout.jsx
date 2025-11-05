import BrandHeader from "../../components/header/BrandHeader";
import BrandFooter from "../../components/footer/BrandFooter";

export default function LGLayout({ children }) {
  return (
    <>
      <BrandHeader 
        brandName="LG" 
        logoPath="/lg.svg" 
        brandColor="#A50034"
        logoWidth={90}
        logoHeight={30}
      />
      {children}
      <BrandFooter 
        brandName="LG" 
        logoPath="/lg.svg" 
        brandColor="#A50034"
        logoWidth={140}
        logoHeight={45}
      />
    </>
  );
}

