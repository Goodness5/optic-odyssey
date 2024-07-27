import { useState, useEffect } from "react";
import axios from "axios";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  nftContractAddress,
  nftContractABI,
} from "@/abiAndContractSettings";
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'
import { BrowserProvider, Contract, formatUnits, parseUnits } from 'ethers'

    export default function Dashboardhome({displayComponent, setDisplayComponent, changeBg3, changeBg4, changeBg5}) {
        // wallet connect settings
        const { address, chainId, isConnected } = useWeb3ModalAccount()
        const { walletProvider } = useWeb3ModalProvider()
  
      //initialize the AOS library
      useEffect(() => {
        AOS.init();
      }, []) 

         //bytes32 to string conversion
        function bytes32ToString(bytes32) {
          // Remove the '0x' prefix
          let hexString = bytes32.slice(2);
          let str = '';
      
          // Convert each pair of hex digits to a character
          for (let i = 0; i < hexString.length; i += 2) {
              const charCode = parseInt(hexString.slice(i, i + 2), 16);
              if (charCode === 0) break; // Stop at null character
              str += String.fromCharCode(charCode);
          }
      
          return str;
      }

      //read number of collections, items and creators
      const [numberOfPublicCollections, setnumberOfPublicCollections] = useState()
      const [numberOfPublicItems, setnumberOfPublicItems] = useState()
      const [numberOfCreators, setnumberOfCreators] = useState()
      useEffect(() => {
        const getTheData = async() => {
          if(isConnected){
             //read settings first
             const ethersProvider = new BrowserProvider(walletProvider) 
             const nftContractReadSettings = new Contract(nftContractAddress, nftContractABI, ethersProvider)       
           try {
            const allcollectiondetails = await nftContractReadSettings.getAllPublicCollections()
            setnumberOfPublicCollections(allcollectiondetails.length.toString())
            const allitemdetails = await nftContractReadSettings.getAllPublicItems()
            setnumberOfPublicItems(allitemdetails.length.toString())
            const allusersdetails = await nftContractReadSettings.getAllUsers()
            setnumberOfCreators(allusersdetails.length.toString())
          } catch (error) {
            console.log(error)
          }
        }
        }
        getTheData();
      }, [address, isConnected]) 

      //read the collections
      const [getCollections, setgetCollections] = useState([])
      useEffect(() => {
        const getCollectionData = async() => {
          if(isConnected){
             //read settings first
             const ethersProvider = new BrowserProvider(walletProvider) 
             const nftContractReadSettings = new Contract(nftContractAddress, nftContractABI, ethersProvider)       
           try {
            const theCollectionsArray = []
            const allcollectiondetails = await nftContractReadSettings.getAllPublicCollections()
            for (let i = 0; i < allcollectiondetails.length; i++){
              const item = allcollectiondetails[i]
              theCollectionsArray.push(item)
            }
            theCollectionsArray.sort((a, b) => b[4].toString() - a[4].toString())
            setgetCollections(theCollectionsArray.slice(0, 3))
          } catch (error) {
            console.log(error)
          }
        }
        }
        getCollectionData();
      }, [address, isConnected]) 

    //read profiles of creators
   const [allCreators, setallCreators] = useState([])
   useEffect(()=> {
    const getCreators = async() => {
      if(isConnected){
         //read settings first
         const ethersProvider = new BrowserProvider(walletProvider) 
         const nftContractReadSettings = new Contract(nftContractAddress, nftContractABI, ethersProvider)       
       try {
        const creatorsArray = []
        const getcreator = await nftContractReadSettings.getAllUsers()
        for (let i = 0; i < getcreator.length; i++){
          const anyCreator = getcreator[i]
          creatorsArray.push(anyCreator)
        }
        creatorsArray.sort((a, b) => b[4].toString() - a[4].toString())
        setallCreators(creatorsArray.slice(0, 4))
      } catch (error) {
        console.log(error)
      }
    }
    }
    getCreators();
   }, [address, isConnected])
    
    return (
        <div className="lg:p-[0.5cm]">

      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
        <div className="grid-cols-1">
        <div className="lg:text-[280%] md:text-[250%] text-[200%] font-[500]"><img src="images/camera.png" width="80" className="mt-[-0.3cm]" style={{display:"inline-block"}} /> Explore, tokenize and make your art/photos work for you</div>
        <div className="mt-[0.5cm]">
            Turn your art and creativity into NFTs, request for funding, connect with fellow creators and photographers from all over the world.
        </div>
        <div className="mt-[1cm]">
        <button onClick={(e) => {e.preventDefault(); setDisplayComponent("marketplace") & changeBg5(e)}} className="font-[500] text-[#fff] bg-[#00f] px-[0.7cm] py-[0.3cm] rounded-full">Explore</button>
        <span className="ml-[0.2cm]" style={{display:"inline-block"}}>Discover NFTs on Optic Odyssey</span>
        </div>
        <div className="mt-[0.5cm]">
        <button onClick={(e) => {e.preventDefault(); setDisplayComponent("daogovernance") & changeBg3(e)}} className="font-[500] text-[#fff] bg-[#00f] px-[0.7cm] py-[0.3cm] rounded-full">Join DAO</button>
        <span className="ml-[0.2cm]" style={{display:"inline-block"}}>Need funding?</span>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-8 mt-[1cm]">
       <div className="grid-cols-1">
        <div className="text-[150%] font-[500]">1.8 RBTC</div>
        <div className="text-[#aaa]">Funds raised</div>
       </div>
       <div className="grid-cols-1">
        <div className="text-[150%] font-[500]">{numberOfCreators}</div>
        <div className="text-[#aaa]">Creators</div>
       </div>
       <div className="grid-cols-1">
        <div className="text-[150%] font-[500]">{numberOfPublicCollections}</div>
        <div className="text-[#aaa]">Collections</div>
       </div>
       <div className="grid-cols-1">
        <div className="text-[150%] font-[500]">{numberOfPublicItems}</div>
        <div className="text-[#aaa]">NFTs</div>
       </div>
       </div>
        </div>
        <div className="grid-cols-1">
            <img src="images/handface.jpg" className="rounded-2xl lg:w-[80%] lg:float-right" style={{boxShadow:"5px 5px 10px 2px #000"}} />
        </div>
      </div>

      <div className="mt-[2cm]">
        <div>
        <div className="lg:text-[200%] md:text-[180%] text-[150%] font-[500]">Trending Collections <img src="images/nft.png" width="35" style={{display:"inline-block"}} /></div>
        <div className="text-[#aaa]">Checkout our daily updated trending collection on the marketplace.</div>
        </div>
        <div className="mt-[1cm]">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-8">
          {getCollections.map((data) => (
            <div className="grid-cols-1 cursor-pointer" onClick={(e) => {e.preventDefault(); setDisplayComponent("marketplace") & changeBg5(e)}}>
            <div className="rounded-2xl py-[40%]" style={{backgroundImage:`url(https://ipfs.filebase.io/ipfs/${data[3]})`, backgroundSize:"160%", backgroundPositionX:"50%", border:"3px solid #aaa"}}>
              <div className="lg:text-[150%] text-[120%] text-right"><span className="rounded-[110%] p-[0.3cm] bg-[#000] mr-[0.25cm]" style={{border:"2px solid #aaa"}}>+{data[5].length.toString()}</span></div>
            </div>
            <div className="font-[500] lg:text-[130%] text-[120%] mt-[0.2cm]">{bytes32ToString(data[0])}</div>
           </div>
          ))}
        </div>
        </div>
      </div>

      <div className="mt-[2cm]">
        <div>
        <div className="lg:text-[200%] md:text-[180%] text-[150%] font-[500]">Top Creators <img src="images/photographer.png" width="30" className="mt-[-0.3cm]" style={{display:"inline-block"}} /> <img src="images/art-and-design.png" width="26" className="mt-[-0.3cm] ml-[0.2cm]" style={{display:"inline-block"}} /></div>
        <div className="text-[#aaa]">Take a look at the NFT Marketplace's top creators.</div>
        </div>
        <div className="mt-[1cm]">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
              {allCreators.map((data) => (
            <div className="grid-cols-1 rounded-2xl bg-[#000] cursor-pointer" onClick={(e) => {e.preventDefault(); setDisplayComponent("creators") & changeBg4(e)}}>
            <img src={data[1]} className="rounded-t-2xl w-[100%]" />
            <div className="mt-[0.2cm] p-[0.5cm]">
            <div className="lg:text-[150%] text-[120%] font-[500] overflow-auto">{bytes32ToString(data[0])}</div>
            <div className="text-[#aaa]">Total sales: {parseFloat(data[3].toString() * 10 **-18).toFixed(6)} RBTC</div>
            </div>
            </div>
              ))}
            </div>
        </div>
      </div>


      <div className="mt-[2cm]">
        <div>
        <div className="lg:text-[200%] md:text-[180%] text-[150%] font-[500]">Browse Categories <img src="images/folder.png" width="30" className="mt-[-0.1cm]" style={{display:"inline-block"}} /></div>
        <div className="text-[#aaa]">Have a sneak peek at some of the categories on Optic Odyssey.</div>
        </div>
        <div className="mt-[1cm]">
            <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-4">
                <div className="grid-cols-1 cursor-pointer rounded-2xl bg-[#001]" onClick={(e) => {e.preventDefault(); setDisplayComponent("marketplace") & changeBg5(e)}}>
                <img src="images/art.jpg" className="rounded-t-2xl w-[100%]" />
                <div className="mt-[0.2cm] p-[0.5cm]">
                <div className="text-[150%] font-[500]">Art</div>
                </div>
                </div>
                <div className="grid-cols-1 cursor-pointer rounded-2xl bg-[#001]" onClick={(e) => {e.preventDefault(); setDisplayComponent("marketplace") & changeBg5(e)}}>
                <img src="images/lifestylebg.jpg" className="rounded-t-2xl w-[100%]" />
                <div className="mt-[0.2cm] p-[0.5cm]">
                <div className="text-[150%] font-[500]">Lifestyle</div>
                </div>
                </div>
                <div className="grid-cols-1 cursor-pointer rounded-2xl bg-[#001]" onClick={(e) => {e.preventDefault(); setDisplayComponent("marketplace") & changeBg5(e)}}>
                <img src="images/portrait.jpg" className="rounded-t-2xl w-[100%]" />
                <div className="mt-[0.2cm] p-[0.5cm]">
                <div className="text-[150%] font-[500]">Portrait</div>
                </div>
                </div>
                <div className="grid-cols-1 cursor-pointer rounded-2xl bg-[#001]" onClick={(e) => {e.preventDefault(); setDisplayComponent("marketplace") & changeBg5(e)}}>
                <img src="images/fashionbg.jpg" className="rounded-t-2xl w-[100%]" />
                <div className="mt-[0.2cm] p-[0.5cm]">
                <div className="text-[150%] font-[500]">Fashion</div>
                </div>
                </div>
            </div>
        </div>
      </div>

      <div className="mt-[2cm]">
        <div>
        <div className="lg:text-[200%] md:text-[180%] text-[150%] font-[500]">Discover the Optic Odyssey DAO <img src="images/hubdao.png" width="30" className="mt-[-0.1cm]" style={{display:"inline-block"}} /></div>
        <div className="text-[#aaa]">Using the DAO as a powerful tool, participate in governance.</div>
        </div>
        <div className="mt-[1cm]">
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4">
                <div className="grid-cols-1 rounded-2xl bg-[#000]">
                <img src="images/funds.jpg" className="rounded-t-2xl w-[100%]" />
                <div className="mt-[0.2cm] p-[0.5cm] pt-[0.2cm]">
                <div>
                 <div onClick={(e) => {e.preventDefault(); setDisplayComponent("daogovernance") & changeBg3(e)}} className="px-[0.4cm] py-[0.15cm] bg-[#00f] cursor-pointer rounded-md font-[500]" style={{display:"inline-block"}}>Request for Funding</div>
                 <div className="mt-[0.2cm] text-[#aaa]">
                    Photographers and creators in need of financial support to push their brands can use the DAO as a tool to request for funds.
                    When you request for funds, clearly state your reasons for requesting, voting will be done and wait for approval of your request. 
                 </div>
                </div>
                </div>
                </div>
                <div className="grid-cols-1 rounded-2xl bg-[#000]">
                <img src="images/create.jpg" className="rounded-t-2xl w-[100%]" />
                <div className="mt-[0.2cm] p-[0.5cm] pt-[0.2cm]">
                <div>
                 <div onClick={(e) => {e.preventDefault(); setDisplayComponent("daogovernance") & changeBg3(e)}} className="px-[0.4cm] py-[0.15cm] bg-[#00f] rounded-md font-[500] cursor-pointer" style={{display:"inline-block"}}>Create a Proposal</div>
                 <div className="mt-[0.2cm] text-[#aaa]">
                   Proposals can be created on the DAO of Optic Odyssey to determine the next direction of the ecosystem. Typically, proposals can be created by any member of 
                   the DAO, then voting follows after. A proposal that gathers 60% of upvotes from active users is most likely to be implemented and executed.
                 </div>
                </div>
                </div>
                </div>
                <div className="grid-cols-1 rounded-2xl bg-[#000]">
                <img src="images/vote.jpg" className="rounded-t-2xl w-[100%]" />
                <div className="mt-[0.2cm] p-[0.5cm] pt-[0.2cm]">
                <div>
                 <div onClick={(e) => {e.preventDefault(); setDisplayComponent("daogovernance") & changeBg3(e)}} className="px-[0.4cm] py-[0.15cm] bg-[#00f] cursor-pointer rounded-md font-[500]" style={{display:"inline-block"}}>Vote for a Proposal</div>
                 <div className="mt-[0.2cm] text-[#aaa]">
                   Votes are being done on proposals to ensure fairness in the ecosystem. A member can upvote or downvote a proposal. When a proposal gains 60% upvotes, it is most likely to 
                   be implemented and executed thereafter. But when a proposal gets 20% downvotes, it will not be implemented. 
                 </div>
                </div>
                </div>
                </div>
            </div>
        </div>
      </div>

      <div className="mt-[2cm] p-[1cm] pb-[3cm] howdiv" style={{backgroundImage:"url(/images/canon2.jpg)"}}>
        <div>
        <div className="lg:text-[200%] md:text-[180%] text-[150%] font-[500]">How it Works <img src="images/settings.png" width="30" className="mt-[-0.1cm]" style={{display:"inline-block"}} /></div>
        <div className="text-[#aaa]">Discover the starting point.</div>
        </div>
        <div className="mt-[1cm]">
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4">
                <div className="grid-cols-1 rounded-2xl bg-[#002]">
                <img src="images/wallet.png" width="130" className="mx-[auto] pt-[1cm]" />
                <div className="p-[0.5cm]">
                 <div className="text-center text-[120%] font-[500]">Connect wallet</div>
                 <div className="mt-[0.2cm] text-[#aaa]">
                 To access Optic Odyssey, connect wallet first by clicking on the "Connect Wallet" button on the upper right of the screen and choose your login method either with wallet or email. 
                 If you don't have a wallet installed already, the wallet connect window has links to download a wallet of your choice on your device's browser 
                 (Brave browser, Google Chrome, Opera browser, or Yandex browser all work fine).
                 </div>
                </div>
                </div>
                <div className="grid-cols-1 rounded-2xl bg-[#002]">
                <img src="images/nft.png" width="130" className="mx-[auto] pt-[1cm]" />
                <div className="p-[0.5cm]">
                 <div className="text-center text-[120%] font-[500]">NFT marketplace</div>
                 <div className="mt-[0.2cm] text-[#aaa]">
                   The NFT marketplace is where all photos tokenized on Optic Odyssey are being sold. You can fix a price for your NFTs or set them up for bidding. Highest bidder 
                   can then buy the NFT. Defaulters of the marketplace will be penalized. Listing an NFT on the marketplace is free and only the buyer pays for transaction fees. These 
                   transaction fees will be used to fund photographers/creators seeking for funding.
                 </div>
                </div>
                </div>
                <div className="grid-cols-1 rounded-2xl bg-[#002]">
                <img src="images/dao.png" width="130" className="mx-[auto] pt-[1cm]" />
                <div className="p-[0.5cm]">
                 <div className="text-center text-[120%] font-[500]">DAO membership</div>
                 <div className="mt-[0.2cm] text-[#aaa]">
                    All photographers and creators have an option to join the Optic Odyssey DAO. By becoming a member of the DAO, you are able to request for funds and make governance decisions and vote in the DAO.
                 </div>
                </div>
                </div>
            </div>
        </div>
      </div>

        </div>
    )
}