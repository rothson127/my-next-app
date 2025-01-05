'use client';

import React from 'react';

interface FAQProps {
    firstpage?: boolean; // Define className as an optional prop
}

const FrequentlyAskedQuestions: React.FC<FAQProps> = ({ firstpage }) => {

    const questionData = [
        {
            type: "General",
            data: [
                {
                    question: "What is Remittix?",
                    answer: "Remittix is a payment network that enables individuals and businesses to pay fiat into any bank account around the world using crypto."
                },
                {
                    question: "Is Remittix secure?",
                    answer: "Yes, we use advanced encryption and security measures to ensure all transactions and personal data are protected from unauthorized access."
                },
                {
                    question: "Has the smart contract been audited?",
                    answer: "Indeed, the smart contract has been audited by one of Europe’s leading blockchain security auditing firms, please find the link to the audit in our whitepaper."
                },
                {
                    question: "What is the smart contract address?",
                    answer: "0xC7f59c4bD6927996186696A0A9cF95dD1727b54E"
                },
                {
                    question: "How do I become a VIP member?",
                    answer: "You can view more information about the benefits of becoming a VIP member here."
                },
            ]
        },
        {
            type: "Presale",
            data: [
                {
                    question: "What is in the minimum investment?",
                    answer: "The recommended minimum investment amount is $50 or currency equivalent."
                },
                {
                    question: "When do I receive my RTX tokens?",
                    answer: "You will receive your tokens 72 hours after the presale concludes, users will receive an airdrop to their wallet. Please keep up to date with the project updates via our social channels and community groups."
                },
                {
                    question: "Which cryptocurrencies do you accept?",
                    answer: "During the presale we accept Ethereum ETH, Tether USDT-ERC20 and card payments."
                },
                {
                    question: "When will the presale finish?",
                    answer: "The presale will finish when all 8 stages of the presale are completed, we anticipate this would take 3 months, however to ensure a speedy launch we have implemented a $18m softcap and a $36m hardcap."
                },
                {
                    question: "Where can I sell my RTX tokens?",
                    answer: "You will be able to see your tokens once we list them on Uniswap, this will happen 5 days are the presale closes."
                },
                {
                    question: "Which exchanges will RTX tokens be listed on?",
                    answer: "We plan to list RTX tokens on a number of different centralized exchanges, and we will also launch RTX tokens on Uniswap."
                },
            ]
        },
        {
            type: "Dashboard",
            data: [
                {
                    question: "How can I see how many tokens I have purchased?",
                    answer: "You can see the tokens you have purchased by connecting your wallet to site."
                },
                {
                    question: "Can I stake my RTX tokens?",
                    answer: "You can stake your tokens once the presale concludes. You can earn between 4% - 18% depending on the number of tokens you hold."
                },
            ]
        },
        {
            type: "Other",
            data: [
                {
                    question: "How do I contact the Remittix team?",
                    answer: "You can contact the team via Live Chat or alternatively you can send an email to: support@remittix.io"
                },
                {
                    question: "How can i enter the $250,000 giveaway?",
                    answer: "You can enter by completing the relevant tasks here."
                },
            ]
        }
    ];

    const [currentButton, setCurrentButton] = React.useState<String>('General');

    const [currentQuestion, setCurrentQuestion] = React.useState<String>('What is Remittix?');

    function handleClickButton(buttonName: String) {
        setCurrentButton(buttonName);
        questionData.map((question) => (
            (question.type === buttonName) && setCurrentQuestion(question.data[0].question)
        ));
    }

    function handleClickQuestion(question: String) {
        setCurrentQuestion(question);
    }

    return (
        <div className="flex flex-col w-full text-center gap-4">
            <div className="flex flex-col w-full gap-3 md:gap-7">
                <div className="relative">
                    {
                        firstpage ?
                            (
                                <span className="text-center text-[40px] leading-[46px] md:text-[80px] md:leading-[86px] tracking-[-2px]">
                                    Frequently Asked <span className="text-yellow">Questions</span>
                                </span>
                            ) :
                            (
                                <>
                                    <span className="relative text-center text-[40px] leading-[46px] tracking-[-0.8px] md:text-[80px] md:leading-[80px] md:tracking-[-0.8px] font-bold text-black z-10">
                                        Frequently Asked Questions
                                    </span>
                                    <div className="absolute bg-yellow w-20 h-4 top-5 left-40 lg:w-32 lg:h-4 lg:top-10 lg:left-80" />
                                    <div className="absolute bg-yellow w-20 h-4 bottom-3 right-40 lg:w-32 lg:h-6 lg:bottom-6 lg:right-72" />
                                </>
                            )
                    }
                </div>
                <span className={`text-[15px] md:text-xl font-normal text-center ${firstpage ? "text-white" : "text-black"}`}>
                    Below are commonly asked questions from our members about the
                    project and ecosystem.
                </span>
            </div>
            <div className="flex gap-1 md:gap-4 justify-center py-4 md:py-12">
                {
                    questionData.map((question) => (
                        (currentButton === question.type) ?
                            (
                                <button className={`px-2 md:px-8 py-1 md:py-2 text-[14.55px] md:text-[25px] font-semibold border  rounded-full cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis ${firstpage ? 'text-black border-white bg-yellow' : 'text-yellow border-black bg-black'}`} onClick={() => handleClickButton(question.type)}>
                                    {question.type}
                                </button>
                            ) :
                            (
                                <button className={`px-2 md:px-8 py-1 md:py-2 text-[14.55px] md:text-[25px] font-semibold border rounded-full cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis ${firstpage ? 'text-white border-white' : 'text-black border-black bg-white'}`} onClick={() => handleClickButton(question.type)}>
                                    {question.type}
                                </button>
                            )
                    ))
                }
            </div>
            <div className="flex flex-col gap-2 md:gap-8">
                {
                    questionData.map((question) => (
                        (question.type === currentButton) && (
                            question.data.map((questions) => (
                                <div className="grid md:grid-cols-[80px_1fr]">
                                    <div className="hidden md:flex faq-item mt-2 items-center justify-center linear-border-top-left">
                                        <svg
                                            width={32}
                                            height={32}
                                            viewBox="0 0 32 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`${firstpage ? "text-[#D4FC34]" : "text-black"}`}
                                        >
                                            <path
                                                d="M11.2499 16.7918L7.29152 20.7502L11.2499 24.7085L15.2082 20.7502L11.2499 16.7918ZM20.7499 0.958496C18.1525 0.958538 15.6512 1.94068 13.7477 3.70792C11.8442 5.47515 10.6793 7.89676 10.4867 10.487C8.52161 10.6331 6.63977 11.3402 5.06479 12.5244C3.48981 13.7086 2.2879 15.3201 1.60187 17.1673C0.915838 19.0145 0.774533 21.0199 1.19474 22.945C1.61495 24.8702 2.57901 26.6343 3.97237 28.0276C5.36573 29.421 7.1298 30.3851 9.05497 30.8053C10.9802 31.2255 12.9855 31.0842 14.8327 30.3981C16.6799 29.7121 18.2914 28.5102 19.4756 26.9352C20.6598 25.3602 21.3669 23.4784 21.513 21.5133C24.1687 21.3153 26.6442 20.0956 28.4193 18.1105C30.1945 16.1254 31.131 13.5295 31.0322 10.8683C30.9334 8.20712 29.8069 5.68783 27.8895 3.83985C25.972 1.99186 23.4129 0.959069 20.7499 0.958496ZM21.2613 18.3577C20.8177 16.5086 19.8713 14.8181 18.5266 13.4734C17.1819 12.1288 15.4915 11.1823 13.6423 10.7387C13.7405 9.37674 14.228 8.07165 15.0468 6.97884C15.8657 5.88603 16.9813 5.05154 18.2608 4.5747C19.5404 4.09787 20.9301 3.99879 22.2644 4.28925C23.5987 4.57971 24.8214 5.24748 25.787 6.21306C26.7525 7.17864 27.4203 8.40136 27.7108 9.73565C28.0012 11.0699 27.9021 12.4596 27.4253 13.7392C26.9485 15.0188 26.114 16.1344 25.0212 16.9532C23.9284 17.772 22.6233 18.2595 21.2613 18.3577ZM18.3749 20.7502C18.3749 22.6398 17.6242 24.4521 16.288 25.7883C14.9518 27.1245 13.1395 27.8752 11.2499 27.8752C9.36019 27.8752 7.54792 27.1245 6.21172 25.7883C4.87552 24.4521 4.12486 22.6398 4.12486 20.7502C4.12486 18.8605 4.87552 17.0482 6.21172 15.712C7.54792 14.3758 9.36019 13.6252 11.2499 13.6252C13.1395 13.6252 14.9518 14.3758 16.288 15.712C17.6242 17.0482 18.3749 18.8605 18.3749 20.7502ZM1.74986 8.0835C1.74986 6.40379 2.41711 4.79288 3.60485 3.60515C4.79258 2.41742 6.40348 1.75016 8.08319 1.75016H10.4582V4.91683H8.08319C7.24334 4.91683 6.43788 5.25046 5.84402 5.84432C5.25015 6.43819 4.91652 7.24364 4.91652 8.0835V10.4585H1.74986V8.0835ZM27.0832 23.9168V21.5418H30.2499V23.9168C30.2499 25.5965 29.5826 27.2074 28.3949 28.3952C27.2071 29.5829 25.5962 30.2502 23.9165 30.2502H21.5415V27.0835H23.9165C24.7564 27.0835 25.5618 26.7499 26.1557 26.156C26.7496 25.5621 27.0832 24.7567 27.0832 23.9168Z"
                                                fill="currentColor"
                                                fillOpacity="0.62"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col text-left faq-content px-8 py-4 gap-4 relative cursor-pointer" onClick={() => handleClickQuestion(questions.question)}>
                                        {(questions.question === currentQuestion) ? (
                                            <>
                                                <span className={`text-[24px] font-bold ${firstpage ? 'text-yellow' : 'text-[#1A1A1A]'} tracking-[-0.8px] linear-border-top-left`}>
                                                    {questions.question}
                                                </span>
                                                <div className="flex flex-col pb-12 pr-4">
                                                    <span className={`text-[15px] md:text-[18px] ${firstpage ? 'text-[#FFFFFF94]' : 'text-[#00000094]'} font-normal max-w-[580px] md:max-w-[90%] tracking-[-0.8px]`}>
                                                        {questions.answer}
                                                    </span>
                                                </div>
                                            </>
                                        ) : (
                                            <span className={`text-[20px] font-normal ${firstpage ? 'text-[#FFFFFF94]' : 'text-[#000000]'} tracking-[-0.8px] pr-4`}  >
                                                {questions.question}
                                            </span>
                                        )}
                                        {(questions.question === currentQuestion) ? (
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="4 4 27 27"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="absolute right-4 bottom-4 border rounded-full border-[#0000001F] bg-[#FFFFFF0F]"
                                            >
                                                <path
                                                    d="M11.2627 16.2127L17.3271 10.2023L23.3916 16.2127"
                                                    stroke="currentColor"
                                                    strokeOpacity="0.78"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M17.3271 10.5561V25.0518"
                                                    stroke="currentColor"
                                                    strokeOpacity="0.78"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="absolute right-4 bottom-4 border rounded-full border-[#0000001F] bg-[#FFFFFF0F]"
                                            >
                                                <path
                                                    d="M17.25 8.75V17.25H8.75"
                                                    stroke="currentColor"
                                                    strokeOpacity="0.78"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M17 17L6.75 6.75"
                                                    stroke="currentColor"
                                                    strokeOpacity="0.78"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            ))
                        )
                    ))
                }
            </div>
        </div>

    );
}

export default FrequentlyAskedQuestions;