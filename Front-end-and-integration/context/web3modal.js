import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '4ae4f912d4e7629aeeccff8fb3804be4'

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}
 
const ScrollSepolia = {
  chainId: 534351,
  name: 'Scroll Sepolia',
  currency: 'ETH',
  explorerUrl: 'https://sepolia.scrollscan.com/',
  rpcUrl: 'https://scroll-sepolia.blockpi.network/v1/rpc/public'
}

// 3. Create a metadata object
const metadata = {
  name: 'Optic Odyssey',
  description: 'Explore, make your photos work for you',
  url: 'localhost:3000', // origin must match your domain & subdomain
  icons: ['https://ipfs.filebase.io/ipfs/QmQ28C6VWrE4hLerUQLjEBE7Uei22gbuedTXBhSEmEEYzH']
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: false, // true by default
  rpcUrl: '...', // used for the Coinbase SDK
  defaultChainId: 1, // used for the Coinbase SDK
  enableEmail: true
})

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [mainnet, ScrollSepolia],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
  themeVariables: {
    '--w3m-z-index': 9999,
    '--w3m-accent': '#00f'
  },
  defaultChain: mainnet,
  chainImages: {
    4202: 'https://ipfs.filebase.io/ipfs/QmVNJLurFEfHTDFTsnpErDJ8z7trj6t7woMVoTDwwX72Li'
  }
})

export function Web3Modal({ children }) {
  return children
}


