'use client';
import Image from 'next/image';

import EthEth from "../../public/images/token/eth-eth.png";
import UsdtEth from "../../public/images/token/usdt-eth.png";
import Card from "../../public/images/token/card.png";
import Eth from "../../public/images/token/eth.png";
import Logo from "../../public/images/logo.svg";

import TokenAbi from './Tokenabi.json';
import Presale from './presale.json';

import { useState } from 'react';

import React from 'react';
import Web3 from "web3";

import { useWeb3Modal } from '@web3modal/wagmi/react';

declare global {
    interface Window {
        ethereum?: any;
        web3?: any;
    }
}

const BuyNow: React.FC = () => {

    const [isConnected, SetIsConnected] = useState(false);

    const [loading, setLoading] = useState(false);

    const [account, setAccount] = useState("");

    const [eth, setEth] = useState(true);

    const [presalecontractinstance, setpresalecontractinstance] = useState({});

    const [tokenName, setTokenName] = useState("");
    const [tokenSymbol, setTokenSymbol] = useState("");
    const [tokenDecimal, setTokenDecimal] = useState("");
    const [balanceOfUser, setBalanceOfUser] = useState(0);
    const [tokenSoldInPresale, setTokenSoldInPresale] = useState(0);
    const [tokenPriceInPresale, setTokenPriceInPresale] = useState(0);
    const [totalSupplyOfTokens, setTotalSupplyOfTokens] = useState(0);
    const [myTokenAddressInCrowsale, setMyTokenAddressInCrowsale] = useState("");
    const {open} = useWeb3Modal();

    function handleClickEth() {
        setEth(true);
    }

    function handleClickUsdt() {
        setEth(false);
    }

    async function handleClickConnect() {
        
        setLoading(true);
        
        await open();
        setLoading(false);
        // loadWeb3();
        // loadBlockchainData();
    }

    function handleDisconnect() {
        SetIsConnected(false);
    }

    function handleBuyNow() {

    }

    function handleClickMax() {

    }

    function handleChangePay() {

    }

    const loadWeb3 = async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
            window.alert("Ethereum browser detected.");
        } else {
            window.alert(
                "Non-Ethereum browser detected. You should consider trying MetaMask!"
            );
        }
    };

    const loadBlockchainData = async () => {

        if (
            typeof window.ethereum == "undefined"
        ) {
            return;
        }
        const web3 = new Web3(window.ethereum);

        const accounts = await web3.eth.getAccounts();

        if (accounts.length == 0) {
            return;
        }

        setAccount(accounts[0]);

        const networkId: any = await web3.eth.net.getId();

        window.alert(networkId)
        //const networkData = Helloabi.abi.networks[networkId];
        // console.log(networkData);
        if (networkId == 97) { // if bsc-testnet
            const mycontract = new web3.eth.Contract(TokenAbi.abi, "0x6bF2a1e2CDe1DA1Cc892e6c5b458197EB147173e");
            const nameoftoken : string = await mycontract.methods.name().call();
            // decimal 
            const decimaloftoken:string = await mycontract.methods.decimals().call();
            // symbol 
            const symboloftoken:string = await mycontract.methods.symbol().call()

            // totalsupply
            const totalsupplyoftoken: number = await mycontract.methods.totalSupply().call();
            const totalsupplyoftokenindecimals:any = await web3.utils.fromWei(totalsupplyoftoken, 'ether');

            const balanceofuser: number = await mycontract.methods.balanceOf(accounts[0]).call();
            const balanceofuserinwei:any = await web3.utils.fromWei(balanceofuser, 'ether')

            window.alert("###   " + nameoftoken + " " + decimaloftoken + "  " + symboloftoken + "  " + totalsupplyoftoken + " " + totalsupplyoftokenindecimals);
            window.alert("###   " + balanceofuser + " " + balanceofuserinwei);

            const presalecontract = new web3.eth.Contract(Presale.abi, "0xD23d39176200334CD5f0401803F35F81F4849515");

            setpresalecontractinstance(presalecontract)

            const mytokeninpresale:any = await presalecontract.methods.mytoken().call();

            const tokenpriceofpresale: number = await presalecontract.methods.tokenprice().call();

            window.alert(" my token in presale : " + mytokeninpresale + " ###    " + tokenpriceofpresale);

            const tokenpriceofpresaleinether = await web3.utils.fromWei(tokenpriceofpresale, 'ether');

            const totalsoldofpresale: number = await presalecontract.methods.totalsold().call();

            const totalsoldofpresaleinether:any = await web3.utils.fromWei(totalsoldofpresale, 'ether');

            setTokenName(nameoftoken);
            setTokenDecimal(decimaloftoken)
            setTokenSymbol(symboloftoken)
            setBalanceOfUser(balanceofuserinwei)
            setTokenSoldInPresale(totalsoldofpresaleinether)
            setTotalSupplyOfTokens(totalsupplyoftokenindecimals)
            setTokenPriceInPresale(tokenpriceofpresale)
            setMyTokenAddressInCrowsale(mytokeninpresale)

            setLoading(false);

        } else {
            window.alert("the contract not deployed to detected network.");
            SetIsConnected(false);

        }

        SetIsConnected(true);
    };


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
                        <button className={`tab-btn w-full ${eth && 'active'}`} onClick={handleClickEth}>
                            <Image
                                className="size-[21.89px] md:size-[32px]"
                                src={EthEth}
                                alt="eth"
                            />
                            <span>ETH</span>
                        </button>
                        <button className={`tab-btn w-full ${(!eth) && 'active'}`} onClick={handleClickUsdt}>
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
                                <span className="text-yellow">{eth ? "ETH" : "USDT"} you pay</span>
                                <button className="third text-[9px] md:text-[12px] !px-2" onClick={handleClickMax}>
                                    MAX
                                </button>
                            </div>
                            <div className="input">
                                <input className="w-full" defaultValue="" onChange={handleChangePay} />
                                <Image
                                    className="size-[21.89px] md:size-[32px]"
                                    src={eth ? Eth : UsdtEth}
                                    alt="token"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-yellow">JGM you receive</span>
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

                    {
                        isConnected ?
                            (
                                <div className="flex w-full justify-between gap-2">
                                    <button className="primary h-[30.78px] md:h-[45px] w-full" onClick={handleBuyNow}>Buy Now</button>
                                    <button className="secondary h-[30.78px] md:h-[45px] w-full relative" onClick={handleDisconnect}>
                                        <span>{account.substring(0, 5) + "..." + account.substring(37, 41)}</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            data-slot="icon"
                                            className="size-3 md:size-5 absolute right-2 md:right-4"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            ) :
                            (
                                <div className="flex w-full justify-between gap-2">
                                    <button className="primary h-[30.78px] md:h-[45px] w-full" onClick={() => open()}>
                                        {loading ? <span>Loading ...</span> : <span>Connect wallet &amp; Pay</span>}
                                    </button>
                                </div>
                            )
                    }

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