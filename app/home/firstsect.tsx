import Image from 'next/image';

import BankAccount from "../../public/images/background/bank-account.svg";
import CrossBorder from "../../public/images/background/cross-border.svg";

import BuyNow from "../components/buynow";
import CrossBorderPayment from './crossborderpayment';

export default function Firstsect() {
    return (
        <main className="flex flex-col items-center justify-center lg:pt-32 z-10 relative">
            <div className="w-full flex flex-col items-center px-4 lg:px-12 2xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 lg:-mt-10">
                    <div className="flex flex-col gap-6 relative z-10 font-semibold justify-center">
                        <CrossBorderPayment />
                    </div>
                    <div className="flex w-full justify-center mb-10 relative z-10">
                        <BuyNow />
                    </div>
                </div>
                <div className="w-full py-10 hidden lg:flex">
                    <svg
                        width="100%"
                        height={3}
                        viewBox="0 0 1270 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line
                            y1="1.97125"
                            x2={1270}
                            y2="1.97125"
                            stroke="url(#paint0_linear_1541_128)"
                            strokeOpacity="0.24"
                            strokeWidth="2.05751"
                        />
                        <line
                            x1="131.233"
                            y1="1.97125"
                            x2="512.233"
                            y2="1.97125"
                            stroke="url(#paint1_linear_1541_128)"
                            strokeOpacity="0.68"
                            strokeWidth="2.05751"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_1541_128"
                                x1={0}
                                y1="3.5"
                                x2={1270}
                                y2="3.5"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#F9FF38" stopOpacity={0} />
                                <stop offset="0.178272" stopColor="#F9FF38" />
                                <stop offset={1} stopColor="#F9FF38" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_1541_128"
                                x1="131.233"
                                y1="3.5"
                                x2="512.233"
                                y2="3.5"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#F9FF38" stopOpacity={0} />
                                <stop offset="0.178272" stopColor="#F9FF38" />
                                <stop offset={1} stopColor="#F9FF38" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                
            </div>
            <div className="bg-overview">
                <Image
                    className="bottom-left"
                    src={BankAccount}
                    alt="bank"
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