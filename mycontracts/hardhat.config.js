require("@nomicfoundation/hardhat-toolbox");

// Ensure your configuration variables are set before executing the script
const { vars } = require("hardhat/config");

// Go to https://infura.io, sign up, create a new API key
// in its dashboard, and add it to the configuration variables
const INFURA_API_KEY = vars.get("INFURA_API_KEY");

// Add your Sepolia account private key to the configuration variables
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const SEPOLIA_PRIVATE_KEY = vars.get("SEPOLIA_PRIVATE_KEY");

module.exports = {
  solidity: "0.8.28",
  networks: {
    bsctestnet: {
//      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
//      accounts: [SEPOLIA_PRIVATE_KEY],
      url: 'https://bsc-testnet.infura.io/v3/8fe53a5d51b041049463d2becc11dcfb',
      accounts: ['89e26d8b6e9d792c529e085765d63847322808f8c47df6227549844dae667fca'],
      //accounts: ['12f51d7c23c18511d17b299a3993ebe327877dfb62787a32d57b99627879e7b0'],
    },
    mainnet: {
      url: process.env.MAINNET_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
};
