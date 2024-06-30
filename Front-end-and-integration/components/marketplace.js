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

    //read for all Art category items
   const [allArtItems, setallArtItems] = useState([])
   useEffect(()=> {
    const getAllArtItems = async() => {
      if(isConnected){
         //read settings first
         const ethersProvider = new BrowserProvider(walletProvider) 
         const nftContractReadSettings = new Contract(nftContractAddress, nftContractABI, ethersProvider)       
       try {
        const getallpublicitems = await nftContractReadSettings.getAllPublicItems()
        const getArtItemsArray = []
        for (let i = 0; i < getallpublicitems.length; i++){
          if (getallpublicitems[i][8] === "Art"){
            const getArtCategory = getallpublicitems[i]
            getArtItemsArray.push(getArtCategory)
          }
        }
        getArtItemsArray.sort((a, b) => b[3].toString() - a[3].toString())
        setallArtItems(getArtItemsArray)
      } catch (error) {
        console.log(error)
      }
    }
    }
    getAllArtItems();
   }, [])

       //read for all Fashion category items
       const [allFashionItems, setallFashionItems] = useState([])
       useEffect(()=> {
        const getAllFashionItems = async() => {
          if(isConnected){
             //read settings first
             const ethersProvider = new BrowserProvider(walletProvider) 
             const nftContractReadSettings = new Contract(nftContractAddress, nftContractABI, ethersProvider)       
           try {
            const getallpublicitems = await nftContractReadSettings.getAllPublicItems()
            const getFashionItemsArray = []
            for (let i = 0; i < getallpublicitems.length; i++){
              if (getallpublicitems[i][8] === "Fashion"){
                const getFashionCategory = getallpublicitems[i]
                getArtItemsArray.push(getFashionCategory)
              }
            }
            getFashionItemsArray.sort((a, b) => b[3].toString() - a[3].toString())
            setallFashionItems(getFashionItemsArray)
          } catch (error) {
            console.log(error)
          }
        }
        }
        getAllFashionItems();
       }, [])

        //read for all Portrait category items
       const [allPortraitItems, setallPortraitItems] = useState([])
       useEffect(()=> {
        const getAllPortraitItems = async() => {
          if(isConnected){
             //read settings first
             const ethersProvider = new BrowserProvider(walletProvider) 
             const nftContractReadSettings = new Contract(nftContractAddress, nftContractABI, ethersProvider)       
           try {
            const getallpublicitems = await nftContractReadSettings.getAllPublicItems()
            const getPortraitItemsArray = []
            for (let i = 0; i < getallpublicitems.length; i++){
              if (getallpublicitems[i][8] === "Portrait"){
                const getPortraitCategory = getallpublicitems[i]
                getPortraitItemsArray.push(getPortraitCategory)
              }
            }
            getPortraitItemsArray.sort((a, b) => b[3].toString() - a[3].toString())
            setallPortraitItems(getPortraitItemsArray)
          } catch (error) {
            console.log(error)
          }
        }
        }
        getAllPortraitItems();
       }, [])

        //read for all Lifestyle category items
       const [allLifestyleItems, setallLifestyleItems] = useState([])
       useEffect(()=> {
        const getAllLifestyleItems = async() => {
          if(isConnected){
             //read settings first
             const ethersProvider = new BrowserProvider(walletProvider) 
             const nftContractReadSettings = new Contract(nftContractAddress, nftContractABI, ethersProvider)       
           try {
            const getallpublicitems = await nftContractReadSettings.getAllPublicItems()
            const getLifestyleItemsArray = []
            for (let i = 0; i < getallpublicitems.length; i++){
              if (getallpublicitems[i][8] === "Lifestyle"){
                const getLifestyleCategory = getallpublicitems[i]
                getLifestyleItemsArray.push(getLifestyleCategory)
              }
            }
            getLifestyleItemsArray.sort((a, b) => b[3].toString() - a[3].toString())
            setallLifestyleItems(getLifestyleItemsArray)
          } catch (error) {
            console.log(error)
          }
        }
        }
        getAllLifestyleItems();
       }, [])

      //read for all Photography category items
       const [allPhotographyItems, setallPhotographyItems] = useState([])
       useEffect(()=> {
        const getAllPhotographyItems = async() => {
          if(isConnected){
             //read settings first
             const ethersProvider = new BrowserProvider(walletProvider) 
             const nftContractReadSettings = new Contract(nftContractAddress, nftContractABI, ethersProvider)       
           try {
            const getallpublicitems = await nftContractReadSettings.getAllPublicItems()
            const getPhotographyItemsArray = []
            for (let i = 0; i < getallpublicitems.length; i++){
              if (getallpublicitems[i][8] === "Photography"){
                const getPhotographyCategory = getallpublicitems[i]
                getPhotographyItemsArray.push(getPhotographyCategory)
              }
            }
            getPhotographyItemsArray.sort((a, b) => b[3].toString() - a[3].toString())
            setallPhotographyItems(getPhotographyItemsArray)
          } catch (error) {
            console.log(error)
          }
        }
        }
        getAllPhotographyItems();
       }, [])

    //search NFTs functionality
    const [searchQuery, setSearchQuery] = useState()
    const [searchData, setSearchData] = useState([])
    const handleSearch = async () => {
      if(isConnected){
        setLoading(true)
        setDisplayTab("searchresults")
        setallbg("#000")
        setAllShadow("#333")
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
           //read settings first
          const ethersProvider = new BrowserProvider(walletProvider) 
          const nftContractReadSettings = new Contract(nftContractAddress, nftContractABI, ethersProvider) 
       try {
        const searchDataArray = []
        const getallpublicitems = await nftContractReadSettings.getAllPublicItems();
        for (let i=0; i < getallpublicitems.length; i++){
          const getAnyItem = getallpublicitems[i]
          if (((getAnyItem[0].toString().substring(0, 4)) + "..." + (getAnyItem[0].toString().substring(37, 42)))  === searchQuery || 
          (getAnyItem[0].toString().substring(0, 4)) === searchQuery ||
          (getAnyItem[0].toString().substring(37, 42)) === searchQuery ||
           getAnyItem[7].toString().includes(searchQuery) ||
          (getAnyItem[2].toString() * 10 **-18) == searchQuery.toString()){
            searchDataArray.push(getAnyItem)  
          }
          searchDataArray.sort((a, b) => b[3].toString() - a[3].toString())
          setSearchData(searchDataArray)      
        }
       } catch (error) {
        console.log(error)
        setLoading(false)
       }
       finally {
        setLoading(false)
       }
      }
    }

     //read all items in a collection
  const [chosenCollectionItems, setchosenCollectionItems] = useState([])
  const [collectionTitle, setCollectionTitle] = useState()
    const getItemsData = async(initialCollectionContract) => {
      if(isConnected){
         //read settings first
         const ethersProvider = new BrowserProvider(walletProvider) 
         const nftContractReadSettings = new Contract(nftContractAddress, nftContractABI, ethersProvider)       
       try {
        const allcollectiondetails = await nftContractReadSettings.getAllPublicItems()
        console.log("contract" + initialCollectionContract)
        const chosenCollectionArray = []
        for (let i = 0; i < allcollectiondetails.length; i++){
          if (allcollectiondetails[i][1] === initialCollectionContract){
            const collectionitems = allcollectiondetails[i]
            chosenCollectionArray.push(collectionitems)
          }
        }
        console.log("chosen array" + chosenCollectionArray + "end")
        chosenCollectionArray.sort((a, b) => b[3].toString() - a[3].toString())
        setchosenCollectionItems(chosenCollectionArray)
      } catch (error) {
        console.log(error)
      }
    }
    }

    //read creator of single collection item
   const [theItemCreatorUsername, settheItemCreatorUsername] = useState()
   const getItemCreator = async(itemCreator) => {
     if(isConnected){
        //read settings first
        const ethersProvider = new BrowserProvider(walletProvider) 
        const nftContractReadSettings = new Contract(nftContractAddress, nftContractABI, ethersProvider)       
      try {
       const getitemcreator = await nftContractReadSettings.users(itemCreator)
       const getcreatorusername = getitemcreator.username.toString()
       settheItemCreatorUsername(getcreatorusername)
     } catch (error) {
       console.log(error)
     }
   }
   }

       //read for single collection item
       const [chosenItem, setChosenItem] = useState([])
       const getSingleItemData = async(initialItemID) => {
         if(isConnected){
            //read settings first
            const ethersProvider = new BrowserProvider(walletProvider) 
            const nftContractReadSettings = new Contract(nftContractAddress, nftContractABI, ethersProvider)       
          try {
           const allcollectiondetails = await nftContractReadSettings.getAllPublicItems()
           console.log("id" + initialItemID)
           const chosenItemArray = []
           for (let i = 0; i < allcollectiondetails.length; i++){
            if (allcollectiondetails[i][4] === initialItemID){
              const collectionitem = allcollectiondetails[i]
              chosenItemArray.push(collectionitem)
            }
          }
           setChosenItem(chosenItemArray)
           console.log(chosenItemArray)
         } catch (error) {
           console.log(error)
         }
       }
       }
    
    return (
        <div>
        <div className="font-[500] bg-[#502] px-[0.4cm] py-[0.15cm] rounded-md mb-[0.2cm]" style={{display:"inline-block", boxShadow:"2px 2px 2px 2px #333"}}>NFT marketplace</div>
        <div className="text-[#ccc] text-[90%]">View collections from photographers around the world</div>
        

        <div className="mt-[1cm]">
        <div className='text-center mt-[0.5cm] '>
        <span className='bg-[#000] text-[#fff] px-[0.5cm] py-[0.2cm] rounded-full' style={{border:"2px solid #00f"}}>
        <form onSubmit={(e) => {e.preventDefault(); handleSearch(searchQuery)}} style={{display:"inline-block"}}>
        <input type="text" placeholder="Search by title, creator or price..." onChange={(e) => setSearchQuery(e.target.value)} className='bg-[#000] w-[85%] placeholder-[#fff] text-[#fff] text-[90%] outline-none' /><img src="images/search.png" width="20" className='ml-[0.2cm] cursor-pointer' onClick={(e) => {e.preventDefault(); handleSearch(searchQuery)}} style={{display:"inline-block"}}/>
        </form>
        </span>
        </div>
        
        <div className="mt-[1cm]">
          <button onClick={(e) => showAll(e)} className={`bg-[${allbg}] px-[0.4cm] py-[0.15cm] m-[0.2cm] rounded-md`} style={{boxShadow:`2px 2px 2px 2px ${allShadow}`}}>All</button>
          <button onClick={(e) => showCat1(e)} className={`bg-[${cat1bg}] px-[0.4cm] py-[0.15cm] m-[0.2cm] rounded-md`} style={{boxShadow:`2px 2px 2px 2px ${cat1Shadow}`}}>Art</button>
          <button onClick={(e) => showCat2(e)} className={`bg-[${cat2bg}] px-[0.4cm] py-[0.15cm] m-[0.2cm] rounded-md`} style={{boxShadow:`2px 2px 2px 2px ${cat2Shadow}`}}>Fashion</button>
          <button onClick={(e) => showCat3(e)} className={`bg-[${cat3bg}] px-[0.4cm] py-[0.15cm] m-[0.2cm] rounded-md`} style={{boxShadow:`2px 2px 2px 2px ${cat3Shadow}`}}>Portrait</button>
          <button onClick={(e) => showCat4(e)} className={`bg-[${cat4bg}] px-[0.4cm] py-[0.15cm] m-[0.2cm] rounded-md`} style={{boxShadow:`2px 2px 2px 2px ${cat4Shadow}`}}>Lifestyle</button>
          <button onClick={(e) => showCat5(e)} className={`bg-[${cat5bg}] px-[0.4cm] py-[0.15cm] m-[0.2cm] rounded-md`} style={{boxShadow:`2px 2px 2px 2px ${cat5Shadow}`}}>Photography</button>
        </div>

        <div>
        {(displayTab === "all" && allPublicItems) &&
       <div>
        {allPublicItems.length > 0 ?
       (<div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-[1cm]">
          {allPublicItems.map((data)=> (
          <div className="grid-cols-1 rounded-xl bg-[rgba(0,0,0,0.8)]">
          <img src={data[9]} className="rounded-t-xl" />
          <div className="p-[0.5cm]">
            <div className="text-[120%] font-[500]">{data[7]}</div>
            <div><span>By</span> <span>{data[0].substring(0, 4)}...{data[0].substring(36, 42)} </span> <img src="images/user.png" width="18" style={{display:"inline-block"}} /><span className="float-right px-[0.2cm] py-[0.05cm] rounded-md bg-[#502]" style={{border:"2px solid #d7b644"}}>{data[8]} <img src="images/medal.png" width="18" style={{display:"inline-block"}} /></span></div>
            <div className="text-[#aaa] text-[90%] mt-[0.4cm]"><span>Floor</span><span className="float-right">Status</span></div>
            <div className="mt-[0.1cm]"><span>{data[2].toString() * 10 **-18} RBTC</span><span className="float-right">{data[10] === false ? (<span className="text-[#d7b644]">Not yet sold</span>) : (<span className="text-[#090]">Sold</span>)}</span></div>
            <div><button onClick={(e) => {e.preventDefault(); getItemsData(data[1]) & setCollectionTitle(data[5])}} className='bg-[#502] rounded-md px-[0.2cm] py-[0.05cm] mt-[0.2cm] generalbutton' style={{border:"2px solid #aaa"}}>View collection <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button></div>
            <div><button onClick={(e) => {e.preventDefault(); getItemCreator(data[0]) & getSingleItemData(data[4])}} className='bg-[#002] rounded-md px-[0.2cm] py-[0.05cm] mt-[0.2cm] generalbutton4' style={{border:"2px solid #aaa"}}>View NFT <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button></div>
          </div>
        </div>
          ))}
        </div>
        <div className='mt-[0.5cm]'>
        <button className='generalbutton bg-[#502] rounded-md px-[0.3cm] py-[0.1cm] mx-[0.2cm] text-[#fff]'>
          1
        </button>
        </div> 
       </div>): 
       (
        <div className="p-[0.5cm] text-[#d7b644] lg:text-[105%]">All items will appear here!</div>
       )}
       </div>}

       {(displayTab === "cat1" && allArtItems)  &&
       <div>
        {allArtItems.length > 0 ?
       (<div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-[1cm]">
          {allArtItems.map((data)=> (
          <div className="grid-cols-1 rounded-xl bg-[rgba(0,0,0,0.8)]">
          <img src={data[9]} className="rounded-t-xl" />
          <div className="p-[0.5cm]">
            <div className="text-[120%] font-[500]">{data[7]}</div>
            <div><span>By</span> <span>{data[0].substring(0, 4)}...{data[0].substring(36, 42)} </span> <img src="images/user.png" width="18" style={{display:"inline-block"}} /><span className="float-right px-[0.2cm] py-[0.05cm] rounded-md bg-[#502]" style={{border:"2px solid #d7b644"}}>{data[8]} <img src="images/medal.png" width="18" style={{display:"inline-block"}} /></span></div>
            <div className="text-[#aaa] text-[90%] mt-[0.4cm]"><span>Floor</span><span className="float-right">Status</span></div>
            <div className="mt-[0.1cm]"><span>{data[2].toString() * 10 **-18} RBTC</span><span className="float-right">{data[10] === false ? (<span className="text-[#d7b644]">Not yet sold</span>) : (<span className="text-[#090]">Sold</span>)}</span></div>
            <div><button onClick={(e) => {e.preventDefault(); getItemsData(data[1]) & setCollectionTitle(data[5])}} className='bg-[#502] rounded-md px-[0.2cm] py-[0.05cm] mt-[0.2cm] generalbutton' style={{border:"2px solid #aaa"}}>View collection <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button></div>
            <div><button onClick={(e) => {e.preventDefault(); getItemCreator(data[0]) & getSingleItemData(data[4])}} className='bg-[#002] rounded-md px-[0.2cm] py-[0.05cm] mt-[0.2cm] generalbutton4' style={{border:"2px solid #aaa"}}>View NFT <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button></div>
          </div>
        </div>
          ))}
        </div>
        <div className='mt-[0.5cm]'>
        <button className='generalbutton bg-[#502] rounded-md px-[0.3cm] py-[0.1cm] mx-[0.2cm] text-[#fff]'>
          1
        </button>
        </div> 
       </div>): 
       (
        <div className="p-[0.5cm] text-[#d7b644] lg:text-[105%]">There are no items yet in this category!</div>
       )}
       </div>}

       {(displayTab === "cat2" && allFashionItems)  &&
       <div>
        {allFashionItems.length > 0 ?
       (<div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-[1cm]">
          {allFashionItems.map((data)=> (
          <div className="grid-cols-1 rounded-xl bg-[rgba(0,0,0,0.8)]">
          <img src={data[9]} className="rounded-t-xl" />
          <div className="p-[0.5cm]">
            <div className="text-[120%] font-[500]">{data[7]}</div>
            <div><span>By</span> <span>{data[0].substring(0, 4)}...{data[0].substring(36, 42)} </span> <img src="images/user.png" width="18" style={{display:"inline-block"}} /><span className="float-right px-[0.2cm] py-[0.05cm] rounded-md bg-[#502]" style={{border:"2px solid #d7b644"}}>{data[8]} <img src="images/medal.png" width="18" style={{display:"inline-block"}} /></span></div>
            <div className="text-[#aaa] text-[90%] mt-[0.4cm]"><span>Floor</span><span className="float-right">Status</span></div>
            <div className="mt-[0.1cm]"><span>{data[2].toString() * 10 **-18} RBTC</span><span className="float-right">{data[10] === false ? (<span className="text-[#d7b644]">Not yet sold</span>) : (<span className="text-[#090]">Sold</span>)}</span></div>
            <div><button onClick={(e) => {e.preventDefault(); getItemsData(data[1]) & setCollectionTitle(data[5])}} className='bg-[#502] rounded-md px-[0.2cm] py-[0.05cm] mt-[0.2cm] generalbutton' style={{border:"2px solid #aaa"}}>View collection <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button></div>
            <div><button onClick={(e) => {e.preventDefault(); getItemCreator(data[0]) & getSingleItemData(data[4])}} className='bg-[#002] rounded-md px-[0.2cm] py-[0.05cm] mt-[0.2cm] generalbutton4' style={{border:"2px solid #aaa"}}>View NFT <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button></div>
          </div>
        </div>
          ))}
        </div>
        <div className='mt-[0.5cm]'>
        <button className='generalbutton bg-[#502] rounded-md px-[0.3cm] py-[0.1cm] mx-[0.2cm] text-[#fff]'>
          1
        </button>
        </div> 
       </div>): 
       (
        <div className="p-[0.5cm] text-[#d7b644] lg:text-[105%]">There are no items yet in this category!</div>
       )}
       </div>}

       {(displayTab === "cat3" && allPortraitItems)  &&
       <div>
        {allPortraitItems.length > 0 ?
       (<div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-[1cm]">
          {allPortraitItems.map((data)=> (
          <div className="grid-cols-1 rounded-xl bg-[rgba(0,0,0,0.8)]">
          <img src={data[9]} className="rounded-t-xl" />
          <div className="p-[0.5cm]">
            <div className="text-[120%] font-[500]">{data[7]}</div>
            <div><span>By</span> <span>{data[0].substring(0, 4)}...{data[0].substring(36, 42)} </span> <img src="images/user.png" width="18" style={{display:"inline-block"}} /><span className="float-right px-[0.2cm] py-[0.05cm] rounded-md bg-[#502]" style={{border:"2px solid #d7b644"}}>{data[8]} <img src="images/medal.png" width="18" style={{display:"inline-block"}} /></span></div>
            <div className="text-[#aaa] text-[90%] mt-[0.4cm]"><span>Floor</span><span className="float-right">Status</span></div>
            <div className="mt-[0.1cm]"><span>{data[2].toString() * 10 **-18} RBTC</span><span className="float-right">{data[10] === false ? (<span className="text-[#d7b644]">Not yet sold</span>) : (<span className="text-[#090]">Sold</span>)}</span></div>
            <div><button onClick={(e) => {e.preventDefault(); getItemsData(data[1]) & setCollectionTitle(data[5])}} className='bg-[#502] rounded-md px-[0.2cm] py-[0.05cm] mt-[0.2cm] generalbutton' style={{border:"2px solid #aaa"}}>View collection <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button></div>
            <div><button onClick={(e) => {e.preventDefault(); getItemCreator(data[0]) & getSingleItemData(data[4])}} className='bg-[#002] rounded-md px-[0.2cm] py-[0.05cm] mt-[0.2cm] generalbutton4' style={{border:"2px solid #aaa"}}>View NFT <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button></div>
          </div>
        </div>
          ))}
        </div>
        <div className='mt-[0.5cm]'>
        <button className='generalbutton bg-[#502] rounded-md px-[0.3cm] py-[0.1cm] mx-[0.2cm] text-[#fff]'>
          1
        </button>
        </div> 
       </div>): 
       (
        <div className="p-[0.5cm] text-[#d7b644] lg:text-[105%]">There are no items yet in this category!</div>
       )}
       </div>}

       {(displayTab === "cat4" && allLifestyleItems)  &&
       <div>
        {allLifestyleItems.length > 0 ?
       (<div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-[1cm]">
          {allLifestyleItems.map((data)=> (
          <div className="grid-cols-1 rounded-xl bg-[rgba(0,0,0,0.8)]">
          <img src={data[9]} className="rounded-t-xl" />
          <div className="p-[0.5cm]">
            <div className="text-[120%] font-[500]">{data[7]}</div>
            <div><span>By</span> <span>{data[0].substring(0, 4)}...{data[0].substring(36, 42)} </span> <img src="images/user.png" width="18" style={{display:"inline-block"}} /><span className="float-right px-[0.2cm] py-[0.05cm] rounded-md bg-[#502]" style={{border:"2px solid #d7b644"}}>{data[8]} <img src="images/medal.png" width="18" style={{display:"inline-block"}} /></span></div>
            <div className="text-[#aaa] text-[90%] mt-[0.4cm]"><span>Floor</span><span className="float-right">Status</span></div>
            <div className="mt-[0.1cm]"><span>{data[2].toString() * 10 **-18} RBTC</span><span className="float-right">{data[10] === false ? (<span className="text-[#d7b644]">Not yet sold</span>) : (<span className="text-[#090]">Sold</span>)}</span></div>
            <div><button onClick={(e) => {e.preventDefault(); getItemsData(data[1]) & setCollectionTitle(data[5])}} className='bg-[#502] rounded-md px-[0.2cm] py-[0.05cm] mt-[0.2cm] generalbutton' style={{border:"2px solid #aaa"}}>View collection <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button></div>
            <div><button onClick={(e) => {e.preventDefault(); getItemCreator(data[0]) & getSingleItemData(data[4])}} className='bg-[#002] rounded-md px-[0.2cm] py-[0.05cm] mt-[0.2cm] generalbutton4' style={{border:"2px solid #aaa"}}>View NFT <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button></div>
          </div>
        </div>
          ))}
        </div>
        <div className='mt-[0.5cm]'>
        <button className='generalbutton bg-[#502] rounded-md px-[0.3cm] py-[0.1cm] mx-[0.2cm] text-[#fff]'>
          1
        </button>
        </div> 
       </div>): 
       (
        <div className="p-[0.5cm] text-[#d7b644] lg:text-[105%]">There are no items yet in this category!</div>
       )}
       </div>}

       {(displayTab === "cat5" && allPhotographyItems)  &&
       <div>
        {allPhotographyItems.length > 0 ?
       (<div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-[1cm]">
          {allPhotographyItems.map((data)=> (
          <div className="grid-cols-1 rounded-xl bg-[rgba(0,0,0,0.8)]">
          <img src={data[9]} className="rounded-t-xl" />
          <div className="p-[0.5cm]">
            <div className="text-[120%] font-[500]">{data[7]}</div>
            <div><span>By</span> <span>{data[0].substring(0, 4)}...{data[0].substring(36, 42)} </span> <img src="images/user.png" width="18" style={{display:"inline-block"}} /><span className="float-right px-[0.2cm] py-[0.05cm] rounded-md bg-[#502]" style={{border:"2px solid #d7b644"}}>{data[8]} <img src="images/medal.png" width="18" style={{display:"inline-block"}} /></span></div>
            <div className="text-[#aaa] text-[90%] mt-[0.4cm]"><span>Floor</span><span className="float-right">Status</span></div>
            <div className="mt-[0.1cm]"><span>{data[2].toString() * 10 **-18} RBTC</span><span className="float-right">{data[10] === false ? (<span className="text-[#d7b644]">Not yet sold</span>) : (<span className="text-[#090]">Sold</span>)}</span></div>
            <div><button onClick={(e) => {e.preventDefault(); getItemsData(data[1]) & setCollectionTitle(data[5])}} className='bg-[#502] rounded-md px-[0.2cm] py-[0.05cm] mt-[0.2cm] generalbutton' style={{border:"2px solid #aaa"}}>View collection <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button></div>
            <div><button onClick={(e) => {e.preventDefault(); getItemCreator(data[0]) & getSingleItemData(data[4])}} className='bg-[#002] rounded-md px-[0.2cm] py-[0.05cm] mt-[0.2cm] generalbutton4' style={{border:"2px solid #aaa"}}>View NFT <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button></div>
          </div>
        </div>
          ))}
        </div>
        <div className='mt-[0.5cm]'>
        <button className='generalbutton bg-[#502] rounded-md px-[0.3cm] py-[0.1cm] mx-[0.2cm] text-[#fff]'>
          1
        </button>
        </div> 
       </div>): 
       (
        <div className="p-[0.5cm] text-[#d7b644] lg:text-[105%]">There are no items yet in this category!</div>
       )}
       </div>}

       {(displayTab === "searchresults" && searchData)  &&
       <div>
        {searchData.length > 0 ?
       (<div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-[1cm]">
          {searchData.map((data)=> (
          <div className="grid-cols-1 rounded-xl bg-[rgba(0,0,0,0.8)]">
          <img src={data[9]} className="rounded-t-xl" />
          <div className="p-[0.5cm]">
            <div className="text-[120%] font-[500]">{data[7]}</div>
            <div><span>By</span> <span>{data[0].substring(0, 4)}...{data[0].substring(36, 42)} </span> <img src="images/user.png" width="18" style={{display:"inline-block"}} /><span className="float-right px-[0.2cm] py-[0.05cm] rounded-md bg-[#502]" style={{border:"2px solid #d7b644"}}>{data[8]} <img src="images/medal.png" width="18" style={{display:"inline-block"}} /></span></div>
            <div className="text-[#aaa] text-[90%] mt-[0.4cm]"><span>Floor</span><span className="float-right">Status</span></div>
            <div className="mt-[0.1cm]"><span>{data[2].toString() * 10 **-18} RBTC</span><span className="float-right">{data[10] === false ? (<span className="text-[#d7b644]">Not yet sold</span>) : (<span className="text-[#090]">Sold</span>)}</span></div>
            <div><button onClick={(e) => {e.preventDefault(); getItemsData(data[1]) & setCollectionTitle(data[5])}} className='bg-[#502] rounded-md px-[0.2cm] py-[0.05cm] mt-[0.2cm] generalbutton' style={{border:"2px solid #aaa"}}>View collection <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button></div>
            <div><button onClick={(e) => {e.preventDefault(); getItemCreator(data[0]) & getSingleItemData(data[4])}} className='bg-[#002] rounded-md px-[0.2cm] py-[0.05cm] mt-[0.2cm] generalbutton4' style={{border:"2px solid #aaa"}}>View NFT <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button></div>
          </div>
        </div>
          ))}
        </div>
        <div className='mt-[0.5cm]'>
        <button className='generalbutton bg-[#502] rounded-md px-[0.3cm] py-[0.1cm] mx-[0.2cm] text-[#fff]'>
          1
        </button>
        </div> 
       </div>): 
       (
        <div className="p-[0.5cm] text-[#d7b644] lg:text-[105%]">There is no matching item for the NFT you are searching for!</div>
       )}
       </div>}
       </div>
        </div>


        {loading ? 
     (<div className='bg-[rgba(0,0,0,0.8)] text-[#000] text-center w-[100%] h-[100%] top-0 right-0' style={{position:"fixed", zIndex:"9999"}}>
      <div className='loader mx-[auto] lg:mt-[20%] md:mt-[40%] mt-[50%]'></div>
      </div>) : (<span></span>)  
     }

        </div>
    )
}