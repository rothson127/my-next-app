
import Image from 'next/image';

import Fivestar from "./images/fivestar.png";

export default function Thirdsect2() {
    return (
        <main className="flex flex-col items-center justify-center py-20 z-10 bg-[#F0F0F5] text-[#15202A]">
            <div className="w-full flex flex-col px-4 lg:px-12 2xl:px-20 gap-12 items-center">
                <div className="flex flex-col-reverse md:flex-col items-center justify-center">
                    <div className="text-[39.59px] md:text-[60px] tracking-[-0.8px] font-bold text-black relative flex">
                        <span className="relative z-10 text-center">Community Reviews</span>
                        <div className="bg-yellow h-4 w-32 absolute top-8 left-12" />
                        <div className="bg-yellow h-4 w-28 absolute bottom-5 -right-2 hidden md:flex" />
                    </div>
                    <Image src={Fivestar} alt="star" />
                </div>
                <div className="grid md:grid-cols-2 w-full gap-4">
                    <div className="flex justify-center md:justify-end h-[320px]">
                        <iframe
                            className="max-w-[560px] w-full"
                            width="98%"
                            height=""
                            src="https://www.youtube.com/embed/QheQsp3Si-o"
                        />
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <iframe
                            className="max-w-[560px] w-full h-[320px]"
                            width="98%"
                            height=""
                            src="https://www.youtube.com/embed/w_6fe38l0IQ"
                        />
                    </div>
                </div>
                <div className="flex justify-center w-full">
                    <a className="flex items-center justify-center relative bg-black rounded-lg text-white w-full md:w-[321px] h-[71px] cursor-pointer" href="/#joinpresale">
                        <span className="text-[21px] font-semibold overflow-hidden whitespace-nowrap text-ellipsis max-w-[80%]">
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
                    </a>
                </div>
            </div>
        </main>
    );
}