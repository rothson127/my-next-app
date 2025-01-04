import MarqueeBar from "../marqueebar";
import NavBar from "../navbar";
import Footer from "../footer";
import UseFirstsect from "./use_firstsect";
import UseSecondsect from "./use_secondsect";
import UseThirdsect from "./use_thirdsect";
import UseFourthsect from "./use_fourthsect";

export default async function Page() {
    return (
        <div>
            <MarqueeBar />
            <NavBar />

            <div className="relative z-30">
                <div className="_remittix_content">
                    <UseFirstsect />
                    <UseSecondsect />
                    <UseThirdsect />
                    <UseFourthsect />
                    
                </div>
            </div>

            <Footer />
        </div>
    );
}