import Image from 'next/image';

import Us from "../images/flags/us.png";
import BankTransfer from "../images/bank-transfer.png";
import Ge from "../images/flags/ge.png";
import ButtonLeft from "../images/background/button-left.svg";
import Stripe from "../images/bank/stripe.png";
import Wise from "../images/bank/wise.png";
import Coinbase from "../images/bank/coinbase.png";

export default function Secondsect() {
    return (
        <main className="flex flex-col items-center justify-center relative z-30 text-[#15202A]">
            <div className="w-full flex flex-col px-4 lg:px-12 2xl:px-20 gap-12 bg-white py-20">
                <div className="flex flex-col max-w-[557px]">
                    <span className="font-extrabold bg-yellow w-fit pl-4">
                        Pay Remittix
                    </span>
                    <span className="text-[40px] md:text-[50px] leading-[40px] md:leading-[50px] tracking-[-0.8px] font-bold relative">
                        <span className="relative z-10">
                            Use crypto to pay directly into any fiat bank account.
                        </span>
                        <div className="h-[21px] w-[183px] bg-yellow absolute bottom-0 left-2 md:right-16 md:top-1/2 z-0" />
                    </span>
                </div>
                <div className="grid xl:grid-cols-2 gap-20 w-fit m-auto">
                    <div className="flex flex-col gap-6 relative z-10 font-semibold justify-center">
                        <div className="flex flex-col gap-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex flex-col relative max-w-[335px] p-8 bg-[#F1F1F6] rounded-lg">
                                    <div className="bg-[#1A2228] rounded-md p-2 w-fit h-fit">
                                        <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M17.6968 2.0603H6.06592C5.59926 2.0603 5.20569 2.06029 4.8817 2.0824C4.54315 2.1055 4.21753 2.15561 3.89991 2.28718C3.16963 2.58967 2.58943 3.16987 2.28693 3.90015C2.15537 4.21778 2.10525 4.5434 2.08216 4.88194C2.06005 5.20593 2.06005 5.59948 2.06006 6.06614V13.5437C2.06004 15.477 2.06003 17.0166 2.22228 18.2235C2.38973 19.4688 2.74418 20.4894 3.55083 21.2961C4.35747 22.1027 5.37802 22.4571 6.62342 22.6246C7.83024 22.7868 9.36983 22.7868 11.3032 22.7868H14.0622C15.7477 22.7868 17.0904 22.7868 18.1542 22.6611C19.249 22.5316 20.1613 22.2587 20.9257 21.6315C21.1834 21.42 21.4198 21.1837 21.6313 20.926C22.2585 20.1617 22.5314 19.2494 22.6608 18.1544C22.7866 17.0906 22.7866 15.7481 22.7866 14.0624V13.9488C22.7866 12.2632 22.7866 10.9206 22.6608 9.8568C22.5314 8.7619 22.2585 7.84959 21.6313 7.08525C21.4198 6.82753 21.1834 6.59122 20.9257 6.37972C20.1613 5.75244 19.249 5.47953 18.1542 5.35012C17.0904 5.22437 15.7477 5.22438 14.0621 5.22439H3.8094C3.81198 5.14299 3.81544 5.06896 3.82012 5.00052C3.83716 4.75065 3.86734 4.63676 3.89634 4.56678C4.02202 4.26335 4.2631 4.02226 4.56654 3.89658C4.63651 3.8676 4.7504 3.83741 5.00028 3.82036C5.25791 3.80278 5.59176 3.80231 6.09514 3.80231H17.6968C18.1778 3.80231 18.5678 3.41235 18.5678 2.93131C18.5678 2.45027 18.1778 2.0603 17.6968 2.0603ZM3.80206 13.4783V6.9664H14.0053C15.7604 6.9664 17 6.96782 17.9497 7.08008C18.8801 7.19006 19.4181 7.39595 19.8206 7.72631C19.9901 7.86542 20.1456 8.02086 20.2847 8.19037C20.615 8.5929 20.8209 9.13085 20.9309 10.0613C21.0431 11.011 21.0446 12.2506 21.0446 14.0057C21.0446 15.7606 21.0431 17.0003 20.9309 17.9499C20.8209 18.8803 20.615 19.4183 20.2847 19.8208C20.1456 19.9903 19.9901 20.1458 19.8206 20.2849C19.4181 20.6152 18.8801 20.8211 17.9497 20.9311C17 21.0433 15.7604 21.0448 14.0053 21.0448H11.3686C9.35522 21.0448 7.93283 21.043 6.85553 20.8981C5.80333 20.7566 5.21164 20.4933 4.7826 20.0643C4.35357 19.6352 4.09022 19.0436 3.94875 17.9914C3.80392 16.9141 3.80206 15.4916 3.80206 13.4783Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M18.1809 14.7264C18.1809 15.3623 17.6652 15.8779 17.0294 15.8779C16.3934 15.8779 15.8779 15.3623 15.8779 14.7264C15.8779 14.0905 16.3934 13.575 17.0294 13.575C17.6652 13.575 18.1809 14.0905 18.1809 14.7264Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-[#040F19] text-[18.42px] font-bold mt-12 md:mt-20">
                                        User-friendly interface.
                                    </span>
                                    <span className="text-[#040F19] text-[17.27px] font-normal mt-4 w-[240px]">
                                        Send crypto payments straight to bank accounts in over 30
                                        currencies— simply connect your wallet.
                                    </span>
                                    <div className="absolute bottom-4 right-4">
                                        <svg
                                            width={38}
                                            height={37}
                                            viewBox="0 0 38 37"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g filter="url(#filter0_b_1541_2072)">
                                                <circle
                                                    cx="18.7771"
                                                    cy="18.4236"
                                                    r="18.4236"
                                                    fill="white"
                                                    fillOpacity="0.06"
                                                />
                                                <circle
                                                    cx="18.7771"
                                                    cy="18.4236"
                                                    r="17.8478"
                                                    stroke="currentColor"
                                                    strokeWidth="1.15147"
                                                />
                                            </g>
                                            <path
                                                d="M24.8222 14.6816V24.4692H15.0347"
                                                stroke="currentColor"
                                                strokeWidth="1.72721"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M24.5345 24.1813L12.7319 12.3787"
                                                stroke="currentColor"
                                                strokeWidth="1.72721"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <defs>
                                                <filter
                                                    id="filter0_b_1541_2072"
                                                    x="-4.71297"
                                                    y="-5.06648"
                                                    width="46.9801"
                                                    height="46.9801"
                                                    filterUnits="userSpaceOnUse"
                                                    colorInterpolationFilters="sRGB"
                                                >
                                                    <feFlood
                                                        floodOpacity={0}
                                                        result="BackgroundImageFix"
                                                    />
                                                    <feGaussianBlur
                                                        in="BackgroundImageFix"
                                                        stdDeviation="2.53324"
                                                    />
                                                    <feComposite
                                                        in2="SourceAlpha"
                                                        operator="in"
                                                        result="effect1_backgroundBlur_1541_2072"
                                                    />
                                                    <feBlend
                                                        mode="normal"
                                                        in="SourceGraphic"
                                                        in2="effect1_backgroundBlur_1541_2072"
                                                        result="shape"
                                                    />
                                                </filter>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex flex-col relative max-w-[335px] p-8 bg-[#040F19] rounded-lg bg-[url(./images/featurecard.png)] bg-cover">
                                    <div className="bg-[#1A2228] rounded-md p-2 w-fit h-fit">
                                        <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12.4233 21.0596C14.6207 21.0596 16.1299 21.0572 17.2839 20.9323C18.4056 20.8107 18.9849 20.5902 19.398 20.29C19.7402 20.0414 20.0411 19.7405 20.2897 19.3983C20.5899 18.9851 20.8104 18.4058 20.932 17.2842C21.0569 16.1302 21.0594 14.6209 21.0594 12.4236C21.0594 10.2262 21.0569 8.71697 20.932 7.563C20.8104 6.44135 20.5899 5.86201 20.2897 5.4488C20.0411 5.10666 19.7402 4.80578 19.398 4.5572C18.9849 4.25699 18.4056 4.03643 17.2839 3.91491C16.1299 3.78988 14.6207 3.78751 12.4233 3.78751C12.1282 3.78751 11.8454 3.78756 11.5743 3.78793L11.5743 21.0591C11.8454 21.0596 12.1282 21.0596 12.4233 21.0596ZM9.84711 21.0473C8.94097 21.0327 8.19803 21.001 7.56275 20.9323C6.4411 20.8107 5.86176 20.5902 5.44856 20.29C5.10642 20.0414 4.80554 19.7405 4.55696 19.3983C4.25675 18.9851 4.03619 18.4058 3.91467 17.2842C3.78964 16.1302 3.78727 14.6209 3.78727 12.4236C3.78727 10.2262 3.78964 8.71697 3.91467 7.563C4.03619 6.44135 4.25675 5.86201 4.55696 5.4488C4.80554 5.10666 5.10642 4.80578 5.44856 4.5572C5.86176 4.25699 6.4411 4.03643 7.56275 3.91491C8.19803 3.84608 8.94097 3.81442 9.84713 3.79987L9.84711 21.0473ZM22.7866 12.4236C22.7866 8.10585 22.7866 5.94698 21.687 4.43357C21.3319 3.9448 20.9021 3.51497 20.4133 3.15986C18.8999 2.0603 16.741 2.0603 12.4233 2.0603C8.1056 2.0603 5.94674 2.0603 4.43333 3.15986C3.94456 3.51497 3.51473 3.9448 3.15961 4.43357C2.06006 5.94698 2.06006 8.10585 2.06006 12.4236C2.06006 16.7412 2.06006 18.9001 3.15961 20.4135C3.51473 20.9023 3.94456 21.3322 4.43333 21.6873C5.94674 22.7868 8.1056 22.7868 12.4233 22.7868C16.741 22.7868 18.8999 22.7868 20.4133 21.6873C20.9021 21.3322 21.3319 20.9023 21.687 20.4135C22.7866 18.9001 22.7866 16.7412 22.7866 12.4236Z"
                                                fill="white"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M8.83577 6.66634C8.83577 6.18939 8.44911 5.80273 7.97216 5.80273H6.24495C5.76799 5.80273 5.38135 6.18939 5.38135 6.66634C5.38135 7.14329 5.76799 7.52994 6.24495 7.52994H7.97216C8.44911 7.52994 8.83577 7.14329 8.83577 6.66634Z"
                                                fill="white"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M8.83577 8.96932C8.83577 8.49237 8.44911 8.10571 7.97216 8.10571H6.24495C5.76799 8.10571 5.38135 8.49237 5.38135 8.96932C5.38135 9.44627 5.76799 9.83292 6.24495 9.83292H7.97216C8.44911 9.83292 8.83577 9.44627 8.83577 8.96932Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-yellow text-[18.42px] font-bold mt-12 md:mt-20">
                                        Zero FX fees.
                                    </span>
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
                                    <span className="text-white text-[17.27px] font-normal mt-2 w-[240px]">
                                        Cross-border transfers come with a flat fee—no extra charges
                                        for FX, wires, or hidden costs. What you send is exactly
                                        what they receive.
                                    </span>
                                    <div className="absolute bottom-4 right-4">
                                        <svg
                                            width={38}
                                            height={37}
                                            viewBox="0 0 38 37"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g filter="url(#filter0_b_1541_2105)">
                                                <circle
                                                    cx="19.1745"
                                                    cy="18.4236"
                                                    r="18.4236"
                                                    fill="white"
                                                    fillOpacity="0.06"
                                                />
                                                <circle
                                                    cx="19.1745"
                                                    cy="18.4236"
                                                    r="17.8478"
                                                    stroke="#EDEDED"
                                                    strokeOpacity="0.12"
                                                    strokeWidth="1.15147"
                                                />
                                            </g>
                                            <path
                                                d="M25.2196 14.6807V24.4682H15.4321"
                                                stroke="white"
                                                strokeOpacity="0.78"
                                                strokeWidth="1.72721"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M24.932 24.1808L13.1294 12.3782"
                                                stroke="white"
                                                strokeOpacity="0.78"
                                                strokeWidth="1.72721"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <defs>
                                                <filter
                                                    id="filter0_b_1541_2105"
                                                    x="-4.31551"
                                                    y="-5.06648"
                                                    width="46.9801"
                                                    height="46.9801"
                                                    filterUnits="userSpaceOnUse"
                                                    colorInterpolationFilters="sRGB"
                                                >
                                                    <feFlood
                                                        floodOpacity={0}
                                                        result="BackgroundImageFix"
                                                    />
                                                    <feGaussianBlur
                                                        in="BackgroundImageFix"
                                                        stdDeviation="2.53324"
                                                    />
                                                    <feComposite
                                                        in2="SourceAlpha"
                                                        operator="in"
                                                        result="effect1_backgroundBlur_1541_2105"
                                                    />
                                                    <feBlend
                                                        mode="normal"
                                                        in="SourceGraphic"
                                                        in2="effect1_backgroundBlur_1541_2105"
                                                        result="shape"
                                                    />
                                                </filter>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4">
                                <div className="flex flex-col relative max-w-[335px] p-8 bg-[#040F19] rounded-lg bg-[url(./images/featurecard.png)] bg-cover">
                                    <div className="bg-[#1A2228] rounded-md p-2 w-fit h-fit">
                                        <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M6.3216 10.2971L6.32687 10.305C5.30533 11.6156 4.69678 13.264 4.69678 15.0544C4.69678 19.3249 8.15875 22.7868 12.4293 22.7868C16.6999 22.7868 20.1618 19.3249 20.1618 15.0544C20.1618 13.2641 19.5534 11.6158 18.5319 10.3052L18.5372 10.2973C18.1743 9.83202 17.7594 9.40926 17.3011 9.03778L17.296 9.04529C16.3318 8.26333 15.1755 7.70882 13.909 7.46339L13.9144 7.45528C13.4338 7.3619 12.9372 7.31299 12.4293 7.31299C11.9179 7.31299 11.4181 7.36257 10.9344 7.4572L10.9399 7.4653C9.67732 7.71165 8.52468 8.26521 7.56291 9.04498L7.55788 9.03747C7.09959 9.40896 6.68459 9.83174 6.3216 10.2971ZM12.4293 9.0503C9.11329 9.0503 6.42512 11.7384 6.42512 15.0544C6.42512 18.3703 9.11329 21.0584 12.4293 21.0584C15.7453 21.0584 18.4334 18.3703 18.4334 15.0544C18.4334 11.7384 15.7453 9.0503 12.4293 9.0503Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M19.2084 9.2977L21.9906 5.1539C22.2283 4.8002 22.4578 4.4585 22.5978 4.16447C22.7444 3.85688 22.917 3.34912 22.6367 2.82329C22.3565 2.29747 21.8386 2.15779 21.5016 2.10798C21.1793 2.06037 20.7678 2.06046 20.3416 2.06056H18.3304C17.76 2.06054 17.274 2.06053 16.8688 2.09824C16.437 2.13844 16.0354 2.2255 15.6447 2.43416C15.2541 2.64282 14.9584 2.92805 14.6848 3.26457C14.4281 3.58033 14.1577 3.9843 13.8405 4.45838L12.6982 6.16505C13.353 6.18451 13.99 6.27473 14.6017 6.42831L15.2559 5.45086C15.5998 4.93705 15.8259 4.60079 16.0259 4.35482C16.2145 4.12271 16.3408 4.02174 16.459 3.95869C16.577 3.89563 16.7312 3.84685 17.0289 3.81912C17.3446 3.78973 17.7498 3.78887 18.3681 3.78887H20.2851C20.5014 3.78887 20.6763 3.7893 20.8198 3.79186C20.742 3.91238 20.6448 4.05784 20.5242 4.23748L17.9456 8.07805C18.4056 8.44225 18.8287 8.85096 19.2084 9.2977Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M12.1473 6.16502L10.3705 3.53631C9.78932 2.62152 8.78052 2.06689 7.69599 2.06689H3.50276C2.35417 2.06689 1.66767 3.34546 2.30222 4.30285L5.65082 9.29649C6.03065 8.84976 6.45386 8.44106 6.91393 8.07689L4.04276 3.7952H7.69599C8.19131 3.7952 8.65188 4.04972 8.91545 4.46909C8.92055 4.4772 8.92578 4.48524 8.93115 4.49317L10.2415 6.43176C10.8539 6.27684 11.4917 6.18545 12.1473 6.16502Z"
                                                fill="white"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12.4292 12.4386C10.9844 12.4386 9.81315 13.6099 9.81315 15.0547C9.81315 16.4995 10.9844 17.6708 12.4292 17.6708C13.8741 17.6708 15.0453 16.4995 15.0453 15.0547C15.0453 13.6099 13.8741 12.4386 12.4292 12.4386ZM8.08594 15.0547C8.08594 12.656 10.0305 10.7114 12.4292 10.7114C14.828 10.7114 16.7726 12.656 16.7726 15.0547C16.7726 17.4534 14.828 19.398 12.4292 19.398C10.0305 19.398 8.08594 17.4534 8.08594 15.0547Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-yellow text-[18.42px] font-bold mt-12 md:mt-20">
                                        Seamlessly simple.
                                    </span>
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
                                    <span className="text-white text-[17.27px] font-normal mt-2 w-[240px]">
                                        Your recipient gets a bank transfer without ever knowing it
                                        started as a crypto payment.
                                    </span>
                                    <div className="absolute bottom-4 right-4">
                                        <svg
                                            width={38}
                                            height={37}
                                            viewBox="0 0 38 37"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g filter="url(#filter0_b_1541_2105)">
                                                <circle
                                                    cx="19.1745"
                                                    cy="18.4236"
                                                    r="18.4236"
                                                    fill="white"
                                                    fillOpacity="0.06"
                                                />
                                                <circle
                                                    cx="19.1745"
                                                    cy="18.4236"
                                                    r="17.8478"
                                                    stroke="#EDEDED"
                                                    strokeOpacity="0.12"
                                                    strokeWidth="1.15147"
                                                />
                                            </g>
                                            <path
                                                d="M25.2196 14.6807V24.4682H15.4321"
                                                stroke="white"
                                                strokeOpacity="0.78"
                                                strokeWidth="1.72721"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M24.932 24.1808L13.1294 12.3782"
                                                stroke="white"
                                                strokeOpacity="0.78"
                                                strokeWidth="1.72721"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <defs>
                                                <filter
                                                    id="filter0_b_1541_2105"
                                                    x="-4.31551"
                                                    y="-5.06648"
                                                    width="46.9801"
                                                    height="46.9801"
                                                    filterUnits="userSpaceOnUse"
                                                    colorInterpolationFilters="sRGB"
                                                >
                                                    <feFlood
                                                        floodOpacity={0}
                                                        result="BackgroundImageFix"
                                                    />
                                                    <feGaussianBlur
                                                        in="BackgroundImageFix"
                                                        stdDeviation="2.53324"
                                                    />
                                                    <feComposite
                                                        in2="SourceAlpha"
                                                        operator="in"
                                                        result="effect1_backgroundBlur_1541_2105"
                                                    />
                                                    <feBlend
                                                        mode="normal"
                                                        in="SourceGraphic"
                                                        in2="effect1_backgroundBlur_1541_2105"
                                                        result="shape"
                                                    />
                                                </filter>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex flex-col relative max-w-[335px] p-8 bg-[#F1F1F6] rounded-lg">
                                    <div className="bg-[#1A2228] rounded-md p-2 w-fit h-fit">
                                        <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_1541_2091)">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M3.49316 9.53085C3.49316 9.05416 3.87981 8.66772 4.35677 8.66772H7.18489C7.66184 8.66772 8.0485 9.05416 8.0485 9.53085C8.0485 10.0075 7.66184 10.394 7.18489 10.394H4.35677C3.87981 10.394 3.49316 10.0075 3.49316 9.53085Z"
                                                    fill="white"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M17.9533 5.09898C16.7699 4.93998 15.2101 4.93815 13.0145 4.93815H9.7636C10.7397 5.95108 11.3399 7.32834 11.3399 8.8457V19.9092H15.3173C16.9703 19.9092 18.123 19.9075 18.9927 19.7906C19.8377 19.6771 20.2851 19.4693 20.6037 19.1508C20.9225 18.8323 21.1302 18.3852 21.2438 17.5407C21.3608 16.6715 21.3625 15.5193 21.3625 13.8674V13.2815C21.3625 11.0872 21.3608 9.52822 21.2017 8.34555C21.0459 7.18772 20.7539 6.52066 20.2665 6.03362C19.7792 5.54658 19.1118 5.25465 17.9533 5.09898ZM9.61266 19.9092V8.8457C9.61266 6.68761 7.86219 4.93815 5.70289 4.93815C3.54359 4.93815 1.79312 6.68761 1.79312 8.84569V14.5109C1.79312 15.8475 1.79436 16.7795 1.87314 17.4944C1.95009 18.1927 2.0923 18.579 2.30436 18.8642C2.45541 19.0674 2.63545 19.2473 2.83874 19.3983C3.12413 19.6103 3.51064 19.7524 4.20931 19.8293C4.92465 19.908 5.85714 19.9092 7.19457 19.9092H9.61266ZM5.70289 3.21191H13.0794C15.1955 3.21189 16.8717 3.21188 18.1834 3.38815C19.5334 3.56955 20.6261 3.95176 21.4878 4.81299C22.3496 5.67422 22.732 6.76629 22.9135 8.11554C23.0899 9.42658 23.0899 11.1017 23.0898 13.2167V13.9306C23.0899 15.5045 23.0899 16.773 22.9556 17.7708C22.8163 18.8067 22.5182 19.6788 21.8251 20.3715C21.132 21.0641 20.2593 21.3621 19.2229 21.5013C18.2246 21.6355 16.9553 21.6355 15.3805 21.6355H7.14383C5.86907 21.6355 4.8412 21.6355 4.02021 21.5451C3.1717 21.4517 2.44059 21.2532 1.80861 20.784C1.46979 20.5323 1.16972 20.2324 0.917963 19.8938C0.448385 19.2622 0.24977 18.5315 0.156314 17.6834C0.0658899 16.8629 0.0659027 15.8356 0.0659184 14.5615L0.0659188 8.84569C0.0659188 5.73425 2.58968 3.21191 5.70289 3.21191Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M15.4491 11.5294V10.394H13.7674C13.2905 10.394 12.9038 10.0076 12.9038 9.53087C12.9038 9.05418 13.2905 8.66775 13.7674 8.66775L17.4893 8.66773C17.7255 8.66764 17.9809 8.66755 18.1964 8.69651C18.449 8.73044 18.7716 8.81771 19.0431 9.08908C19.3146 9.36044 19.402 9.68289 19.4359 9.93528C19.4649 10.1507 19.4648 10.406 19.4647 10.642V11.5294L19.4648 11.5508C19.4649 11.6374 19.4651 11.7741 19.4486 11.8969C19.4272 12.0553 19.3653 12.3118 19.1443 12.5326C18.9234 12.7534 18.6668 12.8154 18.5083 12.8367C18.3854 12.8532 18.2486 12.853 18.162 12.8529H18.1405H16.7733H16.7519C16.6652 12.853 16.5285 12.8532 16.4057 12.8367C16.2471 12.8154 15.9906 12.7534 15.7696 12.5326C15.5486 12.3118 15.4867 12.0553 15.4654 11.8969C15.4488 11.7741 15.449 11.6374 15.4491 11.5509V11.5294Z"
                                                    fill="white"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1541_2091">
                                                    <rect
                                                        width="23.0295"
                                                        height="23.0295"
                                                        fill="white"
                                                        transform="translate(0.0600586 0.908936)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <span className="text-[#040F19] text-[18.42px] font-bold mt-12 md:mt-20">
                                        Super fast.
                                    </span>
                                    <span className="text-[#040F19] text-[17.27px] font-normal mt-4 w-[240px]">
                                        Crypto is received instantly, and fiat is sent via local
                                        payment networks, ensuring same-day processing.
                                    </span>
                                    <div className="absolute bottom-4 right-4">
                                        <svg
                                            width={38}
                                            height={37}
                                            viewBox="0 0 38 37"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g filter="url(#filter0_b_1541_2072)">
                                                <circle
                                                    cx="18.7771"
                                                    cy="18.4236"
                                                    r="18.4236"
                                                    fill="white"
                                                    fillOpacity="0.06"
                                                />
                                                <circle
                                                    cx="18.7771"
                                                    cy="18.4236"
                                                    r="17.8478"
                                                    stroke="currentColor"
                                                    strokeWidth="1.15147"
                                                />
                                            </g>
                                            <path
                                                d="M24.8222 14.6816V24.4692H15.0347"
                                                stroke="currentColor"
                                                strokeWidth="1.72721"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M24.5345 24.1813L12.7319 12.3787"
                                                stroke="currentColor"
                                                strokeWidth="1.72721"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <defs>
                                                <filter
                                                    id="filter0_b_1541_2072"
                                                    x="-4.71297"
                                                    y="-5.06648"
                                                    width="46.9801"
                                                    height="46.9801"
                                                    filterUnits="userSpaceOnUse"
                                                    colorInterpolationFilters="sRGB"
                                                >
                                                    <feFlood
                                                        floodOpacity={0}
                                                        result="BackgroundImageFix"
                                                    />
                                                    <feGaussianBlur
                                                        in="BackgroundImageFix"
                                                        stdDeviation="2.53324"
                                                    />
                                                    <feComposite
                                                        in2="SourceAlpha"
                                                        operator="in"
                                                        result="effect1_backgroundBlur_1541_2072"
                                                    />
                                                    <feBlend
                                                        mode="normal"
                                                        in="SourceGraphic"
                                                        in2="effect1_backgroundBlur_1541_2072"
                                                        result="shape"
                                                    />
                                                </filter>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full justify-center mb-10 relative z-10">
                        <div className="flex flex-col w-full max-w-[564px] p-4 md:p-12 gap-10 shadow-[0_20px_20px_#00000040] rounded-xl">
                            <div className="flex gap-2">
                                <div className="bg-black text-white rounded-lg h-[30px] w-[109px] flex justify-center items-center cursor-pointer">
                                    <span className="text-[12.95px] font-medium">
                                        Select bank
                                    </span>
                                </div>
                            </div>
                            <div className="relative px-4">
                                <span className="relative z-10 text-[18px] md:text-[19.11px] font-semibold">
                                    Which bank account <br /> would you like to send funds to?
                                </span>
                                <div className="bg-yellow h-4 w-24 absolute top-2 left-20 z-0" />
                            </div>
                            <div className="flex flex-col px-8">
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                        <span className="text-black text-[12.32px] md:text-[17.91px] font-extrabold">
                                            CHASE
                                        </span>
                                        <div className="text-[6.57px] md:text-[9.55px] font-bold">
                                            <span className="text-gray mr-2">IBAN:</span>
                                            <span>US18 0977 0868 0021 3544 18</span>
                                        </div>
                                        <div className="text-[6.57px] md:text-[9.55px] font-bold">
                                            <span className="text-gray mr-2">SWIFT/BIC:</span>
                                            <span>CSEUS22</span>
                                        </div>
                                    </div>
                                    <Image
                                        className="size-[37.1px] md:size-[53.94px]"
                                        src={Us}
                                        alt="us"
                                    />
                                </div>
                                <div className="grid grid-cols-[1fr_67px_1fr] items-center px-2 gap-2">
                                    <div className="h-[1px] bg-[#C3C3C3]" />
                                    <Image src={BankTransfer} alt="bank" />
                                    <div className="h-[1px] bg-[#C3C3C3]" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                        <span className="text-black text-[12.32px] md:text-[17.91px] font-extrabold uppercase">
                                            DEUTSCHE BANK
                                        </span>
                                        <div className="text-[6.57px] md:text-[9.55px] font-bold">
                                            <span className="text-gray mr-2">IBAN:</span>
                                            <span>EU11 0576 1824 2250 1517 44</span>
                                        </div>
                                        <div className="text-[6.57px] md:text-[9.55px] font-bold">
                                            <span className="text-gray mr-2">SWIFT/BIC:</span>
                                            <span>DBAFS18</span>
                                        </div>
                                    </div>
                                    <Image
                                        className="size-[37.1px] md:size-[53.94px]"
                                        src={Ge}
                                        alt="ge"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-center h-[44.15px] md:h-[64.17px] relative bg-black rounded-[10.7px] cursor-pointer hover:bg-yellow text-white hover:text-black transition-all">
                                <Image
                                    className="absolute left-4"
                                    src={ButtonLeft}
                                    alt="background"
                                />
                                <span className="text-[16px] md:text-[21.39px]">
                                    Add New Bank
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={48}
                                    height={48}
                                    viewBox="0 0 48 48"
                                    className="h-[20.38px] absolute right-4"
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
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col px-4 lg:px-12 2xl:px-20 gap-12 bg-[#F1F1F6]">
                <div className="grid md:grid-cols-2 gap-8 md:gap-20 py-8 md:py-24">
                    <div className="flex flex-col gap-6 relative z-10 font-semibold justify-center">
                        <div className="flex flex-col relative gap-4">
                            <span className="text-[#15202A] text-[40px] md:text-[50px] tracking-[-0.8px] leading-[52px] max-w-[588px] relative z-10 font-bold">
                                Crypto-to-fiat payments made simple.
                            </span>
                            <span className="text-[#040F19] text-xl font-normal max-w-[673px] relative z-10">
                                <b>Remittix</b> operates just like your favorite banking apps,
                                but we allow you to send crypto while ensuring your recipients
                                receive fiat. When you need an easy solution for crypto
                                payments, Remittix is your go-to protocol.
                            </span>
                            <div className="bg-yellow h-4 w-24 absolute top-32 left-0 md:top-2 md:left-20 z-0" />
                        </div>
                    </div>
                    <div className="flex w-full justify-center mb-10 relative z-10">
                        <div className="flex flex-col gap-2 w-[97%] md:w-[546px] max-w-[546px]">
                            <div className="w-full flex justify-between bg-[#6860FF] rounded-[9.84px] md:rounded-[13.72px] h-[53.86px] md:h-[78.67px] items-center px-8 md:px-12">
                                <Image
                                    className="w-[63.88px] md:w-fit"
                                    src={Stripe}
                                    alt="stripe"
                                />
                                <span className="text-[9.71px] md:text-[14.18px] tracking-[0.7px] text-white py-[21.2px] md:py-[32px]">
                                    Fiat- Fiat payments
                                </span>
                            </div>
                            <div className="w-full flex justify-between bg-[#A0E071] rounded-[9.84px] md:rounded-[13.72px] h-[53.86px] md:h-[78.67px] items-center px-8 md:px-12">
                                <Image
                                    className="w-[73.25px] md:w-fit"
                                    src={Wise}
                                    alt="wise"
                                />
                                <span className="text-[9.71px] md:text-[14.18px] tracking-[0.7px] text-black py-[21.2px] md:py-[32px]">
                                    Fiat- Fiat Transfers
                                </span>
                            </div>
                            <div className="w-full flex justify-between bg-[#F9FF38] rounded-[9.84px] md:rounded-[13.72px] h-[53.86px] md:h-[78.67px] items-center px-8 md:px-12">
                                <div className="flex gap-1 items-center">
                                    <svg
                                        width={36}
                                        height={20}
                                        viewBox="0 0 36 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-black w-[24.31px]"
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
                                    <span className="text-[16.38px] md:text-[23.93px] tracking-[0.7px] text-black font-bold">
                                        Remittix
                                    </span>
                                </div>
                                <span className="text-[9.71px] md:text-[14.18px] text-black py-[21.2px] md:py-[32px]">
                                    Crypto-Fiat Transfers
                                </span>
                            </div>
                            <div className="w-full flex justify-between bg-[#0052FE] rounded-[9.84px] md:rounded-[13.72px] h-[53.86px] md:h-[78.67px] items-center px-8 md:px-12">
                                <Image
                                    className="w-[88.93px] md:w-fit"
                                    src={Coinbase}
                                    alt="coinbase"
                                />
                                <span className="text-[9.71px] md:text-[14.18px] tracking-[0.7px] text-white py-[21.2px] md:py-[32px]">
                                    Crypto-Crypto Transfers
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}