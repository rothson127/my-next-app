// config\index.tsx
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

// Get projectId at https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const bscTestnet = {
  id: 97,
  name: 'Smart Chain - Testnet',
  nativeCurrency: { name: 'Smart Chain - Testnet', symbol: 'tBNB', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://bsc-testnet-rpc.publicnode.com/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'BSC',
      url: 'https://testnet.bscscan.com',
      apiUrl: 'https://api.etherscan.io/api',
    },
  },
  testnet: true
}

// Create wagmiConfig
export const config = defaultWagmiConfig({
  projectId, // required
  chains: [sepolia, bscTestnet], // required
  metadata, // required
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  }),
  // enableWalletConnect: true, // Optional - true by default
  // enableInjected: true, // Optional - true by default
  // enableEIP6963: true, // Optional - true by default
  // enableCoinbase: true, // Optional - true by default
})



