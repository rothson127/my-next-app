
import MarqueeBar from "./marqueebar";
import NavBar from "./navbar";
import Footer from "./footer";
import Firstsect from "./home/firstsect";
import Secondsect from "./home/secondsect";
import Thirdsect from "./home/thirdsect";
import Thirdsect2 from "./home/thirdsect2";
import Fourthsect from "./home/fourthsect";
import Fifthsect from "./home/fifthsect";
import Sixthsect from "./home/sixthsect";

export default function Home() {
  return (
    <div>
      <MarqueeBar />
      <NavBar />

      <div className="relative z-30">
          <Firstsect />
          <Secondsect />
          <Thirdsect />
          <Thirdsect2 />
          <Fourthsect />
          <Fifthsect />
          <Sixthsect />
      </div>

      <Footer />
    </div>

  );
}
