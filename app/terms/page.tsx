import MarqueeBar from "../marqueebar";
import NavBar from "../navbar";
import Footer from "../footer";

export default async function Page() {
    return (
        <div>
            <MarqueeBar />
            <NavBar />

            <div className="relative z-30">

                <div className="flex flex-col gap-8 md:gap-16 relative z-10 px-4 md:px-12 py-20 md:mt-20 mx-auto max-w-[943px]">
                    <h1 className="text-3xl md:text-5xl font-bold text-yellow text-center">
                        Terms of Service
                    </h1>
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-2 md:gap-8">
                            <span className="text-2xl md:text-3xl font-semibold">Terms of Use</span>
                            <span className="text-gray font-medium">
                                These “Terms of Use” govern your access to and use of all content,
                                products, and services provided on the website (referred to as the
                                "Service") operated by Remittix ("we," "us," or "our"). By accessing and
                                using our services, you agree to comply with these terms, which apply
                                without modification. These terms also incorporate all other operating
                                rules and policies we may publish from time to time. Please read this
                                agreement carefully before using the services. By using any part of our
                                services, you agree to these terms. If you do not agree to any part of
                                the agreement, you may not access or use our services.
                            </span>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-8">
                            <span className="text-2xl md:text-3xl font-semibold">Copyright</span>
                            <span className="text-gray font-medium">
                                We at Remittix reserve all copyright over the text and images on our
                                platform. These materials may not be copied, reproduced, or distributed
                                without our express written permission. In cases where use is approved,
                                the source must be credited as Remittix, and this attribution must
                                appear in all forms of distribution.
                            </span>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-8">
                            <span className="text-2xl md:text-3xl font-semibold">
                                E-mail Communication
                            </span>
                            <span className="text-gray font-medium">
                                You may choose to communicate with us via email, but please be aware
                                that email is not always a secure form of communication. By sending
                                unencrypted confidential or sensitive emails, you accept the risk that
                                your message may be intercepted, and the privacy of your information may
                                be compromised.
                            </span>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-8">
                            <span className="text-2xl md:text-3xl font-semibold">No Warranty</span>
                            <span className="text-gray font-medium">
                                The information provided by Remittix is intended as a service or
                                promotion for its users, customers, and others, but it should not be
                                considered legal advice. Although we strive to provide accurate and
                                up-to-date information, Remittix does not guarantee the accuracy,
                                completeness, or reliability of this information. It is provided "as
                                is," without any express or implied warranties, including but not
                                limited to warranties of merchantability or fitness for a particular
                                purpose.
                            </span>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-8">
                            <span className="text-2xl md:text-3xl font-semibold">No Liability</span>
                            <span className="text-gray font-medium">
                                Remittix is not liable for any direct, indirect, incidental, or
                                consequential damages arising from your use of the information contained
                                in our newsletters or services. Any reliance on such information is at
                                your own risk.
                            </span>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-8">
                            <span className="text-2xl md:text-3xl font-semibold">
                                Changes to Information
                            </span>
                            <span className="text-gray font-medium">
                                We reserve the right to modify this information at any time without
                                notice. We are not obligated to update the information presented in our
                                newsletters or on our platform.
                            </span>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-8">
                            <span className="text-2xl md:text-3xl font-semibold">
                                Intellectual Property
                            </span>
                            <span className="text-gray font-medium">
                                This agreement does not transfer any of our or third-party intellectual
                                property to you. All rights, titles, and interests in such property
                                remain with Remittix or its licensors. You may not use, reproduce, or
                                distribute any intellectual property belonging to us or third parties
                                without express permission.
                            </span>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-8">
                            <span className="text-2xl md:text-3xl font-semibold">
                                Third-Party Services
                            </span>
                            <span className="text-gray font-medium">
                                While using our services, you may engage with third-party services,
                                products, or software ("Third-Party Services"). Use of these services is
                                at your own risk, and Remittix is not responsible for the performance,
                                content, or security of any third-party services or websites. We
                                disclaim all responsibility for any damage or loss caused by your use of
                                third-party services.
                            </span>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-8">
                            <span className="text-2xl md:text-3xl font-semibold">Accounts</span>
                            <span className="text-gray font-medium">
                                If you are required to create an account to use any part of our
                                services, you must provide accurate, complete information during
                                registration. You are responsible for maintaining the security of your
                                account, including keeping your password safe. You must notify us
                                immediately if you suspect unauthorized use of your account or any
                                security breaches. Any activity occurring under your account is your
                                responsibility.
                            </span>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-8">
                            <span className="text-2xl md:text-3xl font-semibold">Termination</span>
                            <span className="text-gray font-medium">
                                We reserve the right to suspend or terminate your access to our
                                services, in whole or part, at any time, with or without cause, and
                                without prior notice. If you wish to terminate your account or this
                                agreement, you may simply discontinue using our services. Certain
                                provisions of this agreement, such as ownership rights, warranty
                                disclaimers, indemnity, and limitations of liability, will survive
                                termination.
                            </span>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-8">
                            <span className="text-2xl md:text-3xl font-semibold">Disclaimer</span>
                            <span className="text-gray font-medium">
                                Our services are provided on an "as is" and "as available" basis.
                                Remittix and its suppliers make no warranties, express or implied,
                                regarding the performance, availability, or uninterrupted access to our
                                services. You use the services at your own risk, and we disclaim any
                                liability for errors or interruptions in the service.
                            </span>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-8">
                            <span className="text-2xl md:text-3xl font-semibold">
                                Changes to Terms
                            </span>
                            <span className="text-gray font-medium">
                                We reserve the right to update or modify these terms at our discretion.
                                If any significant changes are made, we will notify you by posting the
                                revised terms on our website or through email. Such changes will take
                                effect after a designated period. If you do not agree with the updated
                                terms, you should stop using our services. Continued use of our services
                                will constitute acceptance of the new terms.
                            </span>
                        </div>
                        <span className="text-gray font-medium">
                            For further inquiries, please contact us at support@remittix.io
                        </span>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
}