import MarqueeBar from "../marqueebar";
import NavBar from "../navbar";
import Footer from "../footer";

import Web3 from "../components/web3modaldlg";

export default async function Page() {
    return (
        <div>
            <MarqueeBar />
            <NavBar />

            <div className="relative z-30">
                <div className="flex flex-col gap-8 md:gap-12 relative z-10 px-4 md:px-12 py-20 md:mt-20 mx-auto max-w-[943px]">
                    <h1 className="text-3xl md:text-5xl font-bold text-yellow text-center">
                        How to Buy Remittix tokens (RTX)
                    </h1>
                    <div className="flex flex-col gap-8">
                        <span className="font-normal">
                            <b>Note:</b> Remittix (RTX) is currently in its presale phase and is not
                            available on Uniswap, PancakeSwap, or any other decentralized exchange
                            (DEX). Be cautious of scams or fake RTX tokens on DEXs.
                        </span>
                        <p className="text-xl">Steps to Buy RTX</p>
                        <div className="flex flex-col gap-2">
                            <p className="text-xl">Step 1: Set Up Your Wallet</p>
                            <span className="text-gray font-medium">
                                Before joining the presale, ensure you have a wallet compatible with
                                WalletConnect, such as <b>MetaMask</b> or <b>Trust Wallet</b>.
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-xl">Step 2: Acquire Ethereum (ETH)</p>
                            <span className="text-gray font-medium">
                                You’ll need ETH in your wallet to cover gas fees for transactions on the
                                Ethereum (ERC20) network. Even if paying with USDT, ETH is required for
                                gas fees.
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-xl">Step 3: Connect Your Wallet</p>
                            <ul className="text-gray font-medium ml-4">
                                <li className="mt-0">
                                    Visit the official website: https://remittix.io
                                </li>
                                <li className="mt-0">Click "Connect Wallet".</li>
                                <li className="mt-0">
                                    Ensure your wallet is set to the Ethereum (ERC20) network.
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-xl">Step 4: Select Your Payment Method</p>
                            <span className="text-gray font-medium">
                                On the Remittix dashboard, choose your payment option—ETH or USDT—by
                                clicking the respective button.
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-xl">Step 5: Enter Your Purchase Amount</p>
                            <ul className="text-gray font-medium ml-4">
                                <li className="mt-0">
                                    Enter the amount of ETH or USDT you want to invest.
                                </li>
                                <li className="mt-0">
                                    The dashboard will calculate and display the number of RTX tokens
                                    you’ll receive.
                                </li>
                                <li className="mt-0">
                                    Confirm your selection and click "Buy" to proceed.
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-xl">Step 6: Confirm Your Transaction</p>
                            <ul className="text-gray font-medium ml-4">
                                <li className="mt-0">
                                    Your wallet will display the transaction details.
                                </li>
                                <li className="mt-0">Verify the amount and recipient address.</li>
                                <li className="mt-0">Approve the transaction in your wallet.</li>
                                <li className="mt-0">Wait for confirmation on the Ethereum network.</li>
                            </ul>
                            <span className="font-normal">
                                <b>Important:</b> If paying with USDT, two transactions are required:
                            </span>
                            <ul className="text-gray font-medium ml-4">
                                <li className="mt-0">
                                    The first transaction approves the USDT contract.
                                </li>
                                <li className="mt-0">The second completes the purchase.</li>
                                <li className="mt-0">
                                    Ensure both steps are completed to finalize your transaction.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <Web3 /> */}
            </div>

            <Footer />
        </div>
    );
}