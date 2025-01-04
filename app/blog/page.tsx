import MarqueeBar from "../marqueebar";
import NavBar from "../navbar";
import Footer from "../footer";
import BlogFirstsect from "./blog_firstsect";
import BlogSecondsect from "./blog_secondsect";

export default async function Page() {
    return (
        <div>
            <MarqueeBar />
            <NavBar />

            <div className="relative z-30">
                <div className="_remittix_content">
                    <BlogFirstsect />
                    <BlogSecondsect />                    
                </div>
            </div>

            <Footer />
        </div>
    );
}