import Image from 'next/image';

import SwiperPowerdBy from '../components/swiperpoweredby';

import Competition from "../images/competition.png";

export default function Fifthsect() {
    return (
        <main className="flex flex-col items-center justify-center z-10 text-black">
            <div className="w-full flex flex-col items-center px-4 lg:px-12 2xl:px-20 lg:gap-12 bg-[#F2F5F6] py-12">
                <div>
                    <div className="flex flex-col items-center">
                        <div className="relative w-fit">
                            <span className="text-[#041019] text-[40px] leading-[46px] lg:text-[80px] lg:leading-[86px] font-bold relative z-10">
                                How to Buy
                            </span>
                            <div className="absolute h-4 w-24 bg-yellow top-6 -right-4 lg:right-0 lg:top-16 z-0" />
                        </div>
                        <span className="text-[15px] lg:text-xl font-normal text-center">
                            Follow these 3 simple steps to buy Remittix presale tokens.
                        </span>
                    </div>
                </div>
                <div className="flex-grow mt-12">
                    <div className="grid xl:grid-cols-3 w-fit m-auto gap-12">
                        <div className="flex flex-col relative w-[370px] h-[318px] p-4 gap-4 lg:mt-12 bg-white rounded-lg">
                            <div className="flex flex-col gap-2">
                                <svg
                                    width={32}
                                    height={32}
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M25.3333 26.6666H6.66667C5.19391 26.6666 4 25.4727 4 23.9999V11.9999C4 10.5272 5.19391 9.33325 6.66667 9.33325H25.3333C26.8061 9.33325 28 10.5272 28 11.9999V23.9999C28 25.4727 26.8061 26.6666 25.3333 26.6666Z"
                                        stroke="black"
                                        strokeWidth={2}
                                    />
                                    <path
                                        d="M22.0002 18.6666C21.632 18.6666 21.3335 18.3681 21.3335 17.9999C21.3335 17.6318 21.632 17.3333 22.0002 17.3333C22.3683 17.3333 22.6668 17.6318 22.6668 17.9999C22.6668 18.3681 22.3683 18.6666 22.0002 18.6666Z"
                                        fill="black"
                                        stroke="black"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M24 9.33347V7.4711C24 5.71902 22.3392 4.44303 20.6463 4.89447L5.97956 8.80559C4.81223 9.11689 4 10.1741 4 11.3822V12.0001"
                                        stroke="black"
                                        strokeWidth={2}
                                    />
                                </svg>
                                <span className="text-[21px] font-semibold">Sign-Up</span>
                            </div>
                            <span className="flex-grow text-[#5F5F5FC2] text-[15px]">
                                Open your preferred web browser and visit our official website:
                                https://remittix.io, Click “connect wallet &amp; pay” button and
                                ensure you are on the Ethereum blockchain (ERC20).
                            </span>
                        </div>
                        <div className="flex flex-col relative w-[370px] h-[318px] p-4 gap-4 bg-white rounded-lg">
                            <div className="flex flex-col gap-2">
                                <svg
                                    width={32}
                                    height={32}
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.0002 28.6667C22.9958 28.6667 28.6668 22.9956 28.6668 16C28.6668 9.00444 22.9958 3.33337 16.0002 3.33337C9.00456 3.33337 3.3335 9.00444 3.3335 16C3.3335 22.9956 9.00456 28.6667 16.0002 28.6667Z"
                                        stroke="#292929"
                                        strokeWidth="1.5625"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M8.49854 26.2038C9.20982 24.8278 10.2858 23.6739 11.6089 22.8684C12.932 22.063 14.4511 21.637 16 21.637C17.5489 21.637 19.068 22.063 20.3911 22.8684C21.7143 23.6739 22.7901 24.8278 23.5015 26.2038"
                                        stroke="#292929"
                                        strokeWidth="1.5625"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M16.0001 17.4075C18.503 17.4075 20.5319 15.3785 20.5319 12.8756C20.5319 10.3727 18.503 8.34375 16.0001 8.34375C13.4971 8.34375 11.4683 10.3727 11.4683 12.8756C11.4683 15.3785 13.4971 17.4075 16.0001 17.4075Z"
                                        stroke="#292929"
                                        strokeWidth="1.5625"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span className="text-[21px] font-semibold">
                                    Select Currency
                                </span>
                            </div>
                            <span className="flex-grow text-[#5F5F5FC2] text-[15px]">
                                Via the Remittix web3 dApp, select which cryptocurrency you want
                                to use to make your purchase. If you do not have crypto you can
                                use your card.
                            </span>
                        </div>
                        <div className="flex flex-col relative w-[370px] h-[318px] p-4 gap-4 lg:mt-12 bg-white rounded-lg">
                            <div className="flex flex-col gap-2">
                                <svg
                                    width={32}
                                    height={32}
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M21.3332 17.3334C17.6513 17.3334 14.6665 15.841 14.6665 14.0001C14.6665 12.1591 17.6513 10.6667 21.3332 10.6667C25.015 10.6667 27.9998 12.1591 27.9998 14.0001C27.9998 15.841 25.015 17.3334 21.3332 17.3334Z"
                                        stroke="#1E1E1E"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M14.6665 19.3333C14.6665 21.1742 17.6513 22.6666 21.3332 22.6666C25.015 22.6666 27.9998 21.1742 27.9998 19.3333"
                                        stroke="#1E1E1E"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M4 12.6667C4 14.5077 6.98477 16.0001 10.6667 16.0001C12.1678 16.0001 13.5529 15.7521 14.6673 15.3334"
                                        stroke="#1E1E1E"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M4 17.3333C4 19.1742 6.98477 20.6666 10.6667 20.6666C12.1675 20.6666 13.5524 20.4186 14.6667 20.0002"
                                        stroke="#1E1E1E"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M4 7.33325V21.9999C4 23.8409 6.98477 25.3333 10.6667 25.3333C12.1675 25.3333 13.5524 25.0851 14.6667 24.6666"
                                        stroke="#1E1E1E"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M17.3335 11.3333V7.33325"
                                        stroke="#1E1E1E"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M14.6665 14V24.6667C14.6665 26.5076 17.6513 28 21.3332 28C25.015 28 27.9998 26.5076 27.9998 24.6667V14"
                                        stroke="#1E1E1E"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M10.6667 10.6667C6.98477 10.6667 4 9.17428 4 7.33333C4 5.49239 6.98477 4 10.6667 4C14.3485 4 17.3333 5.49239 17.3333 7.33333C17.3333 9.17428 14.3485 10.6667 10.6667 10.6667Z"
                                        stroke="#1E1E1E"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span className="text-[21px] font-semibold">
                                    Buy &amp; Claim
                                </span>
                            </div>
                            <span className="flex-grow text-[#5F5F5FC2] text-[15px]">
                                Verify the transaction details inside your wallet and confirm
                                the transaction, once this is successful your tokens will
                                automatically be sent to your dashboard within 5-10 minutes
                                depending on network congestion.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center px-4 lg:px-12 2xl:px-20 lg:gap-12 bg-white">
                <div className="flex relative mt-12">
                    <span className="text-[#041019] text-[40px] leading-[46px] lg:text-[80px] lg:leading-[86px] font-bold relative z-10">
                        Powered by
                    </span>
                    <div className="absolute h-5 w-28 bg-yellow left-0 bottom-0 lg:bottom-6 z-0" />
                </div>
                <div className="flex md:flex-row items-center justify-center gap-8 select-none max-w-[1000px] w-full">
                    <SwiperPowerdBy />
                </div>
            </div>
            <div className="w-full flex flex-col items-center px-4 lg:px-12 2xl:px-20 lg:gap-12 bg-[#F2F5F6] py-12">
                <div className="flex flex-col items-center relative">
                    <div className="relative">
                        <span className="text-[#041019] text-[40px] leading-[46px] lg:text-[80px] lg:leading-[86px] font-bold relative z-10 text-center">
                            Remittix in detail
                        </span>
                        <div className="absolute h-5 w-36 bg-yellow right-12 bottom-0 lg:bottom-7 z-0" />
                    </div>
                    <span className="text-[15px] tracking-[-0.8px] lg:text-xl font-normal text-center">
                        Get in-depth knowledge of our ecosystem by reading our{" "}
                        <span className="font-bold">Whitepaper</span> and security audit.
                    </span>
                </div>
                <div className="flex flex-col w-full lg:w-fit lg:flex-row gap-4 mt-8">
                    <a
                        className="flex justify-center w-full"
                        target="_blank"
                        href="https://blocksafu.com/audit/0xC7f59c4bD6927996186696A0A9cF95dD1727b54E"
                    >
                        <div className="flex items-center justify-center relative bg-black rounded-lg text-white w-full lg:w-[321px] h-[71px] cursor-pointer">
                            <span className="text-[21px] font-semibold">Audit</span>
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
                        </div>
                    </a>
                    <a
                        className="flex justify-center w-full"
                        target="_blank"
                        href="https://remittix-organization.gitbook.io/remittix"
                    >
                        <div className="flex items-center justify-center relative bg-black rounded-lg text-white w-full lg:w-[321px] h-[71px] cursor-pointer">
                            <span className="text-[21px] font-semibold">Whitepaper</span>
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
                        </div>
                    </a>
                </div>
            </div>
            <div className="w-full flex flex-col items-center px-4 lg:px-12 2xl:px-20 lg:gap-12 bg-white py-12">
                <div className="flex flex-col bg-[#041019] rounded-[10px] relative text-white bg-competition">
                    <Image
                        className="w-full rounded-[10px]"
                        src={Competition}
                        alt="competition"
                    />
                    <div className="flex flex-col lg:absolute gap-12 p-4 lg:p-24">
                        <span className="text-[30px] lg:text-[44.44px] leading-[37.05px] lg:leading-[45px] tracking-[-1.78px] font-bold max-w-[510px]">
                            Enter Our Competition for a Chance to Win{" "}
                            <span className="text-yellow">$250K</span>
                        </span>
                        <span className="text-[15px] lg:text-xl font-normal tracking-[-0.8px] max-w-[585px]">
                            Enter Remittix $250,000 Giveaway! Ten winners will each claim
                            $25,000 in RTX. Boost your odds by sharing and completing all
                            tasks for bonus entries. Don’t miss this chance - join now!
                        </span>
                        <a
                            target="_blank"
                            className="w-full"
                            href="https://gleam.io/FHtn5/250000-remittix-giveaway"
                        >
                            <button className="third w-full lg:w-[343px] h-[62.98px] lg:h-[71px] relative">
                                <span className="text-[14.61px] lg:text-xl font-bold overflow-hidden whitespace-nowrap text-ellipsis max-w-[80%]">
                                    Enter Competition Now!
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={48}
                                    height={48}
                                    viewBox="0 0 48 48"
                                    className="absolute right-4 scale-50"
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
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}