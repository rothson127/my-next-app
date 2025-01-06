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
                        Privacy Policy
                    </h1>
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-4 md:gap-8">
                            <span className="text-2xl md:text-3xl font-semibold">
                                1. Introduction
                            </span>
                            <div className="flex flex-col">
                                <span className="text-gray font-medium">
                                    Welcome to Remittix. We are dedicated to safeguarding your privacy and
                                    handling your data with transparency. This Privacy Policy outlines how
                                    Remittix ("we," "us," or "our") collects, uses, and protects personal
                                    information from users of our services through https://remittix.io
                                    (the "Platform"). This policy does not cover third-party platforms
                                    that may be linked to our website but are not operated by us.
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 md:gap-8">
                            <span className="text-2xl md:text-3xl font-semibold">
                                2. Acceptance of Terms
                            </span>
                            <div className="flex flex-col">
                                <span className="text-gray font-medium">
                                    By using https://remittix.io, you confirm that you have read,
                                    understood, and agreed to this Privacy Policy. We reserve the right to
                                    modify this policy at any time, with the most current version's
                                    effective date available at the top of this document. Your continued
                                    use of the Platform after any changes implies acceptance of the
                                    updated Privacy Policy.
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 md:gap-8">
                            <span className="text-2xl md:text-3xl font-semibold">3. Definitions</span>
                            <div className="flex flex-col">
                                <ul className="text-gray font-medium list-disc px-6">
                                    <li>
                                        Profile: A unique set of data and preferences for an individual’s
                                        interaction with our services.
                                    </li>
                                    <li>
                                        Our Team ("We", "Us", "Our"):** Refers to Remittix, the entity
                                        responsible for providing the services described in this Privacy
                                        Policy.
                                    </li>
                                    <li>
                                        Web Cookies: Files placed on your device to collect standard log
                                        information and visitor behavior anonymously.
                                    </li>
                                    <li>
                                        Equipment: Any device used to access and interact with our services,
                                        such as computers, smartphones, or tablets.
                                    </li>
                                    <li>
                                        Personal Information: Any data related to a person that can uniquely
                                        identify or contact them.
                                    </li>
                                    <li>
                                        Service Providers: Third-party entities employed by Remittix to
                                        facilitate or analyze services on our behalf.
                                    </li>
                                    <li>
                                        Engagement Data: Information collected automatically, such as time
                                        spent on a page within our platform.
                                    </li>
                                    <li>
                                        Platform: The services offered by Remittix Network, accessible via
                                        https://remittix.io.
                                    </li>
                                    <li>User: Any individual or entity using our services.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 md:gap-8">
                            <span className="text-2xl md:text-3xl font-semibold">
                                4. Types of Information Collected
                            </span>
                            <div className="flex flex-col">
                                <span className="text-gray font-medium">
                                    Remittix collects different types of data to provide a personalized
                                    experience:
                                </span>
                                <ul className="text-gray font-medium list-disc px-6">
                                    <li>
                                        Financial Information:Includes cryptocurrency wallet addresses,
                                        banking details, and transaction records to facilitate services.
                                    </li>
                                    <li>
                                        Device and Technical Information: Such as your IP address, browser
                                        type, and operating system to improve service compatibility.
                                    </li>
                                    <li>
                                        Cookies and Tracking Data: Used to offer a customized browsing
                                        experience. Refer to our Cookies Policy for more details.
                                    </li>
                                    <li>
                                        Engagement and Usage Data: Includes IP address, browser details,
                                        pages visited, and diagnostic data.
                                    </li>
                                    <li>
                                        Communications Data: Collected from interactions with our support
                                        team, including inquiries and feedback.
                                    </li>
                                    <li>
                                        Personal Information: Such as your name and email address, collected
                                        when you contact us for service-related purposes.
                                    </li>
                                </ul>
                            </div>
                            <span className="text-gray font-medium">
                                By using our services, you consent to the collection of this information
                                as described.
                            </span>
                        </div>
                        <div className="flex flex-col gap-4 md:gap-8">
                            <span className="text-2xl md:text-3xl font-semibold">
                                5. Collection and Use of Personal Information
                            </span>
                            <div className="flex flex-col">
                                <span className="text-gray font-medium">
                                    When you contact us, we may request personal information, such as your
                                    name, email, and engagement data. This data is only collected when you
                                    reach out for support related to transactions, purchases, token
                                    claims, or staking activities.
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 md:gap-8">
                            <span className="text-2xl md:text-3xl font-semibold">
                                6. Use of Collected Information
                            </span>
                            <div className="flex flex-col">
                                <span className="text-gray font-medium">
                                    We retain your information to fulfill the purposes for which it was
                                    collected or as required by law. We use your data for:
                                </span>
                                <ul className="text-gray font-medium list-disc px-6">
                                    <li>
                                        Service Provision: To provide and improve our cryptocurrency
                                        services.
                                    </li>
                                    <li>
                                        Customer Engagement: To respond to inquiries and provide customer
                                        support.
                                    </li>
                                    <li>
                                        Data Analytics: To analyze user behavior and improve the platform,
                                        using tools like Google Analytics and AWS.
                                    </li>
                                    <li>
                                        Regulatory Compliance: To meet legal requirements, such as
                                        anti-money laundering regulations.
                                    </li>
                                    <li>
                                        Security and Verification: To protect your identity and our services
                                        from unauthorized access and fraud.
                                    </li>
                                </ul>
                            </div>
                            <span className="text-gray font-medium">
                                By using our services, you agree to the use of your data for these
                                purposes.
                            </span>
                        </div>
                        <div className="flex flex-col gap-4 md:gap-8">
                            <span className="text-2xl md:text-3xl font-semibold">
                                7. Transfer of Personal Information
                            </span>
                            <div className="flex flex-col">
                                <span className="text-gray font-medium">
                                    We process your personal information at Remittix offices and other
                                    locations where our processing partners operate. While we do not sell
                                    your data, it may be transferred to servers outside our jurisdiction
                                    under certain circumstances. We take all necessary precautions to
                                    protect your data during such transfers. By submitting your
                                    information, you consent to these practices.
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 md:gap-8">
                            <span className="text-2xl md:text-3xl font-semibold">
                                8. Disclosure of Personal Information
                            </span>
                            <div className="flex flex-col">
                                <span className="text-gray font-medium">
                                    We may share your information under the following circumstances:
                                </span>
                                <ul className="text-gray font-medium list-disc px-6">
                                    <li>
                                        Corporate Transactions:If Remittix is involved in a merger or sale,
                                        your data may be transferred as part of the transaction.
                                    </li>
                                    <li>
                                        Legal and Regulatory Compliance: We may disclose your data to comply
                                        with legal obligations or law enforcement requests.
                                    </li>
                                    <li>
                                        Protection of Rights and Safety: If necessary, we may share your
                                        data to protect Remittix, our users, or the public from harm.
                                    </li>
                                </ul>
                            </div>
                            <span className="text-gray font-medium">
                                We ensure that any data sharing complies with applicable laws and
                                protective measures.
                            </span>
                        </div>
                        <div className="flex flex-col gap-4 md:gap-8">
                            <span className="text-2xl md:text-3xl font-semibold">
                                9. Data Security
                            </span>
                            <div className="flex flex-col">
                                <span className="text-gray font-medium">
                                    We take security seriously and implement industry-standard measures to
                                    protect your data. While we strive to secure your information, no
                                    method of transmission over the internet is completely secure. We
                                    encourage you to take steps to protect your data when sharing it
                                    online.
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 md:gap-8">
                            <span className="text-2xl md:text-3xl font-semibold">
                                10. Your Data Rights and Choices
                            </span>
                            <div className="flex flex-col">
                                <span className="text-gray font-medium">
                                    You have control over your data and can:
                                </span>
                                <ul className="text-gray font-medium list-disc px-6">
                                    <li>
                                        Access and Update: Request access to your data or ask for
                                        corrections.
                                    </li>
                                    <li>
                                        Deletion: Request deletion of your personal data, subject to legal
                                        retention needs.
                                    </li>
                                    <li>
                                        Restrict Data Provision: Limit the personal information you provide,
                                        though this may affect your ability to use certain services.
                                    </li>
                                </ul>
                            </div>
                            <span className="text-gray font-medium">
                                If you have questions about your data or wish to exercise your rights,
                                contact us at support@remittix.io
                            </span>
                        </div>
                        <div className="flex flex-col gap-4 md:gap-8">
                            <span className="text-2xl md:text-3xl font-semibold">
                                11. Children's Privacy
                            </span>
                            <div className="flex flex-col">
                                <span className="text-gray font-medium">
                                    We do not knowingly collect information from children under 18. If you
                                    suspect your child has shared personal information with us, please
                                    contact us at support@remittix.io. We will promptly remove any such
                                    data in compliance with the law.
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 md:gap-8">
                            <span className="text-2xl md:text-3xl font-semibold">
                                12. Third-Party Website Links
                            </span>
                            <div className="flex flex-col">
                                <span className="text-gray font-medium">
                                    Our platform may contain links to external websites. These third-party
                                    sites operate independently, and we encourage you to review their
                                    privacy policies before using their services. Remittix is not
                                    responsible for the content or privacy practices of these external
                                    sites.
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 md:gap-8">
                            <span className="text-2xl md:text-3xl font-semibold">
                                13. Privacy Policy Updates
                            </span>
                            <div className="flex flex-col">
                                <span className="text-gray font-medium">
                                    Remittix may update this Privacy Policy to reflect changes in our
                                    practices or legal requirements. The "Last Updated" date at the top of
                                    this document indicates the most recent revision. We recommend
                                    periodically reviewing this policy. Your continued use of our services
                                    implies your agreement with any updates.
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 md:gap-8">
                            <span className="text-2xl md:text-3xl font-semibold">14. Contact Us</span>
                            <div className="flex flex-col">
                                <span className="text-gray font-medium">
                                    If you have any questions or concerns regarding this Privacy Policy,
                                    please contact us at support@remittix.io. We are committed to
                                    addressing your inquiries promptly and thoroughly.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}