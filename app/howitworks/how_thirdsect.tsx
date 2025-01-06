'use client';

import FrequentlyAskedQuestions from "../components/frequentlyaskedquestions";

export default function HowThirdsect() {
    return (
        <main className="howitworks flex flex-col items-center justify-center pb-20 z-10 bg-[#F0F0F5] text-[#15202A]">
            <div className="bg-faq p-4 md:p-20 pt-[72px] md:pt-[130px] md:!-mt-10 z-20">
                <FrequentlyAskedQuestions firstpage={false} />
            </div>
        </main>
    );
}