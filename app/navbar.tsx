'use client';

import * as React from "react";

import Logo from "./images/logo.svg";
import En from "./images/flags/en.svg";
import Header from "./images/background/header.svg";

import Image from 'next/image';
import Link from 'next/link';
import Menu from "./components/menu";

export default function NavBar() {
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
                            href="/#sect_tokenomic">
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
                <Menu />
            </div>
        </div>

    );
}
