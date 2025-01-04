
export default function BlogFirstsect() {
    return (
        <main className="flex flex-col items-center justify-center z-10 bg-[#F0F0F5] text-[#15202A]">
            <div className="w-full flex flex-col items-center px-4 2xl:px-20 md:gap-2 bg-white pt-6">
                <div className="w-full flex items-center gap-2 pb-4 max-w-[1200px]">
                    <div className="relative">
                        <span className="relative text-4xl z-10 ml-2 font-bold md:leading-[38px] md:tracking-[-1px]">
                            Blog
                        </span>
                        <div className="bg-yellow md:h-4 w-14 absolute bottom-0 left-0" />
                    </div>
                    <hr className="w-full border border-[#DADADA]" />
                </div>
                <div className="blog-header flex flex-col bg-[#041019] rounded-[10px] relative text-white bg-competition max-w-[1200px]">
                    <div className="flex flex-col gap-12 p-4 md:p-24">
                        <span className="text-[30px] md:text-[44.44px] leading-[37.05px] md:leading-[45px] tracking-[-1.46px] md:tracking-[-1.78px] font-bold max-w-[510px]">
                            Enter Our Competition for aChance to Win a Free{" "}
                            <span className="text-yellow">$250K</span> Trading Account!
                        </span>
                        <span className="text-[15px] md:text-xl font-normal leading-[24.7px] md:leading-[30px] tracking-[-0.66px] md:tracking-[-0.8px] max-w-[585px]">
                            Join our competition for a chance to win a free $200,000 trading
                            account! This unique opportunity allows you to test your trading
                            skills with zero risk, while giving you the potential to profit like a
                            professional trader.
                        </span>
                        <a
                            target="_blank"
                            className="w-full"
                            href="https://gleam.io/FHtn5/250000-remittix-giveaway"
                        >
                            <button className="third w-full md:w-[343px] h-[62.98px] md:h-[71px] relative">
                                <span className="text-[14.65px] leading-[33px] md:leading-[45px] md:text-xl font-bold overflow-hidden whitespace-nowrap text-ellipsis max-w-[80%]">
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
                <div className="my-4 w-full md:invisible">
                    <a
                        target="_blank"
                        className="w-full"
                        href="https://gleam.io/FHtn5/250000-remittix-giveaway"
                    >
                        <button className="third w-full md:w-[343px] h-[62.98px] md:h-[71px] relative !bg-black !text-yellow">
                            <span className="text-[14.61px] md:text-xl font-bold overflow-hidden whitespace-nowrap text-ellipsis max-w-[80%]">
                                Join Presale
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
        </main>

    );
}