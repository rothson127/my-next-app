import FrequentlyAskedQuestions from './components/frequentlyaskedquestions';
import FaqComponent from './faq_component';

export default function Sixthsect() {
    return (
        <div>
            <main className="flex flex-col items-center justify-center py-20 z-10 relative bg-roadmap">
                <div className="w-full flex flex-col px-4 lg:px-12 2xl:px-20 gap-12 relative z-10">
                    <div className="text-[40px] lg:text-[80px] font-bold leading-[46px] w-full flex justify-center">
                        <span className="text-center">
                            Explore Our <span className="text-yellow">Roadmap</span>
                        </span>
                    </div>
                    <div className="hidden flex-col lg:grid lg:grid-cols-4">
                        <div className="roadmap-card p-12">
                            <div className="flex items-center justify-between">
                                <div className="level-title flex items-center px-4 uppercase text-yellow text-[13.63px] lg:text-[15px] font-normal">
                                    LEVEL
                                </div>
                                <div className="level-number text-yellow text-[24px] font-semibold flex items-center justify-center">
                                    01
                                </div>
                            </div>
                            <div className="divider" />
                            <ul className="text-[15px] text-[#FFFFFFC2] font-normal">
                                <li>Define the project’s vision and key milestones.</li>
                                <li>Formation of core team.</li>
                                <li>Smart contract deployment and Audit.</li>
                                <li>Launch presale website. </li>
                                <li>Initiate stage 1 marketing strategy.</li>
                            </ul>
                        </div>
                        <div className="roadmap-card p-12">
                            <div className="flex items-center justify-between">
                                <div className="level-title flex items-center px-4 uppercase text-yellow text-[13.63px] lg:text-[15px] font-normal">
                                    LEVEL
                                </div>
                                <div className="level-number text-yellow text-[24px] font-semibold flex items-center justify-center">
                                    02
                                </div>
                            </div>
                            <div className="divider" />
                            <ul className="text-[15px] text-[#FFFFFFC2] font-normal">
                                <li>Pre-list Remittix on CMC and CG.</li>
                                <li>Release influencer marketing campaign.</li>
                                <li>Launch ambassador program.</li>
                                <li>Form strategic partnerships with institutions.</li>
                                <li>Beta Release of Remittix wallet.</li>
                            </ul>
                        </div>
                        <div className="roadmap-card p-12">
                            <div className="flex items-center justify-between">
                                <div className="level-title flex items-center px-4 uppercase text-yellow text-[13.63px] lg:text-[15px] font-normal">
                                    LEVEL
                                </div>
                                <div className="level-number text-yellow text-[24px] font-semibold flex items-center justify-center">
                                    03
                                </div>
                            </div>
                            <div className="divider" />
                            <ul className="text-[15px] text-[#FFFFFFC2] font-normal">
                                <li>Hit $18m softcap, and conduct team reveal.</li>
                                <li>Conclude the presale and prepare TGE.</li>
                                <li>Release full version of Wallet.</li>
                                <li>List on DEX UniSwap and lock LP.</li>
                                <li>List token on multiple CEXs to improve exposure.</li>
                            </ul>
                        </div>
                        <div className="roadmap-card p-12">
                            <div className="flex items-center justify-between">
                                <div className="level-title flex items-center px-4 uppercase text-yellow text-[13.63px] lg:text-[15px] font-normal">
                                    LEVEL
                                </div>
                                <div className="level-number text-yellow text-[24px] font-semibold flex items-center justify-center">
                                    04
                                </div>
                            </div>
                            <div className="divider" />
                            <ul className="text-[15px] text-[#FFFFFFC2] font-normal">
                                <li>Prepare for a broad-scale global marketing campaign.</li>
                                <li>
                                    Deploy testnet and ask the community to provide feedback.
                                </li>
                                <li>Complete final development stages of ecosystem.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full lg:hidden flex flex-col items-center justify-center gap-2">
                        <div className="swiper swiper-initialized swiper-horizontal flex justify-center justify-items-center">
                            <div
                                className="swiper-wrapper"
                                style={{ transitionDuration: "0ms", transitionDelay: "0ms" }}
                            >
                                <div className="swiper-slide" data-swiper-slide-index={0}>
                                    <div className="flex flex-col gap-2 max-w-[420px]">
                                        <div className="roadmap-card p-12 text-left">
                                            <div className="flex items-center justify-between">
                                                <div className="level-title flex items-center px-4 uppercase text-yellow text-[13.63px] md:text-[15px] font-normal">
                                                    level
                                                </div>
                                                <div className="level-number text-yellow text-[24px] font-semibold flex items-center justify-center">
                                                    01
                                                </div>
                                            </div>
                                            <div className="divider" />
                                            <ul className="text-[15px] text-[#FFFFFFC2] font-normal">
                                                <li>Define the project’s vision and key milestones.</li>
                                                <li>Formation of core team.</li>
                                                <li>Smart contract deployment and Audit.</li>
                                                <li>Launch presale website. </li>
                                                <li>Initiate stage 1 marketing strategy.</li>
                                            </ul>
                                        </div>
                                        <div className="roadmap-card p-12 text-left">
                                            <div className="flex items-center justify-between">
                                                <div className="level-title flex items-center px-4 uppercase text-yellow text-[13.63px] md:text-[15px] font-normal">
                                                    level
                                                </div>
                                                <div className="level-number text-yellow text-[24px] font-semibold flex items-center justify-center">
                                                    02
                                                </div>
                                            </div>
                                            <div className="divider" />
                                            <ul className="text-[15px] text-[#FFFFFFC2] font-normal">
                                                <li>Pre-list Remittix on CMC and CG.</li>
                                                <li>Release influencer marketing campaign.</li>
                                                <li>Launch ambassador program.</li>
                                                <li>Form strategic partnerships with institutions.</li>
                                                <li>Beta Release of Remittix wallet.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide" data-swiper-slide-index={1}>
                                    <div className="flex flex-col gap-2 max-w-[420px]">
                                        <div className="roadmap-card p-12 text-left">
                                            <div className="flex items-center justify-between">
                                                <div className="level-title flex items-center px-4 uppercase text-yellow text-[13.63px] md:text-[15px] font-normal">
                                                    level
                                                </div>
                                                <div className="level-number text-yellow text-[24px] font-semibold flex items-center justify-center">
                                                    03
                                                </div>
                                            </div>
                                            <div className="divider" />
                                            <ul className="text-[15px] text-[#FFFFFFC2] font-normal">
                                                <li>Hit $18m softcap, and conduct team reveal.</li>
                                                <li>Conclude the presale and prepare TGE.</li>
                                                <li>Release full version of Wallet.</li>
                                                <li>List on DEX UniSwap and lock LP.</li>
                                                <li>
                                                    List token on multiple CEXs to improve exposure.
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="roadmap-card p-12 text-left">
                                            <div className="flex items-center justify-between">
                                                <div className="level-title flex items-center px-4 uppercase text-yellow text-[13.63px] md:text-[15px] font-normal">
                                                    level
                                                </div>
                                                <div className="level-number text-yellow text-[24px] font-semibold flex items-center justify-center">
                                                    04
                                                </div>
                                            </div>
                                            <div className="divider" />
                                            <ul className="text-[15px] text-[#FFFFFFC2] font-normal">
                                                <li>
                                                    Prepare for a broad-scale global marketing campaign.
                                                </li>
                                                <li>
                                                    Deploy testnet and ask the community to provide
                                                    feedback.
                                                </li>
                                                <li>Complete final development stages of ecosystem.</li>
                                                <li>Full scale product launch.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex justify-center">
                        <a href="/#joinpresale">
                            <button className="third h-[71px] w-[321px] relative">
                                <span className="text-[21px] font-semibold overflow-hidden whitespace-nowrap text-ellipsis max-w-[80%]">
                                    Join Presale
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={48}
                                    height={48}
                                    viewBox="0 0 48 48"
                                    className="absolute right-8 scale-50"
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
                    <div>
                        <div className="bg-faq p-4 md:p-20">
                            <FrequentlyAskedQuestions firstpage={true}/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}