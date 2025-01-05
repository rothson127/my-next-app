import Image from 'next/image';

import Line4 from "../images/line4.png";
import Xrp from "../images/xrp.png";
import Line1 from "../images/line1.png";
import Solana from "../images/solana.png";
import Bitcoin from "../images/bitcoin.png";
import Check from "../images/check.svg";
import Line2 from "../images/line2.png";
import Line3 from "../images/line3.png";
import Header from "../images/background/header.svg";
import BankAccount from "../images/background/bank-account.svg";
import CrossBorder from "../images/background/cross-border.svg";

export default function HowSecondsect() {
    return (
        <main className="flex flex-col justify-center py-10 lg:py-32 z-10 relative lg:gap-12 ">
            <div className="w-full flex flex-col px-4 lg:px-12 2xl:px-20 relative z-10 gap-6">
                <div className="divider mb-4" />
                <div className="text-[40px] leading-[40px] tracking-[-0.5px] lg:text-[80px] lg:leading-[66px] lg:tracking-[-0.8px]">
                    <span className="text-[#F9FF38] font-bold">The Process</span>
                </div>
                <div className="divider lg:w-[500px] opacity-30" />
            </div>
            <div className="flex flex-col items-center z-10 p-8 overflow-hidden">
                <div className="flex flex-col gap-2 lg:relative lg:w-[900px] lg:h-[900px]">
                    <div className="blog-card lg:absolute lg:top-0 lg:right-0 p-7 lg:p-9 pb-12 flex flex-col gap-9 z-10 lg:min-h-[530px]">
                        <div className="p-6 flex flex-col gap-2 border-[0.5px] border-[#F9FF38] rounded-lg bg-[#00000082]">
                            <div className="h-[40px]" />
                            <div className="flex flex-col gap-1 lg:gap-2">
                                <span className="text-[7px] lg:text-[10px] font-medium leading-[9.3px]">
                                    Account Number/Iban
                                </span>
                                <span className="bg-[#111B1F] rounded-lg border border-[#FFFFFF1F] p-2 text-[#FFFFFF59] text-[10px] lg:text-[14px]">
                                    23242324232423242324
                                </span>
                            </div>
                            <div className="flex flex-col gap-1 lg:gap-2">
                                <span className="text-[7px] lg:text-[10px]">
                                    Swift/BIC Number
                                </span>
                                <span className="bg-[#111B1F] rounded-lg border border-[#FFFFFF1F] p-2 text-[10px] lg:text-[14px]">
                                    BANKO102
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-1">
                            <svg
                                width={15}
                                height={15}
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mt-1 lg:mt-2"
                            >
                                <path
                                    d="M8.91421 13.5858C8.13317 14.3668 6.86683 14.3668 6.08579 13.5858L1.41421 8.91421C0.633165 8.13317 0.633165 6.86683 1.41421 6.08579L6.08579 1.41421C6.86683 0.633165 8.13316 0.633165 8.91421 1.41421L13.5858 6.08579C14.3668 6.86683 14.3668 8.13316 13.5858 8.91421L8.91421 13.5858Z"
                                    fill="#F9FF38"
                                />
                            </svg>
                            <div className="flex flex-col gap-5">
                                <span className="text-[#FCFF8C] font-bold text-[19.7px] leading-[19px] tracking-[-0.2px] lg:text-2xl lg:leading-[20.5px] lg:tracking-[-0.26px]">
                                    Input Recipient Bank Information
                                </span>
                                <span className="text-[11.8px] leading-[16.24px] tracking-[-0.2px] lg:text-sm lg:leading-[20.6px] lg:tracking-[0.26px]">
                                    Enter the recipient's bank details into Remittix, just like a
                                    regular bank transfer.
                                </span>
                                <span className="text-[11.8px] leading-[16.24px] tracking-[-0.2px] lg:text-sm lg:leading-[20.6px] lg:tracking-[0.26px]">
                                    No sensitive details are required, simply the standard
                                    information found on invoices.
                                </span>
                            </div>
                        </div>
                        <div className="level-number absolute text-yellow text-[34px] lg:text-[24px] font-semibold flex items-center justify-center scale-150 -bottom-8 left-10 lg:-left-6">
                            01
                        </div>
                        <div className="absolute text-[#F9FF38] text-[16px] lg:leading-[-0.8px] lg:text-[20px] bg-[#16232E] rounded-xl py-2 lg:py-3 px-11 lg:px-14 -bottom-5 lg:-bottom-7 right-12 lg:-right-4">
                            Step 01
                        </div>
                    </div>
                    <div className="relative mb-12">
                        <Image
                            src={Line4}
                            className="lg:h-0 absolute -right-16 top-3"
                            alt=""
                        />
                    </div>
                    <div className="blog-card lg:absolute lg:bottom-0 lg:left-0 p-7 lg:p-9 pb-12 flex flex-col gap-9 z-10 lg:min-h-[530px]">
                        <div className="p-6 flex flex-col gap-2 border-[0.5px] border-[#F9FF38] rounded-lg bg-[#00000082]">
                            <div className="flex flex-col gap-2">
                                <span className="text-[7px] lg:text-[10px]">
                                    Chris Receives
                                </span>
                                <div className="flex justify-between bg-[#111B1F] rounded-lg border border-[#FFFFFF1F] p-2 text-[#FFFFFF59]">
                                    <span className="text-[10px] lg:text-[14px]">€ 3,800</span>
                                    <span className="text-[10px] lg:text-[14px]">EUR</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-[7px] lg:text-[10px]">
                                    Payment currency
                                </span>
                                <div className="flex items-center gap-1 bg-[#111B1F] rounded-lg border border-[#FFFFFF1F] p-2">
                                    <Image src={Xrp} alt="" />
                                    <span className="text-[10px] lg:text-[14px]">XRP</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-[7px] lg:text-[10px]">Reference</span>
                                <div className="bg-[#111B1F] rounded-lg border border-[#FFFFFF1F] p-2">
                                    <span className="text-[10px] lg:text-[14px]">
                                        Legal fees (INV_0123)
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-1">
                            <svg
                                width={15}
                                height={15}
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mt-1 lg:mt-2"
                            >
                                <path
                                    d="M8.91421 13.5858C8.13317 14.3668 6.86683 14.3668 6.08579 13.5858L1.41421 8.91421C0.633165 8.13317 0.633165 6.86683 1.41421 6.08579L6.08579 1.41421C6.86683 0.633165 8.13316 0.633165 8.91421 1.41421L13.5858 6.08579C14.3668 6.86683 14.3668 8.13316 13.5858 8.91421L8.91421 13.5858Z"
                                    fill="#F9FF38"
                                />
                            </svg>
                            <div className="flex flex-col gap-5">
                                <span className="text-[#FCFF8C] font-bold text-[19.7px] leading-[19px] tracking-[-0.2px] lg:text-2xl lg:leading-[20.5px] lg:tracking-[-0.26px]">
                                    Set the Payment Amount
                                </span>
                                <span className="text-[11.8px] leading-[16.24px] tracking-[-0.2px] lg:text-sm lg:leading-[20.6px] lg:tracking-[0.26px]">
                                    Specify the amount to send and the reference to appear on the
                                    recipient’s bank statement.
                                </span>
                                <span className="text-[11.8px] leading-[16.24px] tracking-[-0.2px] lg:text-sm lg:leading-[20.6px] lg:tracking-[0.26px]">
                                    Remittix will provide a detailed quote, including the required
                                    crypto amount and a clear breakdown of fees.
                                </span>
                            </div>
                        </div>
                        <div className="level-number absolute text-yellow text-[34px] lg:text-[24px] font-semibold flex items-center justify-center scale-150 -bottom-8 left-10 lg:-left-6">
                            02
                        </div>
                        <div className="absolute text-[#F9FF38] text-[16px] lg:leading-[-0.8px] lg:text-[20px] bg-[#16232E] rounded-xl py-2 lg:py-3 px-11 lg:px-14 -bottom-5 lg:-bottom-7 right-12 lg:-right-4">
                            Step 02
                        </div>
                    </div>
                    <div className="relative mb-12">
                        <Image
                            src={Line4}
                            className="lg:h-0 absolute -right-16 top-3"
                            alt=""
                        />
                    </div>
                    <Image
                        src={Line1}
                        className="h-0 lg:h-[350px] lg:w-[420px] lg:absolute bottom-0 right-[70px]"
                        alt=""
                    />
                </div>
                <div className="flex flex-col gap-2 lg:relative lg:w-[900px] lg:h-[900px] mb-4">
                    <div className="blog-card lg:absolute lg:top-0 lg:right-0 p-7 lg:p-9 pb-12 flex flex-col gap-9 z-10 lg:min-h-[530px]">
                        <div className="px-6 py-3 flex flex-col gap-2 border border-[#F9FF38] rounded-lg bg-[#00000082]">
                            <div className="grid grid-cols-2 gap-2">
                                <div className="flex flex-col items-center justify-between gap-2 pt-4">
                                    <div className="flex flex-col items-center gap-1 text-[7px] lg:text-[9px]">
                                        <span>You</span>
                                        <Image src={Solana} alt="" />
                                        <span className="text-[#F9FF38]">4,312.71 USDC</span>
                                    </div>
                                    <div className="w-full bg-yellow rounded-md text-[6px] lg:text-[10px] text-black text-center font-semibold py-3">
                                        Pay Manually
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-between pt-4">
                                    <div className="flex flex-col items-center gap-3 text-[7px] lg:text-[9px]">
                                        <span>Carter Legal</span>
                                        <Image src={Bitcoin} alt="" />
                                        <span className="text-[#F9FF38]">4,000 EUR</span>
                                    </div>
                                    <div className="w-full bg-[#11181E52] rounded-md text-[6px] lg:text-[10px] text-yellow text-center font-semibold py-3 border border-[#F9FF3845]">
                                        Use Connected Wallet
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-1">
                            <svg
                                width={15}
                                height={15}
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mt-1 lg:mt-2"
                            >
                                <path
                                    d="M8.91421 13.5858C8.13317 14.3668 6.86683 14.3668 6.08579 13.5858L1.41421 8.91421C0.633165 8.13317 0.633165 6.86683 1.41421 6.08579L6.08579 1.41421C6.86683 0.633165 8.13316 0.633165 8.91421 1.41421L13.5858 6.08579C14.3668 6.86683 14.3668 8.13316 13.5858 8.91421L8.91421 13.5858Z"
                                    fill="#F9FF38"
                                />
                            </svg>
                            <div className="flex flex-col gap-5">
                                <span className="text-[#FCFF8C] font-bold text-[19.7px] leading-[19px] tracking-[-0.2px] lg:text-2xl lg:leading-[20.5px] lg:tracking-[-0.26px]">
                                    Initiate Transfer
                                </span>
                                <span className="text-[11.8px] leading-[16.24px] tracking-[-0.2px] lg:text-sm lg:leading-[20.6px] lg:tracking-[0.26px]">
                                    Send the specified crypto amount to the deposit address
                                    provided. Once received, Remittix converts it and sends the
                                    equivalent as a bank transfer to the recipient.
                                </span>
                                <span className="text-sm h-10" />
                            </div>
                        </div>
                        <div className="level-number absolute text-yellow text-[34px] lg:text-[24px] font-semibold flex items-center justify-center scale-150 -bottom-8 left-10 lg:-left-6">
                            03
                        </div>
                        <div className="absolute text-[#F9FF38] text-[16px] lg:text-[20px] lg:leading-[-0.8px] bg-[#16232E] rounded-xl py-2 lg:py-3 px-11 lg:px-14 -bottom-5 lg:-bottom-7 right-12 lg:-right-4">
                            Step 03
                        </div>
                    </div>
                    <div className="relative mb-12">
                        <Image
                            src={Line4}
                            className="lg:h-0 absolute -right-16 top-3"
                            alt=""
                        />
                    </div>
                    <div className="blog-card lg:absolute lg:bottom-0 lg:left-0 p-7 lg:p-9 pb-12 flex flex-col gap-9 z-10 lg:min-h-[530px]">
                        <div className="px-6 py-6 flex flex-col items-center gap-2 border border-[#F9FF38] rounded-lg bg-[#00000082]">
                            <Image src={Check} className="w-[50px] scale-[300%]" alt="" />
                            <span className="text-[12px] text-[#F9FF38]">
                                Payment Successful!
                            </span>
                            <span className="text-center max-w-[200px]">
                                You are now ready to staryaccepting crypto payments!
                            </span>
                        </div>
                        <div className="flex gap-1">
                            <svg
                                width={15}
                                height={15}
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mt-1 lg:mt-2"
                            >
                                <path
                                    d="M8.91421 13.5858C8.13317 14.3668 6.86683 14.3668 6.08579 13.5858L1.41421 8.91421C0.633165 8.13317 0.633165 6.86683 1.41421 6.08579L6.08579 1.41421C6.86683 0.633165 8.13316 0.633165 8.91421 1.41421L13.5858 6.08579C14.3668 6.86683 14.3668 8.13316 13.5858 8.91421L8.91421 13.5858Z"
                                    fill="#F9FF38"
                                />
                            </svg>
                            <div className="flex flex-col gap-5">
                                <span className="text-[#FCFF8C] font-bold text-[19.7px] leading-[19px] tracking-[-0.2px] lg:text-2xl lg:leading-[20.5px] lg:tracking-[-0.26px]">
                                    Transfer Complete
                                </span>
                                <span className="text-[11.8px] leading-[16.24px] tracking-[-0.2px] lg:text-sm lg:leading-[20.6px] lg:tracking-[0.26px]">
                                    Once processed, you’ll receive a receipt and can track the
                                    transfer’s status via the Remittix dashboard.
                                </span>
                                <span className="text-[11.8px] leading-[16.24px] tracking-[-0.2px] lg:text-sm lg:leading-[20.6px] lg:tracking-[0.26px]">
                                    Funds typically arrive in the recipient’s account within 24
                                    hours, including the full amount and reference details.
                                </span>
                            </div>
                        </div>
                        <div className="level-number absolute text-yellow text-[34px] lg:text-[24px] font-semibold flex items-center justify-center scale-150 -bottom-8 left-10 lg:-left-6">
                            04
                        </div>
                        <div className="absolute text-[#F9FF38] text-[16px] lg:leading-[-0.8px] lg:text-[20px] bg-[#16232E] rounded-xl py-2 lg:py-3 px-11 lg:px-14 -bottom-5 lg:-bottom-7 right-12 lg:-right-4">
                            Step 04
                        </div>
                    </div>
                    <div className="relative mb-7">
                        <Image
                            src={Line4}
                            className="lg:h-0 absolute -right-16 top-3"
                            alt=""
                        />
                    </div>
                    <Image
                        src={Line2}
                        className="h-0 lg:h-auto lg:absolute lg:top-0 lg:left-[320px] w-[180px]"
                        alt=""
                    />
                    <Image
                        src={Line3}
                        className="h-0 lg:h-auto lg:absolute lg:bottom-0 lg:right-[70px]"
                        alt=""
                    />
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
                <Image
                    className="top-right"
                    src={CrossBorder}
                    alt="border"
                />
                <Image
                    className="bottom-left"
                    src={CrossBorder}
                    alt="border"
                />
                <Image
                    className="top-right"
                    src={CrossBorder}
                    alt="border"
                />
                <Image
                    className="bottom-right"
                    src={CrossBorder}
                    alt="border"
                />
            </div>
        </main>
    );
}