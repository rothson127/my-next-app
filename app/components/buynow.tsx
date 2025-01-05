//'use client';
import Image from 'next/image';

import EthEth from "../images/token/eth-eth.png";
import UsdtEth from "../images/token/usdt-eth.png";
import Card from "../images/token/card.png";
import Eth from "../images/token/eth.png";
import Logo from "../images/logo.svg";

import React from 'react';

const BuyNow: React.FC = () => {
    return (
        <div>
            <div className="card-box" id="joinpresale">
                <div className="card-content text-[10.28px] md:text-[15.05px]">
                    <div className="flex flex-col items-center relative">
                        <span className="text-[18.58px] md:text-[27.17px] font-bold">
                            Buy Now
                        </span>
                        <span className="text-yellow text-[18.58px] md:text-[27.17px] font-bold">
                            Before Price Rises
                        </span>
                    </div>
                    <div className="bg-[#091F2F] h-[22px] w-full relative flex items-center">
                        <div
                            className="progress-bar w-[0%] max-w-full transition-all duration-300 ease-in-out"
                            style={{ width: "55.71%" }}
                        />
                        <span className="absolute right-2 font-medium opacity-60">
                            44.29% Sold
                        </span>
                    </div>
                    <div className="text-center w-full mt-1 flex flex-col">
                        <span>USD RAISED SO FAR: $195,000/$0</span>
                        <span>Tokens Sold:27,857,143/0</span>
                    </div>
                    <div className="flex gap-2">
                        <span className="opacity-35">Your purchased $RTX</span>
                        <span className="opacity-60">= 0</span>
                    </div>
                    <div className="w-full">
                        <div className="input w-full">
                            <input
                                className="w-full"
                                readOnly
                                defaultValue="1 $RTX = $0"
                            />
                            <span className="w-fit text-nowrap text-green">
                                Next Price: $0
                            </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <button className="tab-btn w-full active">
                            <Image
                                className="size-[21.89px] md:size-[32px]"
                                src={EthEth}
                                alt="eth"
                            />
                            <span>ETH</span>
                        </button>
                        <button className="tab-btn w-full ">
                            <Image
                                className="size-[21.89px] md:size-[32px]"
                                src={UsdtEth}
                                alt="usdt"
                            />
                            <span>USDT</span>
                        </button>
                        <a href="/cardpay">
                            <button className="tab-btn w-full">
                                <Image
                                    className="size-[21.89px] md:size-[32px]"
                                    src={Card}
                                    alt="card"
                                />
                                <span>CARD</span>
                            </button>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between">
                                <span className="text-yellow">ETH you pay</span>
                                <button className="third text-[9px] md:text-[12px] !px-2">
                                    MAX
                                </button>
                            </div>
                            <div className="input">
                                <input className="w-full" defaultValue="" />
                                <Image
                                    className="size-[21.89px] md:size-[32px]"
                                    src={Eth}
                                    alt="token"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-yellow">$RTX you receive</span>
                            <div className="input">
                                <input className="w-full" readOnly defaultValue="" />
                                <Image
                                    className="size-[21.89px] md:size-[32px]"
                                    src={Logo}
                                    alt="logo"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full justify-between gap-2">
                        <button className="primary h-[30.78px] md:h-[45px] w-full">
                            Connect wallet &amp; Pay
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <a href="/howtobuy">
                            <button className="secondary h-[30.78px] md:h-[45px] w-full">
                                <span className="text-white">How to buy?</span>
                            </button>
                        </a>
                        <a
                            target="_blank"
                            href="https://gleam.io/FHtn5/250000-remittix-giveaway"
                        >
                            <button className="secondary h-[30.78px] md:h-[45px] w-full">
                                <span className="text-white">$250,000 Giveaway</span>
                            </button>
                        </a>
                    </div>
                    <div className="w-full">
                        <a href="/error">
                            <button className="secondary h-[30.78px] md:h-[45px] w-full">
                                <span className="text-white">
                                    Getting Error? Click here
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BuyNow;