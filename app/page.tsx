
import MarqueeBar from "./marqueebar";
import NavBar from "./navbar";
import Footer from "./footer";
import Firstsect from "./firstsect";
import Secondsect from "./secondsect";
import Thirdsect from "./thirdsect";
import Thirdsect2 from "./thirdsect2";
import Fourthsect from "./fourthsect";
import Fifthsect from "./fifthsect";
import Sixthsect from "./sixthsect";

export default function Home() {
  return (
    <div>
      <MarqueeBar />
      <NavBar />

      <div className="relative z-30">
        <div className="_remittix_content">
          <Firstsect />
          <Secondsect />
          <Thirdsect />
          <Thirdsect2 />
          <Fourthsect />
          <Fifthsect />
          <Sixthsect />          
        </div>
      </div>

      <Footer />

      <div className="Toastify"></div>
    </div>

  );
}
