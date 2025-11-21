import BrandHeader from "../../components/header/BrandHeader";
import BrandFooter from "../../components/footer/BrandFooter";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
export default function SamsungLayout({ children }) {
  return (
    <>
      {/* <BrandHeader 
        brandName="Samsung" 
        logoPath="/Samsung.svg" 
        brandColor="#000000"
        logoWidth={140}
        logoHeight={45}
      />
      {children}
      <BrandFooter 
        brandName="Samsung" 
        logoPath="/Samsung.svg" 
        brandColor="#000000"
        logoWidth={120}
        logoHeight={40}
      /> */}
      {children}
    </>
  );
}

