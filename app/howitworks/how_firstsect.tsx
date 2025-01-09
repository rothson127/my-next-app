import Image from 'next/image';

import Howitworks from '../../public/images/howitworks.png';
import HowitworksSm from '../../public/images/howitworks-sm.png';

export default function HowFirstsect() {
    return (
        <main className="flex flex-col items-center justify-center z-10 bg-[#F0F0F5] text-[#15202A]">
            <div className="w-full flex flex-col lg:flex-row items-center justify-between px-4 lg:px-12 2xl:px-20 gap-8 lg:gap-4 bg-white pt-4 pb-12 lg:py-12">
                <div className="flex flex-col items-start justify-center gap-10 lg:gap-[52px]">
                    <div className="relative">
                        <span className="relative text-[46px] leading-[40px] tracking-[-1px] lg:text-[90px] lg:leading-[77px] lg:tracking-[-2px] font-bold text-black z-10">
                            How it Works
                        </span>
                        <span className="absolute top-4 -left-3 w-28 h-4 lg:top-14 lg:-left-3 lg:w-32 lg:h-4 bg-[#F9FF38]" />
                        <span className="absolute bottom-5 right-2 w-32 h-4 lg:bottom-10 lg:right-4 lg:w-60 lg:h-8 bg-[#F9FF38]" />
                    </div>
                    <span className="text-[15px] lg:text-[20px] lg:leading-[20.5px] lg:tracking-[-0.26px]">
                        Remittix is among the few Web3 platforms that effortlessly converts
                        cryptocurrency into direct fiat transfers, enabling recipients to
                        receive payments without knowing crypto was the original source.
                    </span>
                </div>
                <Image src={Howitworks} className="h-0 lg:h-auto lg:w-[60%]" alt=""/>
                <Image src={HowitworksSm} className="lg:h-0 lg:w-0" alt=""/>
            </div>
        </main>
    );
}