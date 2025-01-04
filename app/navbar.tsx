import Logo from "./images/logo.svg";
import En from "./images/flags/en.svg";
import Header from "./images/background/header.svg";

import Image from 'next/image';
import Link from 'next/link';

export default function MarqueeBar() {
    return (
        <div className="flex">
            <main className="relative z-20 w-full px-4 lg:px-12 2xl:px-20 py-5 bg-[#041019]">
                <div className="flex items-center justify-between relative z-10">
                    <Link className="flex items-center" href="/">
                        <Image
                            className="w-[31.01px] h-[16.02px] md:w-[55.71px] md:h-[28.78px]"
                            src={Logo}
                            draggable="false"
                            alt="logo"
                        />
                        <div className="text-[20.9px] md:text-[37.55px] font-bold ml-1 md:ml-2 text-white">
                            Remittix
                        </div>
                    </Link>
                    <div className="flex items-center gap-2 lg:gap-4 xl:gap-6 text-base">
                        <Link
                            className="cursor-pointer text-sm text-light-white hover:text-yellow transition hidden lg:inline-block"
                            href="/howitworks"
                        >
                            How it Works
                        </Link>
                        <a
                            className="cursor-pointer text-sm text-light-white hover:text-yellow transition hidden lg:inline-block"
                            href="/#section4">
                            Tokenomics
                        </a>
                        <Link
                            className="cursor-pointer text-sm text-light-white hover:text-yellow transition hidden lg:inline-block"
                            href="/usecase"
                        >
                            Usecase
                        </Link>
                        <Link
                            className="cursor-pointer text-sm text-light-white hover:text-yellow transition hidden lg:inline-block"
                            target="_blank"
                            href="https://gleam.io/FHtn5/250000-remittix-giveaway"
                        >
                            $250k Giveaway
                        </Link>
                        <Link
                            className="cursor-pointer text-sm text-light-white hover:text-yellow transition hidden lg:inline-block"
                            target="_blank"
                            href="https://remittix-organization.gitbook.io/remittix"
                        >
                            Whitepaper
                        </Link>
                        <Link
                            className="cursor-pointer text-sm text-light-white hover:text-yellow transition hidden lg:inline-block"
                            href="/blog"
                        >
                            Blog
                        </Link>
                    </div>
                    <div className="flex items-center gap-4 flex-row-reverse lg:flex-row">
                        <a className="hidden xl:flex" href="/#joinpresale">
                            <div className="flex items-center justify-center relative bg-yellow text-black rounded-lg  w-[250px] h-[48px] cursor-pointer">
                                <span className="text-[16px] font-semibold overflow-hidden whitespace-nowrap text-ellipsis max-w-[80%]">
                                    Join Presale
                                </span>
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
                        <div className="relative">
                            <div className="flex gap-1 cursor-pointer">
                                <Image
                                    src={En}
                                    className="w-6 h-6 rounded-lg"
                                    alt="flag"
                                />
                                <span className="leading-6 hidden md:block text-white">EN</span>
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
                </div>
            </main>
            <div className="relative flex items-center gap-4 lg:hidden z-40 pr-4 lg:pr-12">
                <svg
                    width={28}
                    height={20}
                    viewBox="0 0 28 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6"
                >
                    <rect width="27.6923" height="4.10256" rx="2.05128" fill="#F9FF38" />
                    <rect
                        y="15.8965"
                        width="27.6923"
                        height="4.10256"
                        rx="2.05128"
                        fill="#F9FF38"
                    />
                    <rect
                        x="6.27051"
                        y="7.69141"
                        width="21.4224"
                        height="4.10256"
                        rx="2.05128"
                        fill="#F9FF38"
                    />
                </svg>
            </div>
        </div>

    );
}