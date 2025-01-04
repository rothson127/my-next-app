import MarqueeBar from "../marqueebar";
import NavBar from "../navbar";
import Footer from "../footer";

export default async function Page() {
    return (
        <div>
            <MarqueeBar />
            <NavBar />

            <div className="relative z-30">
                <div className="bg-term _remittix_content">
                    <div className="flex flex-col gap-8 md:gap-12 relative z-10 px-4 md:px-12 py-20 md:mt-20 mx-auto max-w-[943px]">
                        <h1 className="text-3xl md:text-5xl font-bold text-yellow text-center">
                            Pay with Card
                        </h1>
                        <div>
                            <div className="flex flex-col gap-8">
                                <span className="font-normal">
                                    Purchase Remittix tokens (RTX) Using a Card
                                </span>
                                <div className="flex flex-col gap-2">
                                    <p className="text-xl">New to DeFi?</p>
                                    <span className="text-gray font-medium">
                                        Getting started is simple! You can buy RTX tokens with your credit or
                                        debit card—no verification or KYC required.
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-xl">Step 1: Buy ETH Using Your Card</p>
                                    <span className="text-gray font-medium">
                                        Head to one of these trusted platforms to purchase Ethereum (ETH):
                                    </span>
                                    <ul className="ml-4">
                                        <li className="mt-0">
                                            <a
                                                className="text-blue-500 border-b border-blue-500"
                                                href="https://ramp.network/"
                                            >
                                                Ramp Network
                                            </a>
                                        </li>
                                        <li className="mt-0">
                                            <a
                                                className="text-blue-500 border-b border-blue-500"
                                                href="https://global.transak.com/"
                                            >
                                                Transak
                                            </a>
                                        </li>
                                        <li className="mt-0">
                                            <a
                                                className="text-blue-500 border-b border-blue-500"
                                                href="https://www.moonpay.com/buy"
                                            >
                                                MoonPay
                                            </a>
                                        </li>
                                    </ul>
                                    <span className="text-gray font-medium">
                                        Follow the platform’s instructions to buy ETH and send it directly to
                                        your wallet.
                                    </span>
                                    <span className="text-gray font-medium">
                                        <b>Tip:</b> To cover all costs, including gas fees for buying RTX, we
                                        recommend purchasing at least $50 worth of ETH.
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-xl">Step 2: Swap ETH for RTX</p>
                                    <span className="text-gray font-medium">
                                        Once ETH is in your wallet, use it to purchase RTX.
                                    </span>
                                    <ul className="text-gray font-medium ml-4">
                                        <li className="mt-0">Connect your wallet to the Remittix website.</li>
                                        <li className="mt-0">
                                            Follow the steps outlined in the “How to Buy Remittix (RTX)” guide.
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-gray font-medium">
                                        <b>Note:</b> Make sure your wallet has enough ETH to cover both the
                                        RTX purchase and any gas fees.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
}