import '@/styles/globals.css'
import { Web3Modal } from '@/context/web3modal';
export const metadata = {
  title: 'Optic Odyssey',
  description: 'Explore, discover NFTs and make your photos work for you on Rootstock'
}

export default function App({ Component, pageProps }) {
  return  <Web3Modal> <Component {...pageProps} /> </Web3Modal>
}
