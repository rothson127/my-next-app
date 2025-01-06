import Image from 'next/image';
import Video from "next-video";

import BankAccount from "../images/background/bank-account.svg";
import CrossBorder from "../images/background/cross-border.svg";

import BuyNow from "../components/buynow";

export default function Firstsect() {
    return (
        <main className="flex flex-col items-center justify-center lg:pt-32 z-10 relative">
            <div className="w-full flex flex-col items-center px-4 lg:px-12 2xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 lg:-mt-10">
                    <div className="flex flex-col gap-6 relative z-10 font-semibold justify-center">
                        <div className="flex flex-col gap-2 overflow-hidden">
                            <h1 className="text-[50px] lg:text-[90px] leading-[54px] lg:leading-[96px] traking-[-2px] text-light-white max-w-[700px] text-center lg:text-left">
                                Cross-border Payments{" "}
                                <span className="text-yellow"> Reinvented</span>
                            </h1>
                            <h2 className="text-xl traking-[-2px] mt-6 font-normal text-light-white max-w-[700px] text-center lg:text-left">
                                Remittix enables users to pay fiat into any bank account around
                                the world using crypto, by just simply connecting your wallet.
                            </h2>
                            <div className="text-xl text-yellow text-center lg:text-left">
                                Welcome to the PayFi revolution!
                            </div>
                            <div className="flex gap-12 items-center justify-center lg:justify-start">
                                <a
                                    className="hover:scale-110 cursor-pointer"
                                    target="_blank"
                                    href="https://x.com/remittix"
                                >
                                    <svg
                                        width={33}
                                        height={33}
                                        viewBox="0 0 33 33"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_1546_4323)">
                                            <path
                                                d="M25.3763 1.54688H30.3171L19.5226 13.8853L32.2222 30.6717H22.279L14.4919 20.4895L5.57981 30.6717H0.636389L12.1827 17.4741L0 1.54822H10.1956L17.2349 10.8551L25.3763 1.54688ZM23.6431 27.7153H26.3806L8.70806 4.34887H5.77046L23.6431 27.7153Z"
                                                fill="currentColor"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1546_4323">
                                                <rect width="32.2222" height="32.2222" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                                <a
                                    className="hover:scale-110 cursor-pointer"
                                    target="_blank"
                                    href="https://t.me/remittixofficial"
                                >
                                    <svg
                                        width={33}
                                        height={33}
                                        viewBox="0 0 33 33"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M27.7621 4.99584L3.95792 14.1751C2.33338 14.8277 2.34278 15.7339 3.65987 16.138L9.77135 18.0445L23.9115 9.12297C24.5801 8.71617 25.191 8.93501 24.6889 9.38075L13.2326 19.7201H13.2299L13.2326 19.7214L12.811 26.0208C13.4286 26.0208 13.7011 25.7376 14.0475 25.4033L17.016 22.5167L23.1906 27.0775C24.3291 27.7045 25.1467 27.3822 25.43 26.0235L29.4833 6.92112C29.8982 5.25765 28.8482 4.50446 27.7621 4.99584Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                                <a
                                    className="hover:scale-110 cursor-pointer"
                                    target="_blank"
                                    href="https://medium.com/@remittix"
                                >
                                    <svg
                                        width={41}
                                        height={41}
                                        viewBox="0 0 41 41"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M23.1262 20.4999C23.1262 26.9299 17.9493 32.1424 11.5631 32.1424C5.17697 32.1424 0 26.9299 0 20.4999C0 14.0699 5.17697 8.85742 11.5631 8.85742C17.9492 8.85742 23.1262 14.0699 23.1262 20.4999Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M35.8112 20.4999C35.8112 26.5526 33.2226 31.4592 30.0296 31.4592C26.8366 31.4592 24.248 26.5526 24.248 20.4999C24.248 14.4472 26.8366 9.54053 30.0296 9.54053C33.2227 9.54053 35.8112 14.4472 35.8112 20.4999Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M40.9999 20.4998C40.9999 25.9227 40.0895 30.3189 38.9664 30.3189C37.8434 30.3189 36.9331 25.9227 36.9331 20.4998C36.9331 15.0768 37.8434 10.6807 38.9664 10.6807C40.0895 10.6807 40.9999 15.0768 40.9999 20.4998Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                                <a
                                    className="hover:scale-110 cursor-pointer"
                                    target="_blank"
                                    href="https://linktr.ee/remittix"
                                >
                                    <svg
                                        width={33}
                                        height={33}
                                        xmlns="http://www.w3.org/2000/svg"
                                        shapeRendering="geometricPrecision"
                                        textRendering="geometricPrecision"
                                        imageRendering="optimizeQuality"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        viewBox="0 0 417 512.238"
                                    >
                                        <path
                                            fill="currentColor"
                                            fillRule="nonzero"
                                            d="M171.274 344.942h74.09v167.296h-74.09V344.942zM0 173.468h126.068l-89.622-85.44 49.591-50.985 85.439 87.829V0h74.086v124.872L331 37.243l49.552 50.785-89.58 85.24H417v70.502H290.252l90.183 87.629L331 381.192 208.519 258.11 86.037 381.192l-49.591-49.591 90.218-87.631H0v-70.502z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
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
                <div id="sect_about">
                    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-20 mt-10">
                        <div className="flex w-full justify-center mb-10 relative z-0">
                            <div className="onStep flex justify-end z-10 w-full">
                                <Video
                                    className="max-w-[576px] w-full pointer-events-none ounded-[11.27px]"
                                    autoPlay
                                    loop
                                    playsInline
                                >
                                    <source src="/video/tutorial.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </Video>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 relative z-10 font-semibold justify-center">
                            <div className="text-yellow text-xl">Why Remittix?</div>
                            <div className="text-[36px] lg:text-[50px] leading-[46px] traking-[-0.8px] text-light-white max-w-[700px]">
                                Bridging crypto with local payment networks globally.
                            </div>
                            <div className="text-xl traking-[-2px] mt-6 font-normal text-light-white max-w-[700px]">
                                Remittix empowers crypto holders and businesses to facilitate
                                crypto-to-fiat transactions worldwide, leveraging local payment
                                networks and blockchain technology.
                            </div>
                            <div className="text-xl font-normal max-w-[700px]">
                                At last, enjoy the speed of crypto with the everyday convenience
                                of fiat payments.
                            </div>
                            <a
                                className="flex items-center justify-center relative bg-yellow rounded-lg text-black w-[250px] h-[48px] cursor-pointer"
                                target="_blank"
                                href="https://remittix-organization.gitbook.io/remittix"
                            >
                                <span className="text-[16px] font-semibold">Whitepaper</span>
                                <div className="absolute right-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={48}
                                        height={48}
                                        viewBox="0 0 48 48"
                                        className="scale-50"
                                    >
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={4}
                                            d="M19 12L31 24L19 36"
                                        />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
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