import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import BlogPic1 from "../../public/images/blog/blog-pic1.png";
import BlogPic2 from "../../public/images/blog/blog-pic2.png";
import BlogPic3 from "../../public/images/blog/blog-pic3.png";
import BlogPic4 from "../../public/images/blog/blog-pic4.png";
import BlogPic5 from "../../public/images/blog/blog-pic5.png";
import BlogPic6 from "../../public/images/blog/blog-pic6.png";
import Header from "../../public/images/background/header.svg";
import BankAccount from "../../public/images/background/bank-account.svg";

export default function BlogSecondsect() {
    return (
        <main className="flex flex-col items-center justify-center py-9 md:py-32 z-10 relative gap-24 ">
            <div className="w-full flex flex-col items-center px-4 lg:px-12 2xl:px-20 relative z-10 gap-3 md:gap-6">
                <div className="text-[40px] md:text-4xl leading-[46px] md:leading-[77px] tracking-[-0.5px] md:tracking-[-0.8px] font-bold">
                    <span className="text-yellow">Digging Deep:</span>{" "}
                    <span>A Dive into the Inner Workings of Cross-border Payments</span>
                </div>
                <span className="text-[#A6B1C5] text-[18px] md:text-[19px] leading-[18px] md:leading-[30.7px] tracking-[-0.38px]">
                    The future of mining: Exploring blockchain innovation and its impact on
                    the industry.
                </span>
                <div className="md:w-full">
                    <div className="divider" />
                </div>
                <div className="flex flex-col md:grid grid-cols-3 gap-5 ">
                    <div className="blog-card p-3">
                        <div className="relative">
                            <div className="absolute flex items-center top-2 left-2 text-2xl gap-2 z-10">
                                <Image src={Logo} className="h-5" alt="" />
                                <span className="text-[22px] leading-[28.3px] md:leadnig-[30.7px] md:text-[24px] font-bold">
                                    Remittix
                                </span>
                            </div>
                            <div className="shadow absolute -top-1 left-0 right-0 h-2/3" />
                            <Image src={BlogPic1} alt="" />
                        </div>
                        <span className="title">
                            BlockDAG Has Just Landed in Testnet Territory: Here’s Everything You
                            Need To Know
                        </span>
                        <div className="divider" />
                        <span className="content">
                            What a Day for BlockDAG! Testnet Goes Live and Presale Surpasses $73.2
                            Million Raised, Jump into the BlockDAG Mission Before it’s too Late!
                        </span>
                        <div className="flex flex-grow justify-between items-center">
                            <span className="date">September 20, 2024</span>
                            <div className="flex items-center">
                                <span className="text-[#FBFF25] font-bold md:text-[18.3px] md:leading-[23.3px] md:tracking-[-0.7px]">
                                    Read More
                                </span>
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
                    </div>
                    <div className="blog-card p-3">
                        <div className="relative">
                            <div className="absolute flex items-center top-2 left-2 text-2xl gap-2 z-10">
                                <Image src={Logo} className="h-5" alt="" />
                                <span className="text-[22px] leading-[28.3px] md:leadnig-[30.7px] md:text-[24px] font-bold">
                                    Remittix
                                </span>
                            </div>
                            <div className="shadow absolute -top-1 left-0 right-0 h-2/3" />
                            <Image src={BlogPic2} alt="" />
                        </div>
                        <span className="title">
                            BlockDAG Has Just Landed in Testnet Territory: Here’s Everything You
                            Need To Know
                        </span>
                        <div className="divider" />
                        <span className="content">
                            What a Day for BlockDAG! Testnet Goes Live and Presale Surpasses $73.2
                            Million Raised, Jump into the BlockDAG Mission Before it’s too Late!
                        </span>
                        <div className="flex flex-grow justify-between items-center">
                            <span className="date">September 20, 2024</span>
                            <div className="flex items-center">
                                <span className="text-[#FBFF25] font-bold md:text-[18.3px] md:leading-[23.3px] md:tracking-[-0.7px]">
                                    Read More
                                </span>
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
                    </div>
                    <div className="blog-card p-3">
                        <div className="relative">
                            <div className="absolute flex items-center top-2 left-2 text-2xl gap-2 z-10">
                                <Image src={Logo} className="h-5" alt="" />
                                <span className="text-[22px] leading-[28.3px] md:leadnig-[30.7px] md:text-[24px] font-bold">
                                    Remittix
                                </span>
                            </div>
                            <div className="shadow absolute -top-1 left-0 right-0 h-2/3" />
                            <Image src={BlogPic3} alt="" />
                        </div>
                        <span className="title">
                            BlockDAG Has Just Landed in Testnet Territory: Here’s Everything You
                            Need To Know
                        </span>
                        <div className="divider" />
                        <span className="content">
                            What a Day for BlockDAG! Testnet Goes Live and Presale Surpasses $73.2
                            Million Raised, Jump into the BlockDAG Mission Before it’s too Late!
                        </span>
                        <div className="flex flex-grow justify-between items-center">
                            <span className="date">September 20, 2024</span>
                            <div className="flex items-center">
                                <span className="text-[#FBFF25] font-bold md:text-[18.3px] md:leading-[23.3px] md:tracking-[-0.7px]">
                                    Read More
                                </span>
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
                    </div>
                    <div className="blog-card p-3">
                        <div className="relative">
                            <div className="absolute flex items-center top-2 left-2 text-2xl gap-2 z-10">
                                <Image src={Logo} className="h-5" alt="" />
                                <span className="text-[22px] leading-[28.3px] md:leadnig-[30.7px] md:text-[24px] font-bold">
                                    Remittix
                                </span>
                            </div>
                            <div className="shadow absolute -top-1 left-0 right-0 h-2/3" />
                            <Image src={BlogPic4} alt="" />
                        </div>
                        <span className="title">
                            BlockDAG Has Just Landed in Testnet Territory: Here’s Everything You
                            Need To Know
                        </span>
                        <div className="divider" />
                        <span className="content">
                            What a Day for BlockDAG! Testnet Goes Live and Presale Surpasses $73.2
                            Million Raised, Jump into the BlockDAG Mission Before it’s too Late!
                        </span>
                        <div className="flex flex-grow justify-between items-center">
                            <span className="date">September 20, 2024</span>
                            <div className="flex items-center">
                                <span className="text-[#FBFF25] font-bold md:text-[18.3px] md:leading-[23.3px] md:tracking-[-0.7px]">
                                    Read More
                                </span>
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
                    </div>
                    <div className="blog-card p-3">
                        <div className="relative">
                            <div className="absolute flex items-center top-2 left-2 text-2xl gap-2 z-10">
                                <Image src={Logo} className="h-5" alt="" />
                                <span className="text-[22px] leading-[28.3px] md:leadnig-[30.7px] md:text-[24px] font-bold">
                                    Remittix
                                </span>
                            </div>
                            <div className="shadow absolute -top-1 left-0 right-0 h-2/3" />
                            <Image src={BlogPic5} alt="" />
                        </div>
                        <span className="title">
                            BlockDAG Has Just Landed in Testnet Territory: Here’s Everything You
                            Need To Know
                        </span>
                        <div className="divider" />
                        <span className="content">
                            What a Day for BlockDAG! Testnet Goes Live and Presale Surpasses $73.2
                            Million Raised, Jump into the BlockDAG Mission Before it’s too Late!
                        </span>
                        <div className="flex flex-grow justify-between items-center">
                            <span className="date">September 20, 2024</span>
                            <div className="flex items-center">
                                <span className="text-[#FBFF25] font-bold md:text-[18.3px] md:leading-[23.3px] md:tracking-[-0.7px]">
                                    Read More
                                </span>
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
                    </div>
                    <div className="blog-card p-3">
                        <div className="relative">
                            <div className="absolute flex items-center top-2 left-2 text-2xl gap-2 z-10">
                                <Image src={Logo} className="h-5" alt="" />
                                <span className="text-[22px] leading-[28.3px] md:leadnig-[30.7px] md:text-[24px] font-bold">
                                    Remittix
                                </span>
                            </div>
                            <div className="shadow absolute -top-1 left-0 right-0 h-2/3" />
                            <Image src={BlogPic6} alt="" />
                        </div>
                        <span className="title">
                            BlockDAG Has Just Landed in Testnet Territory: Here’s Everything You
                            Need To Know
                        </span>
                        <div className="divider" />
                        <span className="content">
                            What a Day for BlockDAG! Testnet Goes Live and Presale Surpasses $73.2
                            Million Raised, Jump into the BlockDAG Mission Before it’s too Late!
                        </span>
                        <div className="flex flex-grow justify-between items-center">
                            <span className="date">September 20, 2024</span>
                            <div className="flex items-center">
                                <span className="text-[#FBFF25] font-bold md:text-[18.3px] md:leading-[23.3px] md:tracking-[-0.7px]">
                                    Read More
                                </span>
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
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center relative bg-yellow rounded-lg text-black w-[250px] h-[48px] cursor-pointer">
                <span className="text-[16.5px] lg:text-[21px] font-bold leading-[37px] lg:leading-[27px] overflow-hidden whitespace-nowrap text-ellipsis max-w-[80%]">
                    Learn More
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
            <div className="bg-overview">
                <Image
                    className="top-left"
                    src={Header}
                    alt="header"
                />
                <Image
                    className="bottom-left"
                    src={BankAccount}
                    alt="bank"
                />
            </div>
        </main>

    );
}