import MarqueeBar from "../marqueebar";
import NavBar from "../navbar";
import Footer from "../footer";
import HowFirstsect from "./how_firstsect";
import HowSecondsect from "./how_secondsect";
import HowThirdsect from "./how_thirdsect";
import HowFourthsect from "./how_fourthsect";

export default async function Page() {
    return (
        <div>
            <MarqueeBar />
            <NavBar />

            <div className="relative z-30">
                <HowFirstsect />
                <HowSecondsect />
                <HowThirdsect />
                <HowFourthsect />
            </div>

            <Footer />
        </div>
    );
}