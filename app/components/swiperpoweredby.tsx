'use client';

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Metamask from "../images/power/metamask.png";
import Uniswap from "../images/power/uniswap.png";
import Ethereum from "../images/power/ethereum.png";
import Trust from "../images/power/trust.png";
import Openai from "../images/power/openai.png";
import Google from "../images/power/google.png";
import Github from "../images/power/github.png";
import Adobe from "../images/power/adobe.png";
import Bing from "../images/power/bing.png";

import Image from 'next/image';
import { Autoplay } from 'swiper/modules';

interface SwiperPowerdByProps {
    className?: string; // Define className as an optional prop
}

const SwiperPowerdBy: React.FC<SwiperPowerdByProps> = ({ className }) => {
    return (
        <Swiper
            spaceBetween={50}
            loop={true}
             autoplay={{
                 delay: 3000,
            //     disableOnInteraction: false,
             }}
            modules={[Autoplay]}
            breakpoints={{
                // Define breakpoints for responsive behavior
                640: {
                    slidesPerView: 4, // 1 slide for small screens
                },
                768: {
                    slidesPerView: 5, // 2 slides for medium screens
                },
                1024: {
                    slidesPerView: 6, // 3 slides for large screens
                },
                1280: {
                    slidesPerView: 7, // 4 slides for extra large screens
                },
            }}
        >
            <SwiperSlide>
                <Image
                    src={Openai}
                    className="w-fit"
                    alt="power"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={Google}
                    className="w-fit"
                    alt="power"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={Github}
                    className="w-fit"
                    alt="power"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={Adobe}
                    className="w-fit"
                    alt="power"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={Bing}
                    className="w-fit"
                    alt="power"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={Metamask}
                    className="w-fit"
                    alt="power"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={Uniswap}
                    className="w-fit"
                    alt="power"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={Ethereum}
                    className="w-fit"
                    alt="power"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={Trust}
                    className="w-fit"
                    alt="power"
                />
            </SwiperSlide>

        </Swiper>

    );
}

export default SwiperPowerdBy;