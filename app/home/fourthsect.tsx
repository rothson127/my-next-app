import Image from 'next/image';

import Tokenomic from "../images/tokenomic.png";
import TokenomicSmall from "../images/tokenomic-small.png";
import Noise from "../images/noise.png";

export default function Fourthsect() {
    return (
        <div  id="sect_tokenomic">
            <main className="flex flex-col items-center justify-center py-10 z-10 relative">
                <div className="w-full flex flex-col px-4 lg:px-12 2xl:px-20 gap-12 relative z-10">
                    <div className="flex flex-col items-center">
                        <span className="text-yellow text-[40px] lg:text-[80px] font-bold text-center">
                            Tokenomics
                        </span>
                        <span className="text-[15px] lg:text-xl font-normal text-center">
                            The Remittix token has a limited supply of 1.5 billion tokens and
                            cannot be increased.
                        </span>
                    </div>
                    <div className="flex flex-col-reverse items-center lg:flex-row gap-8 lg:gap-20">
                        <div className="flex-grow lg:mt-12 w-full">
                            <div className="percent-table flex flex-col max-w-[544px] w-full gap-2">
                                <div className="header row items-center h-[33.76px] md:h-[49.28px]">
                                    <div className="flex text-yellow items-center gap-2">
                                        <svg
                                            width={36}
                                            height={20}
                                            viewBox="0 0 36 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-[31.19px] h-[16.12px] md:w-[45.53px] md:h-[23.52px]"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M9.32368 10.1167H7.38188V10.1167H1.93784C1.01862 10.1167 0.273438 10.8619 0.273438 11.7811V12.5101C0.273438 12.8697 0.389913 13.2197 0.605426 13.5076L4.42061 18.604C4.73488 19.0238 5.22862 19.2709 5.75303 19.2709H7.65923C8.57845 19.2709 9.32363 18.5257 9.32363 17.6065V11.8505H9.32368V10.1167Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M4.78452 4.32572L15.5163 18.1421C15.8316 18.548 16.3167 18.7855 16.8307 18.7855H18.686C19.6052 18.7855 20.3504 18.0403 20.3504 17.1211V10.5131C20.3504 10.1438 20.2276 9.78493 20.0012 9.49308L14.0192 1.78022C13.7039 1.37373 13.2184 1.13586 12.704 1.13586H6.09897C5.17975 1.13586 4.43457 1.88104 4.43457 2.80027V3.30472C4.43457 3.67448 4.5577 4.03371 4.78452 4.32572Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M20.1079 9.4367V3.24767C20.1079 2.75426 20.2652 2.27371 20.557 1.87582C20.994 1.27991 21.6888 0.927856 22.4277 0.927856H23.2699C24.0084 0.927856 24.7042 1.27385 25.1499 1.86268L35.3032 15.2762C35.6132 15.6858 35.781 16.1855 35.781 16.6993V16.7731C35.781 17.3313 35.5708 17.869 35.1922 18.2792C34.7718 18.7346 34.1803 18.9936 33.5605 18.9936H28.1507C27.4292 18.9936 26.7474 18.6632 26.3002 18.097L20.6153 10.898C20.2867 10.4818 20.1079 9.967 20.1079 9.4367Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <span className="text-[11.2px] md:text-[16.34px]">
                                            COINS
                                        </span>
                                        <svg
                                            width={2}
                                            height={28}
                                            viewBox="0 0 2 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                x="0.900391"
                                                y="0.533691"
                                                width="1.04853"
                                                height="27.2617"
                                                fill="url(#paint0_linear_1541_176)"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="paint0_linear_1541_176"
                                                    x1="1.42465"
                                                    y1="0.533691"
                                                    x2="1.42465"
                                                    y2="27.7954"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopOpacity={0} />
                                                    <stop offset="0.495" stopColor="#F9FF38" />
                                                    <stop offset={1} stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <span className="w-full text-right">Million</span>
                                    <div className="flex justify-center">
                                        <svg
                                            width={2}
                                            height={28}
                                            viewBox="0 0 2 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                x="0.900391"
                                                y="0.533691"
                                                width="1.04853"
                                                height="27.2617"
                                                fill="url(#paint0_linear_1541_176)"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="paint0_linear_1541_176"
                                                    x1="1.42465"
                                                    y1="0.533691"
                                                    x2="1.42465"
                                                    y2="27.7954"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopOpacity={0} />
                                                    <stop offset="0.495" stopColor="#F9FF38" />
                                                    <stop offset={1} stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <span className="w-full text-center">%</span>
                                </div>
                                <div className="body flex flex-col font-normal py-4 gap-2 md:gap-4 linear-border-top-left">
                                    <div className="row ">
                                        <span>Presale</span>
                                        <span className="w-full text-right">750</span>
                                        <span />
                                        <span className="text-center">50%</span>
                                    </div>
                                    <div className="row ">
                                        <span>Marketing</span>
                                        <span className="w-full text-right">225</span>
                                        <span />
                                        <span className="text-center">15%</span>
                                    </div>
                                    <div className="row text-[#50EBFF]">
                                        <span>Exchange Listings</span>
                                        <span className="w-full text-right">180</span>
                                        <span />
                                        <span className="text-center">12%</span>
                                    </div>
                                    <div className="row ">
                                        <span>Ecosystem Reserves</span>
                                        <span className="w-full text-right">150</span>
                                        <span />
                                        <span className="text-center">10%</span>
                                    </div>
                                    <div className="row ">
                                        <span>Team</span>
                                        <span className="w-full text-right">135</span>
                                        <span />
                                        <span className="text-center">9%</span>
                                    </div>
                                    <div className="row ">
                                        <span>Rewards</span>
                                        <span className="w-full text-right">60</span>
                                        <span />
                                        <span className="text-center">4%</span>
                                    </div>
                                </div>
                                <div className="header row items-center h-[38.07px] md:h-[55.57px] linear-border-top-left linear-border-bottom-right">
                                    <span>Total</span>
                                    <span className="w-full text-right">1,500</span>
                                    <span />
                                    <span>100%</span>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:flex">
                            <Image
                                src={Tokenomic}
                                alt="tokenomic"
                                                                                            />
                        </div>
                        <div className="flex lg:hidden">
                            <Image
                                src={TokenomicSmall}
                                alt="tokenomic"
                                                                                            />
                        </div>
                    </div>
                    <svg
                        width="100%"
                        height={3}
                        viewBox="0 0 1270 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden lg:flex -mx-12"
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
                    <div className="flex flex-col w-full gap-2">
                        <div className="flex flex-col lg:items-center">
                            <span className="text-[40px] leading-[46px] lg:leading-[86px] lg:text-[80px] font-bold text-center">
                                <span className="text-yellow">Remittix</span>
                                <br className="block lg:hidden" /> Token Details
                            </span>
                            <span className="text-[15px] lg:text-xl font-normal text-center">
                                Use the contract information below to add the Remittix token to
                                your wallet.
                            </span>
                        </div>
                        <div className="token-details gap-4 py-12 lg:py-20">
                            <div className="flex flex-col gap-4 col-span-2 lg:col-span-1">
                                <div className="flex w-full gap-4">
                                    <span className="item-title w-full linear-border-top-left">
                                        Contract Address
                                    </span>
                                    <div className="item-title w-[53px] cursor-pointer">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19.0908 3.63647H18.1817V5.45466V7.27284V18.1819H9.80453V18.182H3.63623V19.091C3.63623 19.5931 4.04326 20.0001 4.54532 20.0001H19.0908C19.5928 20.0001 19.9999 19.5931 19.9999 19.091V4.54557C19.9999 4.0435 19.5928 3.63647 19.0908 3.63647Z"
                                                fill="#F9FF38"
                                            />
                                            <path
                                                d="M5.45455 16.3637V16.3636H15.4545C15.9566 16.3636 16.3636 15.9566 16.3636 15.4545V7.27273V5.45455V3.63636V2.92261V0.909091C16.3636 0.40703 15.9566 0 15.4545 0H0.909091C0.40703 0 0 0.40703 0 0.909091V15.4545C0 15.9566 0.40703 16.3636 0.909091 16.3636H3.63636V16.3637H5.45455Z"
                                                fill="#F9FF38"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="item-content">0xC7f59c4bD6927996186696...</div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="item-title linear-border-bottom-left">
                                    Token Name
                                </div>
                                <div className="item-content">Remittix</div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="item-title linear-border-top-left">
                                    Token Symbol
                                </div>
                                <div className="item-content">RTX</div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="item-title linear-border-bottom-right overflow-hidden whitespace-nowrap text-ellipsis">
                                    Token Supply
                                </div>
                                <div className="item-content">1,500,000,000</div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="item-title linear-border-top-right">
                                    Network
                                </div>
                                <div className="item-content">Ethereum</div>
                            </div>
                            <div className="flex lg:flex-col gap-4 col-span-2 lg:col-span-1">
                                <div className="item-title flex-grow linear-border-bottom-left overflow-hidden whitespace-nowrap text-ellipsis">
                                    Decimals
                                </div>
                                <div className="item-content flex-grow">18</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-tokenomics">
                    <Image
                        className="absolute -bottom-1/3 -left-1/3"
                        src={Noise}
                        alt="noise"
                                                                    />
                    <Image
                        className="absolute -bottom-40 -right-1/3"
                        src={Noise}
                        alt="noise"
                                                                    />
                </div>
            </main>
        </div>
    );
}