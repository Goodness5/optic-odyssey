import '@/styles/globals.css'
import { Web3Modal } from '@/context/web3modal';
import DisableRightClick from '@/components/disablerightclick';
import DisableDrag from '@/components/disabledrag';
export const metadata = {
  title: 'Optic Odyssey',
  description: 'Explore, discover NFTs and make your photos work for you on Rootstock'
}

export default function App({ Component, pageProps }) {
  return  (
         <>
           <Web3Modal>
           {/* <DisableRightClick />
           <DisableDrag />  */}
           <Component {...pageProps} />
           </Web3Modal>
          </>
          )
}
