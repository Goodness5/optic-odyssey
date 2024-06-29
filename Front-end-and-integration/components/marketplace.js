import { useState, useEffect } from "react";
import axios from 'axios';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  nftContractAddress,
  nftContractABI,
} from "@/abiAndContractSettings";
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'
import { BrowserProvider, Contract, formatUnits, parseUnits } from 'ethers'

export default function Marketplace() {
      // wallet connect settings
      const { address, chainId, isConnected } = useWeb3ModalAccount()
      const { walletProvider } = useWeb3ModalProvider()

      //loading state
      const [loading, setLoading] = useState()

    //initialize the AOS library
    useEffect(() => {
      AOS.init();
    }, []) 

  //styling for marketplace here
    const [displayTab, setDisplayTab] = useState("all")
    const [allbg, setallbg] = useState("#00f")
    const [allShadow, setAllShadow] = useState("#fff")
    const [trendingbg, settrendingbg] = useState("#000")
    const [trendingShadow, settrendingShadow] = useState("#333")
    const [cat1bg, setcat1bg] = useState("#000")
    const [cat1Shadow, setCat1Shadow] = useState("#333")
    const [cat2bg, setcat2bg] = useState("#000")
    const [cat2Shadow, setCat2Shadow] = useState("#333")
    const [cat3bg, setcat3bg] = useState("#000")
    const [cat3Shadow, setCat3Shadow] = useState("#333")
    const [cat4bg, setcat4bg] = useState("#000")
    const [cat4Shadow, setCat4Shadow] = useState("#333")
    const [cat5bg, setcat5bg] = useState("#000")
    const [cat5Shadow, setCat5Shadow] = useState("#333")

    const showAll = () => {
      setDisplayTab("all")
      setallbg("#00f")
      setAllShadow("#fff")
      settrendingbg("#000")
      settrendingShadow("#333")
      setcat1bg("#000")
      setCat1Shadow("#333")
      setcat2bg("#000")
      setCat2Shadow("#333")
      setcat3bg("#000")
      setCat3Shadow("#333")
      setcat4bg("#000")
      setCat4Shadow("#333")
      setcat5bg("#000")
      setCat5Shadow("#333")
    }

    const showTrending = () => {
      setDisplayTab("trending")
      setallbg("#000")
      setAllShadow("#333")
      settrendingbg("#00f")
      settrendingShadow("#fff")
      setcat1bg("#000")
      setCat1Shadow("#333")
      setcat2bg("#000")
      setCat2Shadow("#333")
      setcat3bg("#000")
      setCat3Shadow("#333")
      setcat4bg("#000")
      setCat4Shadow("#333")
      setcat5bg("#000")
      setCat5Shadow("#333")
    }

    const showCat1 = () => {
      setDisplayTab("cat1")
      setallbg("#000")
      setAllShadow("#333")
      settrendingbg("#000")
      settrendingShadow("#333")
      setcat1bg("#00f")
      setCat1Shadow("#fff")
      setcat2bg("#000")
      setCat2Shadow("#333")
      setcat3bg("#000")
      setCat3Shadow("#333")
      setcat4bg("#000")
      setCat4Shadow("#333")
      setcat5bg("#000")
      setCat5Shadow("#333")
    }

    const showCat2 = () => {
      setDisplayTab("cat2")
      setallbg("#000")
      setAllShadow("#333")
      settrendingbg("#000")
      settrendingShadow("#333")
      setcat1bg("#000")
      setCat1Shadow("#333")
      setcat2bg("#00f")
      setCat2Shadow("#fff")
      setcat3bg("#000")
      setCat3Shadow("#333")
      setcat4bg("#000")
      setCat4Shadow("#333")
      setcat5bg("#000")
      setCat5Shadow("#333")
    }

    const showCat3 = () => {
      setDisplayTab("cat3")
      setallbg("#000")
      setAllShadow("#333")
      settrendingbg("#000")
      settrendingShadow("#333")
      setcat1bg("#000")
      setCat1Shadow("#333")
      setcat2bg("#000")
      setCat2Shadow("#333")
      setcat3bg("#00f")
      setCat3Shadow("#fff")
      setcat4bg("#000")
      setCat4Shadow("#333")
      setcat5bg("#000")
      setCat5Shadow("#333")
    }

    const showCat4 = () => {
      setDisplayTab("cat4")
      setallbg("#000")
      setAllShadow("#333")
      settrendingbg("#000")
      settrendingShadow("#333")
      setcat1bg("#000")
      setCat1Shadow("#333")
      setcat2bg("#000")
      setCat2Shadow("#333")
      setcat3bg("#000")
      setCat3Shadow("#333")
      setcat4bg("#00f")
      setCat4Shadow("#fff")
      setcat5bg("#000")
      setCat5Shadow("#333")
    }

    const showCat5 = () => {
      setDisplayTab("cat5")
      setallbg("#000")
      setAllShadow("#333")
      settrendingbg("#000")
      settrendingShadow("#333")
      setcat1bg("#000")
      setCat1Shadow("#333")
      setcat2bg("#000")
      setCat2Shadow("#333")
      setcat3bg("#000")
      setCat3Shadow("#333")
      setcat4bg("#000")
      setCat4Shadow("#333")
      setcat5bg("#00f")
      setCat5Shadow("#fff")
    }

       //read for all public items
   const [allPublicItems, setallPublicItems] = useState([])
   useEffect(()=> {
    const getAllPublicItems = async() => {
      if(isConnected){
         //read settings first
         const ethersProvider = new BrowserProvider(walletProvider) 
         const nftContractReadSettings = new Contract(nftContractAddress, nftContractABI, ethersProvider)       
       try {
        const getallpublicitems = await nftContractReadSettings.getAllPublicItems()
        setallPublicItems(getallpublicitems)
      } catch (error) {
        console.log(error)
      }
    }
    }
    getAllPublicItems();
   }, [])
    
    return (
        <div>
        <div className="font-[500] bg-[#502] px-[0.4cm] py-[0.15cm] rounded-md mb-[0.2cm]" style={{display:"inline-block", boxShadow:"2px 2px 2px 2px #333"}}>NFT marketplace</div>
        <div className="text-[#ccc] text-[90%]">View collections from photographers around the world</div>
        
        <div className="mt-[1cm]">
        <div className='text-center mt-[0.5cm] '>
        <span className='bg-[#000] text-[#fff] px-[0.5cm] py-[0.2cm] rounded-full' style={{border:"2px solid #00f"}}>
        <form onSubmit={(e) => {e.preventDefault(); handleSearch(searchQuery)}} style={{display:"inline-block"}}>
        <input type="text" placeholder="Search by name or collection..." onChange={(e) => setSearchQuery(e.target.value)} className='bg-[#000] w-[80%] placeholder-[#fff] text-[#fff] text-[90%] outline-none' /><img src="images/search.png" width="20" className='ml-[0.2cm] cursor-pointer' onClick={(e) => {e.preventDefault(); handleSearch(searchQuery)}} style={{display:"inline-block"}}/>
        </form>
        </span>
        </div>
        
        <div className="mt-[1cm]">
          <button onClick={(e) => showAll(e)} className={`bg-[${allbg}] px-[0.4cm] py-[0.15cm] m-[0.2cm] rounded-md`} style={{boxShadow:`2px 2px 2px 2px ${allShadow}`}}>All</button>
          <button onClick={(e) => showTrending(e)} className={`bg-[${trendingbg}] px-[0.4cm] py-[0.15cm] m-[0.2cm] rounded-md`} style={{boxShadow:`2px 2px 2px 2px ${trendingShadow}`}}>Trending</button>
          <button onClick={(e) => showCat1(e)} className={`bg-[${cat1bg}] px-[0.4cm] py-[0.15cm] m-[0.2cm] rounded-md`} style={{boxShadow:`2px 2px 2px 2px ${cat1Shadow}`}}>Art</button>
          <button onClick={(e) => showCat2(e)} className={`bg-[${cat2bg}] px-[0.4cm] py-[0.15cm] m-[0.2cm] rounded-md`} style={{boxShadow:`2px 2px 2px 2px ${cat2Shadow}`}}>Fashion</button>
          <button onClick={(e) => showCat3(e)} className={`bg-[${cat3bg}] px-[0.4cm] py-[0.15cm] m-[0.2cm] rounded-md`} style={{boxShadow:`2px 2px 2px 2px ${cat3Shadow}`}}>Portrait</button>
          <button onClick={(e) => showCat4(e)} className={`bg-[${cat4bg}] px-[0.4cm] py-[0.15cm] m-[0.2cm] rounded-md`} style={{boxShadow:`2px 2px 2px 2px ${cat4Shadow}`}}>Lifestyle</button>
          <button onClick={(e) => showCat5(e)} className={`bg-[${cat5bg}] px-[0.4cm] py-[0.15cm] m-[0.2cm] rounded-md`} style={{boxShadow:`2px 2px 2px 2px ${cat5Shadow}`}}>Photography</button>
        </div>

      {displayTab === "all" && 
       (<div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-[1cm]">
          {allPublicItems.map((data)=> (
          <div className="grid-cols-1 rounded-xl bg-[rgba(0,0,0,0.8)]">
          <img src={data[9]} className="rounded-t-xl" />
          <div className="p-[0.5cm]">
            <div className="text-[120%] font-[500]">{data[7]}</div>
            <div><span>By</span> <span>{data[0].substring(0, 4)}...{data[0].substring(36, 42)} </span> <img src="images/user.png" width="18" style={{display:"inline-block"}} /></div>
            <div className="text-[#aaa] text-[90%] mt-[0.4cm]"><span>Floor</span><span className="float-right">Status</span></div>
            <div className="mt-[0.1cm]"><span>{data[2].toString() * 10 **-18} RBTC</span><span className="float-right">{data[10] === false ? (<span className="text-[#d7b644]">Not yet sold</span>) : (<span className="text-[#090]">Sold</span>)}</span></div>
          </div>
        </div>
          ))}
        </div>
        <div className='mt-[0.5cm]'>
        <button className='generalbutton bg-[#502] rounded-md px-[0.3cm] py-[0.1cm] mx-[0.2cm] text-[#fff]'>
          1
        </button>
        </div> 
       </div>)}

       {displayTab === "trending" && 
       (<div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-[1cm]">
          <div className="grid-cols-1 rounded-xl bg-[rgba(0,0,0,0.8)]">
            <img src="images/art.jpg" className="rounded-t-xl" />
            <div className="p-[0.5cm]">
              <div className="text-[120%] font-[500]">Moments of moments</div>
              <div><span>By</span> <span>Humphreyo</span> <img src="images/user.png" width="18" style={{display:"inline-block"}} /></div>
              <div className="text-[#aaa] text-[90%] mt-[0.4cm]"><span>Floor</span><span className="float-right">All-time volume</span></div>
              <div className="mt-[0.1cm]"><span>0.3 RBTC</span><span className="float-right">2.5 RBTC</span></div>
            </div>
          </div>
          <div className="grid-cols-1 rounded-xl bg-[rgba(0,0,0,0.8)]">
            <img src="images/hubcover.png" className="rounded-t-xl" />
            <div className="p-[0.5cm]">
              <div className="text-[120%] font-[500]">Moments of moments</div>
              <div><span>By</span> <span>Humphreyo</span> <img src="images/user.png" width="18" style={{display:"inline-block"}} /></div>
              <div className="text-[#aaa] text-[90%] mt-[0.4cm]"><span>Floor</span><span className="float-right">All-time volume</span></div>
              <div className="mt-[0.1cm]"><span>0.3 RBTC</span><span className="float-right">2.5 RBTC</span></div>
            </div>
          </div>
          <div className="grid-cols-1 rounded-xl bg-[rgba(0,0,0,0.8)]">
            <img src="images/humphreyo.png" className="rounded-t-xl" />
            <div className="p-[0.5cm]">
              <div className="text-[120%] font-[500]">Moments of moments</div>
              <div><span>By</span> <span>Humphreyo</span> <img src="images/user.png" width="18" style={{display:"inline-block"}} /></div>
              <div className="text-[#aaa] text-[90%] mt-[0.4cm]"><span>Floor</span><span className="float-right">All-time volume</span></div>
              <div className="mt-[0.1cm]"><span>0.3 RBTC</span><span className="float-right">2.5 RBTC</span></div>
            </div>
          </div>
          <div className="grid-cols-1 rounded-xl bg-[rgba(0,0,0,0.8)]">
            <img src="images/thick.jpg" className="rounded-t-xl" />
            <div className="p-[0.5cm]">
              <div className="text-[120%] font-[500]">Moments of moments</div>
              <div><span>By</span> <span>Humphreyo</span> <img src="images/user.png" width="18" style={{display:"inline-block"}} /></div>
              <div className="text-[#aaa] text-[90%] mt-[0.4cm]"><span>Floor</span><span className="float-right">All-time volume</span></div>
              <div className="mt-[0.1cm]"><span>0.3 RBTC</span><span className="float-right">2.5 RBTC</span></div>
            </div>
          </div>
        </div>
        <div className='mt-[0.5cm]'>
        <button className='generalbutton bg-[#502] rounded-md px-[0.3cm] py-[0.1cm] mx-[0.2cm] text-[#fff]'>
          1
        </button>
        </div> 
       </div>)}

        </div>
        </div>
    )
}