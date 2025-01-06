import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";

import { createWallet } from "thirdweb/wallets";

const client = createThirdwebClient({
  clientId: "....",
});

const wallets = [
  createWallet("walletConnect"),
  createWallet("io.metamask"),
  createWallet("com.trustwallet.app"),
];

export default function Web3ModalDlg() {
  return (
    <ConnectButton
      client={client}
      wallets={wallets}
      connectModal={{
        size: "compact",
        title: "Connect Wallet",
        showThirdwebBranding: false,
      }}
    />
  );
}
