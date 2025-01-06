'use client';

import React from 'react';
import { useState } from 'react';

const Menu: React.FC = () => {

    const [hidden, setHidden] = useState(true);

    function handleClickMenu() {
        setHidden(false);
    }

    function handleClickClose() {
        setHidden(true);
    }

    return (
        <div className="modal">
            <button onClick={handleClickMenu}>
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
            </button>

            <div
                className={`${hidden && 'hidden'} fixed left-0 shadow-4xl right-0 top-0 pt-[5rem] z-50 backdrop-blur-[50px] bg-[#040A127F]`}
                style={{ opacity: 1 }}
            >
                <div className="absolute top-0 right-0 px-8 py-8 z-40 cursor-pointer">
                    <svg
                        className="h-8 w-8 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        onClick={handleClickClose}
                    >
                        <line x1={18} y1={6} x2={6} y2={18} />
                        <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                </div>
                <div className="flex flex-col items-center">
                    <div className="mb-8">
                        <svg
                            width={36}
                            height={20}
                            viewBox="0 0 36 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-yellow size-24"
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
                    </div>
                    <ul className="grid gap-4 mb-8">
                        <li
                            className="w-full p-[0.08rem] rounded-xl z-40"
                            style={{ opacity: 1, transform: "none" }}
                        >
                            <a
                                className="flex items-center justify-center w-full text-[#98B0B1] hover:text-[#9DE2FF] cursor-pointer"
                                href="/howitworks"
                            >
                                <span className="flex hover:color-[#9DE2FF] color-[#98B0B1] text-lg">
                                    How It Works
                                </span>
                            </a>
                        </li>
                        <li
                            className="w-full p-[0.08rem] rounded-xl z-40"
                            style={{ opacity: 1, transform: "none" }}
                        >
                            <a className="flex items-center justify-center w-full text-[#98B0B1] hover:text-[#9DE2FF] cursor-pointer">
                                <span className="flex hover:color-[#9DE2FF] color-[#98B0B1] text-lg">
                                    Tokenomics
                                </span>
                            </a>
                        </li>
                        <li
                            className="w-full p-[0.08rem] rounded-xl z-40"
                            style={{ opacity: 1, transform: "none" }}
                        >
                            <a
                                className="flex items-center justify-center w-full text-[#98B0B1] hover:text-[#9DE2FF] cursor-pointer"
                                href="/usecase"
                            >
                                <span className="flex hover:color-[#9DE2FF] color-[#98B0B1] text-lg">
                                    Use Cases
                                </span>
                            </a>
                        </li>
                        <li
                            className="w-full p-[0.08rem] rounded-xl z-40"
                            style={{ opacity: 1, transform: "none" }}
                        >
                            <a
                                target="_blank"
                                className="flex items-center justify-center w-full text-[#98B0B1] hover:text-[#9DE2FF] cursor-pointer"
                                href="https://gleam.io/FHtn5/250000-remittix-giveaway"
                            >
                                <span className="flex hover:color-[#9DE2FF] color-[#98B0B1] text-lg">
                                    $250k Giveaway
                                </span>
                            </a>
                        </li>
                        <li
                            className="w-full p-[0.08rem] rounded-xl z-40"
                            style={{ opacity: 1, transform: "none" }}
                        >
                            <a
                                target="_blank"
                                className="flex items-center justify-center w-full text-[#98B0B1] hover:text-[#9DE2FF] cursor-pointer"
                                href="https://remittix-organization.gitbook.io/remittix"
                            >
                                <span className="flex hover:color-[#9DE2FF] color-[#98B0B1] text-lg">
                                    Whitepaper
                                </span>
                            </a>
                        </li>
                        <li
                            className="w-full p-[0.08rem] rounded-xl z-40"
                            style={{ opacity: 1, transform: "none" }}
                        >
                            <a
                                className="flex items-center justify-center w-full text-[#98B0B1] hover:text-[#9DE2FF] cursor-pointer"
                                href="/blog"
                            >
                                <span className="flex hover:color-[#9DE2FF] color-[#98B0B1] text-lg">
                                    Blog
                                </span>
                            </a>
                        </li>
                    </ul>
                    <a href="/#joinpresale">
                        <button className="third h-[48px] w-[321px] relative mb-12">
                            <span className="text-[21px] font-semibold overflow-hidden whitespace-nowrap text-ellipsis max-w-[80%]">
                                Join Presale
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={48}
                                height={48}
                                viewBox="0 0 48 48"
                                className="absolute right-8 scale-50"
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
    );
}

export default Menu;