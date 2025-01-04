import MarqueeBar from "../marqueebar";
import NavBar from "../navbar";
import Footer from "../footer";
import HowFirstsect from "./how_firstsect";
import HowSecondsect from "./how_secondsect";
import HowThirdsect from "./how_thridsect";
import HowFourthsect from "./how_fourthsect";

export default async function Page() {
    return (
        <div>
            <MarqueeBar />
            <NavBar />

            <div className="relative z-30">
                <div className="_remittix_content">
                    <HowFirstsect />
                    <HowSecondsect />
                    <HowThirdsect />
                    <HowFourthsect />
                    
                </div>
            </div>

            <Footer />
        </div>
    );
}