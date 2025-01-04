
export default function Footer() {
    return (
        <div className="relative z-30 pt-[43px] md:pt-[55px] pb-[26px] md:pb-[103px] bg-white">
            <div className="relative z-10 css-v7lfv8" style={{ animationDelay: "0ms" }}>
                <footer className="relative flex items-center justify-center">
                    <div className="flex flex-col w-[88%] text-lg">
                        <div className="flex flex-col md:flex-row justify-between w-full md:items-end pb-8 md:pb-12 border-b-2 border-black">
                            <div className="flex items-center text-black pb-4 md:pb-0">
                                <svg
                                    width={36}
                                    height={20}
                                    viewBox="0 0 36 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-[31.01px] h-[16.02px] md:w-[55.71px] md:h-[28.78px]"
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
                                <span className="text-[20.9px] md:text-[37.55px] ml-1 md:ml-2">
                                    Remittix
                                </span>
                            </div>
                            <div className="hidden md:flex text-black gap-x-5 text-[15px]">
                                <a href="/privacy">
                                    <span className="border-b">Privacy Policy</span>
                                </a>
                                <a href="/terms">
                                    <span className="border-b">Terms of Service</span>
                                </a>
                            </div>
                            <div className="flex md:hidden flex-col text-black md:w-[40%] gap-2 md:gap-4">
                                <p className="text-[12px] text-[#4C4C4C]">Disclaimer:</p>
                                <p className="text-wrap leading-4 text-[12px] md:text-lg">
                                    Digital currencies may be unregulated in your jurisdiction. The
                                    value of digital currencies may go down as well as up. Profits may
                                    be subject to capital gains or other taxes applicable in your
                                    jurisdiction.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col md:hidden justify-between w-full items-start border-b-2 py-6 border-black gap-2 md:gap-4">
                            <p className="text-[12px] text-[#4C4C4C] leading-6">Follow us on:</p>
                            <div className="flex gap-x-[18.8px] w-full text-[#030303] items-center">
                                <a
                                    className="hover:scale-110"
                                    target="_blank"
                                    href="https://x.com/remittix"
                                >
                                    <svg
                                        width={33}
                                        height={33}
                                        viewBox="0 0 33 33"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-6"
                                    >
                                        <g clipPath="url(#clip0_1546_4323)">
                                            <path
                                                d="M25.3763 1.54688H30.3171L19.5226 13.8853L32.2222 30.6717H22.279L14.4919 20.4895L5.57981 30.6717H0.636389L12.1827 17.4741L0 1.54822H10.1956L17.2349 10.8551L25.3763 1.54688ZM23.6431 27.7153H26.3806L8.70806 4.34887H5.77046L23.6431 27.7153Z"
                                                fill="currentColor"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1546_4323">
                                                <rect width="32.2222" height="32.2222" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                                <a
                                    className="hover:scale-110"
                                    target="_blank"
                                    href="https://t.me/remittixofficial"
                                >
                                    <svg
                                        width={33}
                                        height={33}
                                        viewBox="0 0 33 33"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-7"
                                    >
                                        <path
                                            d="M27.7621 4.99584L3.95792 14.1751C2.33338 14.8277 2.34278 15.7339 3.65987 16.138L9.77135 18.0445L23.9115 9.12297C24.5801 8.71617 25.191 8.93501 24.6889 9.38075L13.2326 19.7201H13.2299L13.2326 19.7214L12.811 26.0208C13.4286 26.0208 13.7011 25.7376 14.0475 25.4033L17.016 22.5167L23.1906 27.0775C24.3291 27.7045 25.1467 27.3822 25.43 26.0235L29.4833 6.92112C29.8982 5.25765 28.8482 4.50446 27.7621 4.99584Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                                <a
                                    className="hover:scale-110"
                                    target="_blank"
                                    href="https://medium.com/@remittix"
                                >
                                    <svg
                                        width={41}
                                        height={41}
                                        viewBox="0 0 41 41"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-6"
                                    >
                                        <path
                                            d="M23.1262 20.4999C23.1262 26.9299 17.9493 32.1424 11.5631 32.1424C5.17697 32.1424 0 26.9299 0 20.4999C0 14.0699 5.17697 8.85742 11.5631 8.85742C17.9492 8.85742 23.1262 14.0699 23.1262 20.4999Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M35.8112 20.4999C35.8112 26.5526 33.2226 31.4592 30.0296 31.4592C26.8366 31.4592 24.248 26.5526 24.248 20.4999C24.248 14.4472 26.8366 9.54053 30.0296 9.54053C33.2227 9.54053 35.8112 14.4472 35.8112 20.4999Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M40.9999 20.4998C40.9999 25.9227 40.0895 30.3189 38.9664 30.3189C37.8434 30.3189 36.9331 25.9227 36.9331 20.4998C36.9331 15.0768 37.8434 10.6807 38.9664 10.6807C40.0895 10.6807 40.9999 15.0768 40.9999 20.4998Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                                <a
                                    className="hover:scale-110 cursor-pointer"
                                    target="_blank"
                                    href="https://linktr.ee/remittix"
                                >
                                    <svg
                                        width={33}
                                        height={33}
                                        xmlns="http://www.w3.org/2000/svg"
                                        shapeRendering="geometricPrecision"
                                        textRendering="geometricPrecision"
                                        imageRendering="optimizeQuality"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        viewBox="0 0 417 512.238"
                                        className="size-6"
                                    >
                                        <path
                                            fill="currentColor"
                                            fillRule="nonzero"
                                            d="M171.274 344.942h74.09v167.296h-74.09V344.942zM0 173.468h126.068l-89.622-85.44 49.591-50.985 85.439 87.829V0h74.086v124.872L331 37.243l49.552 50.785-89.58 85.24H417v70.502H290.252l90.183 87.629L331 381.192 208.519 258.11 86.037 381.192l-49.591-49.591 90.218-87.631H0v-70.502z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 md:hidden justify-between w-full items-start border-b-2 py-6 border-black text-[12px] text-black">
                            <div className="grid grid-cols-2 w-full">
                                <a className="cursor-pointer">About</a>
                                <a className="cursor-pointer">Tokenomics</a>
                                <a className="cursor-pointer">Roadmap</a>
                                <a
                                    target="_blank"
                                    href="https://remittix-organization.gitbook.io/remittix"
                                >
                                    Whitepaper
                                </a>
                                <a className="cursor-pointer">How to buy?</a>
                            </div>
                            <div className="grid grid-cols-2 w-full">
                                <a href="/privacy">
                                    <span className="border-b">Privacy Policy</span>
                                </a>
                                <a href="/terms">
                                    <span className="border-b">Terms of Service</span>
                                </a>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:hidden justify-between w-full items-start border-b-2 py-6 border-black text-[#030303]">
                            <div className="text-[12px] text-[#4C4C4C]">Contact info:</div>
                            <div className="flex flex-col text-[11px]">
                                <a href="mailto:support@remittix.io">support@remittix.io</a>
                                <a href="mailto:marketing@remittix.io">marketing@remittix.io</a>
                            </div>
                        </div>
                        <div className="hidden md:flex justify-between w-full items-start border-b-2 py-12 border-black text-[15px]">
                            <div className="flex flex-col text-black w-[40%]">
                                <p className="text-[#4C4C4C] pb-[24px]">Disclaimer:</p>
                                <p className="text-wrap leading-6">
                                    Digital currencies may be unregulated in your jurisdiction. The
                                    value of digital currencies may go down as well as up. Profits may
                                    be subject to capital gains or other taxes applicable in your
                                    jurisdiction.
                                </p>
                            </div>
                            <div className="flex flex-col text-black leading-9">
                                <p className="text-[#4C4C4C] pb-[6px]">Contact info:</p>
                                <a href="mailto:support@remittix.io">support@remittix.io</a>
                                <a href="mailto:marketing@remittix.io">marketing@remittix.io</a>
                            </div>
                            <div className="flex flex-col text-black">
                                <p className="text-[#4C4C4C] leading-9 pb-[15px]">Follow us on:</p>
                                <div className="flex gap-x-4 w-full items-center text-[#030303]">
                                    <a
                                        className="hover:scale-110"
                                        target="_blank"
                                        href="https://x.com/remittix"
                                    >
                                        <svg
                                            width={33}
                                            height={33}
                                            viewBox="0 0 33 33"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-6"
                                        >
                                            <g clipPath="url(#clip0_1546_4323)">
                                                <path
                                                    d="M25.3763 1.54688H30.3171L19.5226 13.8853L32.2222 30.6717H22.279L14.4919 20.4895L5.57981 30.6717H0.636389L12.1827 17.4741L0 1.54822H10.1956L17.2349 10.8551L25.3763 1.54688ZM23.6431 27.7153H26.3806L8.70806 4.34887H5.77046L23.6431 27.7153Z"
                                                    fill="currentColor"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1546_4323">
                                                    <rect width="32.2222" height="32.2222" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                    <a
                                        className="hover:scale-110"
                                        target="_blank"
                                        href="https://t.me/remittixofficial"
                                    >
                                        <svg
                                            width={33}
                                            height={33}
                                            viewBox="0 0 33 33"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-7"
                                        >
                                            <path
                                                d="M27.7621 4.99584L3.95792 14.1751C2.33338 14.8277 2.34278 15.7339 3.65987 16.138L9.77135 18.0445L23.9115 9.12297C24.5801 8.71617 25.191 8.93501 24.6889 9.38075L13.2326 19.7201H13.2299L13.2326 19.7214L12.811 26.0208C13.4286 26.0208 13.7011 25.7376 14.0475 25.4033L17.016 22.5167L23.1906 27.0775C24.3291 27.7045 25.1467 27.3822 25.43 26.0235L29.4833 6.92112C29.8982 5.25765 28.8482 4.50446 27.7621 4.99584Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        className="hover:scale-110"
                                        target="_blank"
                                        href="https://medium.com/@remittix"
                                    >
                                        <svg
                                            width={41}
                                            height={41}
                                            viewBox="0 0 41 41"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-6"
                                        >
                                            <path
                                                d="M23.1262 20.4999C23.1262 26.9299 17.9493 32.1424 11.5631 32.1424C5.17697 32.1424 0 26.9299 0 20.4999C0 14.0699 5.17697 8.85742 11.5631 8.85742C17.9492 8.85742 23.1262 14.0699 23.1262 20.4999Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M35.8112 20.4999C35.8112 26.5526 33.2226 31.4592 30.0296 31.4592C26.8366 31.4592 24.248 26.5526 24.248 20.4999C24.248 14.4472 26.8366 9.54053 30.0296 9.54053C33.2227 9.54053 35.8112 14.4472 35.8112 20.4999Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M40.9999 20.4998C40.9999 25.9227 40.0895 30.3189 38.9664 30.3189C37.8434 30.3189 36.9331 25.9227 36.9331 20.4998C36.9331 15.0768 37.8434 10.6807 38.9664 10.6807C40.0895 10.6807 40.9999 15.0768 40.9999 20.4998Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        className="hover:scale-110 cursor-pointer"
                                        target="_blank"
                                        href="https://linktr.ee/remittix"
                                    >
                                        <svg
                                            width={33}
                                            height={33}
                                            xmlns="http://www.w3.org/2000/svg"
                                            shapeRendering="geometricPrecision"
                                            textRendering="geometricPrecision"
                                            imageRendering="optimizeQuality"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            viewBox="0 0 417 512.238"
                                            className="size-6"
                                        >
                                            <path
                                                fill="currentColor"
                                                fillRule="nonzero"
                                                d="M171.274 344.942h74.09v167.296h-74.09V344.942zM0 173.468h126.068l-89.622-85.44 49.591-50.985 85.439 87.829V0h74.086v124.872L331 37.243l49.552 50.785-89.58 85.24H417v70.502H290.252l90.183 87.629L331 381.192 208.519 258.11 86.037 381.192l-49.591-49.591 90.218-87.631H0v-70.502z"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between w-full pt-[31px] md:pt-[51px]">
                            <div className="hidden md:flex gap-2 lg:gap-4 text-black items-start text-left text-wrap text-[15px]">
                                <a className="cursor-pointer">About</a>
                                <a className="cursor-pointer">Tokenomics</a>
                                <a className="cursor-pointer">Roadmap</a>
                                <a
                                    target="_blank"
                                    href="https://remittix-organization.gitbook.io/remittix"
                                >
                                    Whitepaper
                                </a>
                                <a className="cursor-pointer">How to buy?</a>
                            </div>
                            <div className="text-left md:text-right text-wrap">
                                <p className="text-[12px] md:text-[15px] leading-6 text-[#4C4C4C]">
                                    © All Rights reserved by Remittix - 2024
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>


    );
}