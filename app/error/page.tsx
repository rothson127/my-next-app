import MarqueeBar from "../marqueebar";
import NavBar from "../navbar";
import Footer from "../footer";

export default async function Page() {
    return (
        <div>
            <MarqueeBar />
            <NavBar />

            <div className="relative z-30">

                <div className="flex flex-col gap-8 md:gap-12 relative z-10 px-4 md:px-12 py-20 md:mt-20 mx-auto max-w-[943px]">
                    <h1 className="text-3xl md:text-5xl font-bold text-yellow text-center">
                        Common Errors and How to Fix Them
                    </h1>
                    <div>
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-2">
                                <p className="text-xl">1. Insufficient Funds for Transaction Costs</p>
                                <span className="text-gray font-medium">
                                    This error occurs when you don’t have enough ETH to cover gas fees.
                                </span>
                                <ul className="text-gray font-medium ml-4">
                                    <li className="mt-0">Ensure your ETH is on the ERC20 network.</li>
                                    <li className="mt-0">
                                        Adjust the purchase amount to leave enough ETH for gas fees.
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-xl">2. Execution Reverted: Insufficient Allowance</p>
                                <span className="text-gray font-medium">
                                    This issue arises when your wallet lacks the proper token allowance.
                                    To fix it:
                                </span>
                                <ul className="text-gray font-medium ml-4">
                                    <li className="mt-0">Visit the Etherscan Token Approval Checker.</li>
                                    <li className="mt-0">
                                        Connect your wallet via Web3 to view all current token approvals.
                                    </li>
                                    <li className="mt-0">Revoke all approvals listed.</li>
                                    <li className="mt-0">
                                        Return to remittix.io and retry purchasing your RTX tokens.
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-xl">3. Token Payment Failed</p>
                                <span className="text-gray font-medium">
                                    This error often happens during periods of high Ethereum network
                                    activity.
                                </span>
                                <ul className="text-gray font-medium ml-4">
                                    <li className="mt-0">Clear your browser cache.</li>
                                    <li className="mt-0">Restart your wallet application.</li>
                                    <li className="mt-0">Retry the transaction after some time.</li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-xl">4. Amount Exceeds Remaining Hardcap</p>
                                <span className="text-gray font-medium">
                                    This error occurs when a presale stage is nearly full.
                                </span>
                                <ul className="text-gray font-medium ml-4">
                                    <li className="mt-0">
                                        Reduce the purchase amount to align with the remaining hardcap for
                                        the current stage.
                                    </li>
                                    <li className="mt-0">
                                        Alternatively, wait for the next presale stage to begin.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
}