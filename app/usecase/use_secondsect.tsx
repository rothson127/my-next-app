import Image from "next/image";

import EthereumIcon from "../images/ethereum_icon.svg";
import More from "../images/more.png";
import Phantom from "../images/phantom.png";
import Metamask from "../images/metamask.png";
import Trustwallet from "../images/trustwallet.png";
import Check from "../images/check.svg";
import Header from "../images/background/header.svg";
import BankAccount from "../images/background/bank-account.svg";

export default function UseSecondsect() {
    return (
        <main className="flex flex-col justify-center py-12 md:py-32 z-10 relative gap-24 ">
            <div className="usecase w-full flex flex-col px-4 lg:px-12 2xl:px-20 relative z-10 gap-6">
                <div className="text-[40px] leading-[40px] lg:leading-[66px] tracking-[0.5px] lg:tracking-[-0.8px] lg:text-[80px] font-bold">
                    <span>Instant settlement,</span>{" "}
                    <span className="text-[#F9FF38]">No FX fees</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="lg:grid grid-cols-3 gap-5">
                        <div className="blog-card p-9 pb-12 flex flex-col gap-9">
                            <div className="px-4 py-9 flex justify-between gap-2 border border-[#F9FF38] rounded-lg bg-[#00000082] h-[200px]">
                                <div className="card flex flex-col items-center gap-2 bg-[#11181E52] p-4 rounded-xl">
                                    <div className="flex flex-col items-center">
                                        <span className="text-[#84FF38] text-[18px] lg:text-xl font-bold">
                                            $2000
                                        </span>
                                        <span className="text-[9px] lg:text-[10px] leading-[18.5px] lg:leading-[20.5px] tracking-[-0.2px] lg:tracking-[-0.25px]">
                                            2000 USDT
                                        </span>
                                    </div>
                                    <div className="w-1/2 border border-[#2A3031]" />
                                    <div className="flex gap-1">
                                        <Image src={EthereumIcon} alt="" />
                                        <span className="text-[10.5px] lg:text-[11.5px] leading-[14.5px] lg:leading-[16px] tracking-[-0.2px] lg:tracking-[-0.2px]">
                                            0x827..7120
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-between">
                                    <button className="bg-[rgb(249,255,56)] text-[#040B0F] text-[13.5px] lg:text-[15px] leading-[18.5px] lg:leading-[20.5px] tracking-[-0.2px] lg:tracking-[-0.25px] font-bold px-5 py-1 rounded-full">
                                        Switch
                                    </button>
                                    <span className="text-[9px] leading-[12.5px] tracking-[-0.2px] lg:text-[10px] lg:leading-[14px] lg:tracking-[-0.25px]">
                                        Your payment to Lucas Garcia will happen on the{" "}
                                        <span className="text-[#F9FF38]">Ethereum Network</span>
                                    </span>
                                    <div className="card text-[10px] flex flex-col py-1 px-2 rounded-lg">
                                        <span className="text-[9.5px] lg:text-[10.8px] leading-[13.4px] lg:leading-[14.8px] tracking-[-0.2px] text-[#FFFFFF5E]">
                                            UX/UI Development
                                        </span>
                                        <span className="text-[9.5px] lg:text-[10.8px] leading-[13.4px] lg:leading-[14.8px] tracking-[-0.2px] text-white">
                                            LEWIS GRAVES
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <span className="text-[#FCFF8C] font-bold text-[22.6px] leading-[18.6px] tracking-[-0.25px] lg:text-2xl lg:leading-[20.5px] lg:tracking-[-0.26px]">
                                    Simplify payments for your client
                                </span>
                                <span className="text-[13.5px] leading-[18.5px] tracking-[-0.2px] lg:text-[15px] lg:leading-[20.5px]">
                                    Avoid transfer errors that could lead to lost funds.
                                </span>
                                <span className="text-[13.5px] leading-[18.5px] tracking-[-0.2px] lg:text-[15px] lg:leading-[20.5px]">
                                    With Remittix Pay, you can create a secure payment link, reducing
                                    the risk of your client sending funds to the wrong address or
                                    network.
                                </span>
                            </div>
                            <div className="absolute bottom-4 right-4">
                                <Image src={More} alt="" />
                            </div>
                        </div>
                        <div className="blog-card p-9 pb-12 flex flex-col gap-9">
                            <div className="px-4 py-9 flex flex-col items-center gap-3 border border-[#F9FF38] rounded-lg bg-[#00000082] h-[200px]">
                                <button className="bg-[#F9FF38] text-sm text-black font-bold px-7 py-3 rounded-[4.5px]">
                                    Connect Wallet
                                </button>
                                <div className="flex items-center gap-4">
                                    <Image src={Phantom} className="w-10" alt="" />
                                    <Image src={Metamask} className="w-10" alt="" />
                                    <Image src={Trustwallet} className="w-11" alt="" />
                                </div>
                                <span>
                                    and <b>50</b>+ more
                                </span>
                            </div>
                            <div className="flex flex-col gap-3">
                                <span className="text-[#FCFF8C] font-bold text-[22.6px] leading-[18.6px] tracking-[-0.25px] lg:text-2xl lg:leading-[20.5px] lg:tracking-[-0.26px]">
                                    Compatible with any wallet
                                </span>
                                <span className="text-[13.5px] leading-[18.5px] tracking-[-0.2px] lg:text-[15px] lg:leading-[20.5px]">
                                    With Remittix Pay, funds move directly from your client’s wallet
                                    to yours, we never handle your money.
                                </span>
                                <span className="text-[13.5px] leading-[18.5px] tracking-[-0.2px] lg:text-[15px] lg:leading-[20.5px]">
                                    Receive payments in any wallet using our MetaMask or WalletConnect
                                    integration, and transfer your funds to any exchange, including
                                    Coinbase and OKX, whenever you’re ready.
                                </span>
                            </div>
                            <div className="absolute bottom-4 right-4">
                                <Image src={More} alt="" />
                            </div>
                        </div>
                        <div className="blog-card p-9 pb-12 flex flex-col gap-9">
                            <div className="px-4 py-9 flex flex-col items-center gap-3 border border-[#F9FF38] rounded-lg bg-[#00000082] h-[200px]">
                                <Image src={Check} className="w-[48px] scale-[250%]" alt="" />
                                <span className="text-sm max-w-48">
                                    You are now ready to staryaccepting crypto payments!
                                </span>
                                <span className="text-[12px] text-[#F9FF38]">
                                    View Payment Link
                                </span>
                            </div>
                            <div className="flex flex-col gap-3">
                                <span className="text-[#FCFF8C] font-bold text-[22.6px] leading-[18.6px] tracking-[-0.25px] lg:text-2xl lg:leading-[20.5px] lg:tracking-[-0.26px]">
                                    Skip the lengthy identity verification
                                </span>
                                <span className="text-[13.5px] leading-[18.5px] tracking-[-0.2px] lg:text-[15px] lg:leading-[20.5px]">
                                    Since Remittix Pay never accesses your funds, either in wallets or
                                    during transfer there's no need to provide personal information to
                                    start using the platform. This also allows us to keep transactions
                                    free from any charges.
                                </span>
                                <span className="text-[13.5px] leading-[18.5px] tracking-[-0.2px] lg:text-[15px] lg:leading-[20.5px]">
                                    Simply connect your wallet and start creating payment links
                                    instantly.
                                </span>
                            </div>
                            <div className="absolute bottom-4 right-4">
                                <Image src={More} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-overview">
                <Image
                    className="top-left"
                    src={Header}
                    alt="header"
                />
                <Image
                    className="bottom-left"
                    src={BankAccount}
                    alt="bank"
                />
            </div>
        </main>

    );
}