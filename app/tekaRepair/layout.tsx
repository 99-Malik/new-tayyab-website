import BrandHeader from "../../components/header/BrandHeader";
import BrandFooter from "../../components/footer/BrandFooter";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
export default function TekaLayout({ children }) {
  return (
    <>
      {/* <BrandHeader 
        brandName="Teka" 
        logoPath="/teka.svg" 
        brandColor="#E63946"
        logoWidth={50}
        logoHeight={25}
      />
      {children}
      <BrandFooter 
        brandName="Teka" 
        logoPath="/teka.svg" 
        brandColor="#E63946"
        logoWidth={120}
        logoHeight={40}
      /> */}


      {children}
    </>
  );
}

