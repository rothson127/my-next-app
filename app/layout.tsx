import type { Metadata } from "next";
// import {NextIntlClientProvider} from 'next-intl';
import { Geist, Geist_Mono, Onest } from "next/font/google";
import WagmiProviderComp from './context';
import { config } from './config';

import { getMessages } from 'next-intl/server';
import { headers } from 'next/headers';


import { cookieToInitialState } from "wagmi";


import "./globals.css";

const onest = Onest({
  subsets: ['latin'], // Specify subsets if needed
  display: 'swap', // Optional: controls how the font is displayed while loading
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Remittix | Crypto-to-Fiat Network - PayFi",
  description: "Remittix aims to revolutionize cross-border payments with faster and lower transaction fees. Join the revolution and pay with crypto for anything, anywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'));


  return (
    <html lang="en" className={onest.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <NextIntlClientProvider messages={messages}> */}
        {/* <NextIntlClientProvider> */}
        <WagmiProviderComp initialState={initialState}>
          {children}
        </WagmiProviderComp>
        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
}
