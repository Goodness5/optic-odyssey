import { useState, useEffect } from "react";
import DAOgovernance from "./daogovernance";
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'
import { BrowserProvider, Contract, formatUnits, parseUnits } from 'ethers'

export default function OpticodysseydaoSection({displayComponent}) {
      // wallet connect settings
      const { address, chainId, isConnected } = useWeb3ModalAccount()
      const { walletProvider } = useWeb3ModalProvider()

      //loading state
      const [loading, setLoading] = useState()
      
    return (
        <div>
        <div className="font-[500] bg-[#502] px-[0.4cm] py-[0.15cm] rounded-md mb-[0.2cm]" style={{display:"inline-block", boxShadow:"2px 2px 2px 2px #333"}}>DAO Governance</div>
        <div className="text-[#ccc] text-[90%]">Participate in the governance of Optic Odyssey</div>

        <div className="text-right font-[500] mt-[0.5cm]"><span className="cursor-pointer">Help <img src="images/add.png" className="ml-[0.2cm]" width="17" style={{display:"inline-block"}} /></span></div>

          <div className="mt-[0.7cm] bg-[#000] p-[0.5cm] rounded-xl" style={{boxShadow:"2px 2px 2px 2px #333"}}>
            <DAOgovernance />
          </div>

    {loading ? 
     (<div className='bg-[rgba(0,0,0,0.8)] text-[#000] text-center w-[100%] h-[100%] top-0 right-0' style={{position:"fixed", zIndex:"9999"}}>
      <div className='loader mx-[auto] lg:mt-[20%] md:mt-[40%] mt-[50%]'></div>
      </div>) : (<span></span>)  
     }

        </div>
    )
}