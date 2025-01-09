import Video from "next-video";

export default function AboutSect() {
    return (
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
    )
}