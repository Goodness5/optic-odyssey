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

    //read for all public collections
   const [allPublicCollections, setallPublicCollections] = useState([])
   useEffect(()=> {
    const getAllPublicCollections = async() => {
      if(isConnected){
         //read settings first
         const ethersProvider = new BrowserProvider(walletProvider) 
         const nftContractReadSettings = new Contract(nftContractAddress, nftContractABI, ethersProvider)       
       try {
        const getallpubliccollections = await nftContractReadSettings.getAllPublicCollections()
        const getAllCollectionsArray = []
        for (let i = 0; i < getallpubliccollections.length; i++){
            const getAllcollections = getallpubliccollections[i]
            getAllCollectionsArray.push(getAllcollections)
        }
        getAllCollectionsArray.sort((a, b) => b[4].toString() - a[4].toString())
        setallPublicCollections(getAllCollectionsArray)
      } catch (error) {
        console.log(error)
      }
    }
    }
    getAllPublicCollections();
   }, [])

    //read all public items
   const [allPublicItems, setallPublicItems] = useState([])
   useEffect(()=> {
    const getAllPublicItems = async() => {
      if(isConnected){
         //read settings first
         const ethersProvider = new BrowserProvider(walletProvider) 
         const nftContractReadSettings = new Contract(nftContractAddress, nftContractABI, ethersProvider)       
       try {
        const getallpublicitems = await nftContractReadSettings.getAllPublicItems()
        const getAllItemsArray = []
        for (let i = 0; i < getallpublicitems.length; i++){
            const getAll = getallpublicitems[i]
            getAllItemsArray.push(getAll)
        }
        getAllItemsArray.sort((a, b) => b[3].toString() - a[3].toString())
        setallPublicItems(getAllItemsArray)
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
                getFashionItemsArray.push(getFashionCategory)
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
    const [allCollectionsDiv, setallCollectionsDiv] = useState("block")
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
          parseFloat(getAnyItem[2].toString() * 10 **-18).toFixed(6) == searchQuery.toString()){
            searchDataArray.push(getAnyItem)  
          }
          searchDataArray.sort((a, b) => b[3].toString() - a[3].toString())
          setSearchData(searchDataArray)  
          setallCollectionsDiv("none")
          setTimeout(()=> {
            setallCollectionsDiv("block")
          }, 10000)    
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
  const [aCollectionCategory, setaCollectionCategory] = useState()
  const [displayOption, setDisplayOption] = useState("mainmarketplace")
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
        setDisplayOption("specificcollection")
      } catch (error) {
        console.log(error)
      }
    }
    }

    //read creator of single collection item
   const [theItemCreatorUsername, settheItemCreatorUsername] = useState()
   const [itemCreatorProfilePic, setitemCreatorProfilePic] = useState()
   const getItemCreator = async(itemCreator) => {
     if(isConnected){
        //read settings first
        const ethersProvider = new BrowserProvider(walletProvider) 
        const nftContractReadSettings = new Contract(nftContractAddress, nftContractABI, ethersProvider)       
      try {
       const getitemcreator = await nftContractReadSettings.users(itemCreator)
       const getcreatorusername = getitemcreator.username.toString()
       settheItemCreatorUsername(getcreatorusername)
       const getcreatorprofilepic = getitemcreator.avatar.toString()
       setitemCreatorProfilePic(getcreatorprofilepic)
     } catch (error) {
       console.log(error)
     }
   }
   }

       //read for single collection item
       const [chosenItem, setChosenItem] = useState([])
       const [mainMarketplaceDisplay, setmainMarketplaceDisplay] = useState("block")
       const [aCollectionDisplay, setAcollectionDisplay] = useState("block")
       const [singleNFTdisplay, setsingleNFTdisplay] = useState("none")
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
           setmainMarketplaceDisplay("none")
           setAcollectionDisplay("none")
           setsingleNFTdisplay("block")
         } catch (error) {
           console.log(error)
         }
       }
       }

       const controlSingleNFTDivCancel = () => {
          setAcollectionDisplay("block")
          setmainMarketplaceDisplay("block")
       }

       //convert values to bytes32
       function stringToBytes32(str) {
        // Convert each character to its hex representation
        let hexString = '0x';
        for (let i = 0; i < str.length; i++) {
            hexString += str.charCodeAt(i).toString(16).padStart(2, '0');
        }
    
        // Truncate or pad the hex string to ensure length of 64 characters (32 bytes)
        if (hexString.length > 66) {
            hexString = hexString.slice(0, 66);
        } else {
            while (hexString.length < 66) {
                hexString += '0';
            }
        }
    
        return hexString;
    }

      // to buy item
      const buyNFT = async (initialAmount, initialID) => {
        if(isConnected){
         setLoading(true) 
         const ethersProvider = new BrowserProvider(walletProvider) 
         const signer = await ethersProvider.getSigner()
         const nftContractWriteSettings = new Contract(nftContractAddress, nftContractABI, signer)
         const convertedInitialAmount = initialAmount.toString()
         console.log("amount:" + convertedInitialAmount)
         try {
          const buynft = await nftContractWriteSettings.buyItem({value:parseUnits(convertedInitialAmount, 18)}, stringToBytes32(initialID));
         } catch (error) {
          console.log(error)
          setLoading(false)
         }
         finally {
          setLoading(false)
         }
        }
      }

        //function to list and unlist item for sale
       //list item function
       const ListItem = async (itemID) => {
        if(isConnected){
         setLoading(true) 
         const ethersProvider = new BrowserProvider(walletProvider) 
         const signer = await ethersProvider.getSigner()
         const nftContractWriteSettings = new Contract(nftContractAddress, nftContractABI, signer)
         try {
          const listitem = await nftContractWriteSettings.listItem(stringToBytes32(itemID));
         } catch (error) {
          console.log(error)
          setLoading(false)
         }
         finally {
          setLoading(false)
         }
        }
      }

      //unlist item function
      const UnlistItem = async (itemID) => {
        if(isConnected){
         setLoading(true) 
         const ethersProvider = new BrowserProvider(walletProvider) 
         const signer = await ethersProvider.getSigner()
         const nftContractWriteSettings = new Contract(nftContractAddress, nftContractABI, signer)
         try {
          const unlistitem = await nftContractWriteSettings.unlistItem(stringToBytes32(itemID));
         } catch (error) {
          console.log(error)
          setLoading(false)
         }
         finally {
          setLoading(false)
         }
        }
      }
     
      //function to set collection visibility
      const collectionVisibility = async (initialCollectionContractAddress, visibility) => {
        if(isConnected){
         setLoading(true) 
         const ethersProvider = new BrowserProvider(walletProvider) 
         const signer = await ethersProvider.getSigner()
         const nftContractWriteSettings = new Contract(nftContractAddress, nftContractABI, signer)
         try {
          const collectionvisibility = await nftContractWriteSettings.changeCollectionVisibility(initialCollectionContractAddress, visibility);
         } catch (error) {
          console.log(error)
          setLoading(false)
         }
         finally {
          setLoading(false)
         }
        }
      }

            // pagination for all public items
            const [currentAllItemsPage, setCurrentAllItemsPage] = useState(1);
            const PublicNFTsPerPage = 15;
            const indexOfLastPublicNFT = currentAllItemsPage * PublicNFTsPerPage;
            const indexOfFirstPublicNFT = indexOfLastPublicNFT - PublicNFTsPerPage;
            const currentAllNFTs = allPublicItems.slice(indexOfFirstPublicNFT, indexOfLastPublicNFT);
            const currentAllArtNFTs = allArtItems.slice(indexOfFirstPublicNFT, indexOfLastPublicNFT);
            const currentAllFashionNFTs = allFashionItems.slice(indexOfFirstPublicNFT, indexOfLastPublicNFT);
            const currentAllPortraitNFTs = allPortraitItems.slice(indexOfFirstPublicNFT, indexOfLastPublicNFT);
            const currentAllLifestyleNFTs = allLifestyleItems.slice(indexOfFirstPublicNFT, indexOfLastPublicNFT);
            const currentAllPhotographyNFTs = allPhotographyItems.slice(indexOfFirstPublicNFT, indexOfLastPublicNFT);
            const currentAllSearchedNFTs = searchData.slice(indexOfFirstPublicNFT, indexOfLastPublicNFT);
            const currentAllPublicCollections = allPublicCollections.slice(indexOfFirstPublicNFT, indexOfLastPublicNFT);
            const paginate = (pageNumber) => {
              setCurrentAllItemsPage(pageNumber);
            };
    
    return (
        <div>
        <div className="font-[500] bg-[#502] px-[0.4cm] py-[0.15cm] rounded-md mb-[0.2cm]" style={{display:"inline-block", boxShadow:"2px 2px 2px 2px #333"}}>NFT marketplace</div>
        <div className="text-[#ccc] text-[90%]">View collections from photographers around the world</div>
        

     {displayOption === "mainmarketplace" && 
    (<div className="mainmarketplace" style={{display:mainMarketplaceDisplay}}>
        <div className="my-[1cm]">
        <div className='text-center mt-[0.5cm] '>
        <span className='bg-[#000] text-[#fff] px-[0.5cm] py-[0.2cm] rounded-full' style={{border:"2px solid #00f"}}>
        <form onSubmit={(e) => {e.preventDefault(); handleSearch(searchQuery)}} style={{display:"inline-block"}}>
        <input type="text" placeholder="Search NFT by title or price...." onChange={(e) => setSearchQuery(e.target.value)} className='bg-[#000] w-[85%] placeholder-[#fff] text-[#fff] text-[90%] outline-none' /><img src="images/search.png" width="20" className='ml-[0.2cm] cursor-pointer' onClick={(e) => {e.preventDefault(); handleSearch(searchQuery)}} style={{display:"inline-block"}}/>
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
          {currentAllNFTs.map((data)=> (
          <div className="grid-cols-1 rounded-xl bg-[rgba(0,0,0,0.8)]">
          <img src={"https://ipfs.filebase.io/ipfs/" + data[9]} className="rounded-t-xl" />
          <div className="p-[0.5cm]">
            <div className="font-[500] uppercase">{data[7]}</div>
            <div className="mt-[0.2cm]"><span className="px-[0.2cm] py-[0.05cm] rounded-md bg-[#502]" style={{border:"2px solid #d7b644"}}>{data[8]} <img src="images/medal.png" width="18" style={{display:"inline-block"}} /></span></div>
            <div className="text-[#aaa] text-[90%] mt-[0.2cm]"><span>Floor</span></div>
            <div className="mt-[0.1cm]"><span>{parseFloat(data[2].toString() * 10 **-18).toFixed(6)} RBTC</span></div>
            <div>
              <button onClick={(e) => {e.preventDefault(); getItemsData(data[1]) & setCollectionTitle(data[5])}} className='bg-[#502] rounded-md px-[0.2cm] py-[0.05cm] mt-[0.2cm] generalbutton' style={{border:"2px solid #aaa"}}>View collection <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button>
              <button onClick={(e) => {e.preventDefault(); getItemCreator(data[0]) & getSingleItemData(data[4])}} className='float-right bg-[#002] rounded-md px-[0.2cm] py-[0.05cm] mt-[0.2cm] generalbutton4' style={{border:"2px solid #aaa"}}>View NFT <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button>
            </div>
          </div>
        </div>
          ))}
        </div>
        <div className='my-[0.5cm]'>
      {Array.from({ length: Math.ceil(allPublicItems.length.toString() / PublicNFTsPerPage) }, (_, index) => (
        <button className='generalbutton bg-[#502] rounded-md px-[0.3cm] py-[0.1cm] mx-[0.2cm] text-[#fff]' key={index} onClick={() => paginate(index + 1)}>
          {index + 1}
        </button>
      ))}
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
          {currentAllArtNFTs.map((data)=> (
          <div className="grid-cols-1 rounded-xl bg-[rgba(0,0,0,0.8)]">
          <img src={"https://ipfs.filebase.io/ipfs/" + data[9]} className="rounded-t-xl" />
          <div className="p-[0.5cm]">
            <div className="font-[500] uppercase">{data[7]}</div>
            <div className="mt-[0.2cm]"><span className="px-[0.2cm] py-[0.05cm] rounded-md bg-[#502]" style={{border:"2px solid #d7b644"}}>{data[8]} <img src="images/medal.png" width="18" style={{display:"inline-block"}} /></span></div>
            <div className="text-[#aaa] text-[90%] mt-[0.2cm]"><span>Floor</span></div>
            <div className="mt-[0.1cm]"><span>{parseFloat(data[2].toString() * 10 **-18).toFixed(6)} RBTC</span></div>
            <div>
              <button onClick={(e) => {e.preventDefault(); getItemsData(data[1]) & setCollectionTitle(data[5])}} className='bg-[#502] rounded-md px-[0.2cm] py-[0.05cm] mt-[0.2cm] generalbutton' style={{border:"2px solid #aaa"}}>View collection <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button>
              <button onClick={(e) => {e.preventDefault(); getItemCreator(data[0]) & getSingleItemData(data[4])}} className='float-right bg-[#002] rounded-md px-[0.2cm] py-[0.05cm] mt-[0.2cm] generalbutton4' style={{border:"2px solid #aaa"}}>View NFT <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button>
            </div>
          </div>
        </div>
          ))}
        </div>
        <div className='my-[0.5cm]'>
      {Array.from({ length: Math.ceil(allArtItems.length.toString() / PublicNFTsPerPage) }, (_, index) => (
        <button className='generalbutton bg-[#502] rounded-md px-[0.3cm] py-[0.1cm] mx-[0.2cm] text-[#fff]' key={index} onClick={() => paginate(index + 1)}>
          {index + 1}
        </button>
      ))}
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
          {currentAllFashionNFTs.map((data)=> (
          <div className="grid-cols-1 rounded-xl bg-[rgba(0,0,0,0.8)]">
          <img src={"https://ipfs.filebase.io/ipfs/" + data[9]} className="rounded-t-xl" />
          <div className="p-[0.5cm]">
            <div className="font-[500] uppercase">{data[7]}</div>
            <div className="mt-[0.2cm]"><span className="px-[0.2cm] py-[0.05cm] rounded-md bg-[#502]" style={{border:"2px solid #d7b644"}}>{data[8]} <img src="images/medal.png" width="18" style={{display:"inline-block"}} /></span></div>
            <div className="text-[#aaa] text-[90%] mt-[0.2cm]"><span>Floor</span></div>
            <div className="mt-[0.1cm]"><span>{parseFloat(data[2].toString() * 10 **-18).toFixed(6)} RBTC</span></div>
            <div>
              <button onClick={(e) => {e.preventDefault(); getItemsData(data[1]) & setCollectionTitle(data[5])}} className='bg-[#502] rounded-md px-[0.2cm] py-[0.05cm] mt-[0.2cm] generalbutton' style={{border:"2px solid #aaa"}}>View collection <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button>
              <button onClick={(e) => {e.preventDefault(); getItemCreator(data[0]) & getSingleItemData(data[4])}} className='float-right bg-[#002] rounded-md px-[0.2cm] py-[0.05cm] mt-[0.2cm] generalbutton4' style={{border:"2px solid #aaa"}}>View NFT <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button>
            </div>
          </div>
        </div>
          ))}
        </div>
        <div className='my-[0.5cm]'>
      {Array.from({ length: Math.ceil(allFashionItems.length.toString() / PublicNFTsPerPage) }, (_, index) => (
        <button className='generalbutton bg-[#502] rounded-md px-[0.3cm] py-[0.1cm] mx-[0.2cm] text-[#fff]' key={index} onClick={() => paginate(index + 1)}>
          {index + 1}
        </button>
      ))}
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
          {currentAllPortraitNFTs.map((data)=> (
          <div className="grid-cols-1 rounded-xl bg-[rgba(0,0,0,0.8)]">
          <img src={"https://ipfs.filebase.io/ipfs/" + data[9]} className="rounded-t-xl" />
          <div className="p-[0.5cm]">
            <div className="font-[500] uppercase">{data[7]}</div>
            <div className="mt-[0.2cm]"><span className="px-[0.2cm] py-[0.05cm] rounded-md bg-[#502]" style={{border:"2px solid #d7b644"}}>{data[8]} <img src="images/medal.png" width="18" style={{display:"inline-block"}} /></span></div>
            <div className="text-[#aaa] text-[90%] mt-[0.2cm]"><span>Floor</span></div>
            <div className="mt-[0.1cm]"><span>{parseFloat(data[2].toString() * 10 **-18).toFixed(6)} RBTC</span></div>
            <div>
              <button onClick={(e) => {e.preventDefault(); getItemsData(data[1]) & setCollectionTitle(data[5])}} className='bg-[#502] rounded-md px-[0.2cm] py-[0.05cm] mt-[0.2cm] generalbutton' style={{border:"2px solid #aaa"}}>View collection <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button>
              <button onClick={(e) => {e.preventDefault(); getItemCreator(data[0]) & getSingleItemData(data[4])}} className='float-right bg-[#002] rounded-md px-[0.2cm] py-[0.05cm] mt-[0.2cm] generalbutton4' style={{border:"2px solid #aaa"}}>View NFT <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button>
            </div>
          </div>
        </div>
          ))}
        </div>
        <div className='my-[0.5cm]'>
      {Array.from({ length: Math.ceil(allPortraitItems.length.toString() / PublicNFTsPerPage) }, (_, index) => (
        <button className='generalbutton bg-[#502] rounded-md px-[0.3cm] py-[0.1cm] mx-[0.2cm] text-[#fff]' key={index} onClick={() => paginate(index + 1)}>
          {index + 1}
        </button>
      ))}
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
          {currentAllLifestyleNFTs.map((data)=> (
          <div className="grid-cols-1 rounded-xl bg-[rgba(0,0,0,0.8)]">
          <img src={"https://ipfs.filebase.io/ipfs/" + data[9]} className="rounded-t-xl" />
          <div className="p-[0.5cm]">
            <div className="font-[500] uppercase">{data[7]}</div>
            <div className="mt-[0.2cm]"><span className="px-[0.2cm] py-[0.05cm] rounded-md bg-[#502]" style={{border:"2px solid #d7b644"}}>{data[8]} <img src="images/medal.png" width="18" style={{display:"inline-block"}} /></span></div>
            <div className="text-[#aaa] text-[90%] mt-[0.2cm]"><span>Floor</span></div>
            <div className="mt-[0.1cm]"><span>{parseFloat(data[2].toString() * 10 **-18).toFixed(6)} RBTC</span></div>
            <div>
              <button onClick={(e) => {e.preventDefault(); getItemsData(data[1]) & setCollectionTitle(data[5])}} className='bg-[#502] rounded-md px-[0.2cm] py-[0.05cm] mt-[0.2cm] generalbutton' style={{border:"2px solid #aaa"}}>View collection <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button>
              <button onClick={(e) => {e.preventDefault(); getItemCreator(data[0]) & getSingleItemData(data[4])}} className='float-right bg-[#002] rounded-md px-[0.2cm] py-[0.05cm] mt-[0.2cm] generalbutton4' style={{border:"2px solid #aaa"}}>View NFT <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button>
            </div>
          </div>
        </div>
          ))}
        </div>
        <div className='my-[0.5cm]'>
      {Array.from({ length: Math.ceil(allLifestyleItems.length.toString() / PublicNFTsPerPage) }, (_, index) => (
        <button className='generalbutton bg-[#502] rounded-md px-[0.3cm] py-[0.1cm] mx-[0.2cm] text-[#fff]' key={index} onClick={() => paginate(index + 1)}>
          {index + 1}
        </button>
      ))}
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
          {currentAllPhotographyNFTs.map((data)=> (
          <div className="grid-cols-1 rounded-xl bg-[rgba(0,0,0,0.8)]">
          <img src={"https://ipfs.filebase.io/ipfs/" + data[9]} className="rounded-t-xl" />
          <div className="p-[0.5cm]">
            <div className="font-[500] uppercase">{data[7]}</div>
            <div className="mt-[0.2cm]"><span className="px-[0.2cm] py-[0.05cm] rounded-md bg-[#502]" style={{border:"2px solid #d7b644"}}>{data[8]} <img src="images/medal.png" width="18" style={{display:"inline-block"}} /></span></div>
            <div className="text-[#aaa] text-[90%] mt-[0.2cm]"><span>Floor</span></div>
            <div className="mt-[0.1cm]"><span>{parseFloat(data[2].toString() * 10 **-18).toFixed(6)} RBTC</span></div>
            <div>
              <button onClick={(e) => {e.preventDefault(); getItemsData(data[1]) & setCollectionTitle(data[5])}} className='bg-[#502] rounded-md px-[0.2cm] py-[0.05cm] mt-[0.2cm] generalbutton' style={{border:"2px solid #aaa"}}>View collection <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button>
              <button onClick={(e) => {e.preventDefault(); getItemCreator(data[0]) & getSingleItemData(data[4])}} className='float-right bg-[#002] rounded-md px-[0.2cm] py-[0.05cm] mt-[0.2cm] generalbutton4' style={{border:"2px solid #aaa"}}>View NFT <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button>
            </div>
          </div>
        </div>
          ))}
        </div>
        <div className='my-[0.5cm]'>
      {Array.from({ length: Math.ceil(allPhotographyItems.length.toString() / PublicNFTsPerPage) }, (_, index) => (
        <button className='generalbutton bg-[#502] rounded-md px-[0.3cm] py-[0.1cm] mx-[0.2cm] text-[#fff]' key={index} onClick={() => paginate(index + 1)}>
          {index + 1}
        </button>
      ))}
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
          {currentAllSearchedNFTs.map((data)=> (
          <div className="grid-cols-1 rounded-xl bg-[rgba(0,0,0,0.8)]">
          <img src={"https://ipfs.filebase.io/ipfs/" + data[9]} className="rounded-t-xl" />
          <div className="p-[0.5cm]">
            <div className="font-[500] uppercase">{data[7]}</div>
            <div className="mt-[0.2cm]"><span className="px-[0.2cm] py-[0.05cm] rounded-md bg-[#502]" style={{border:"2px solid #d7b644"}}>{data[8]} <img src="images/medal.png" width="18" style={{display:"inline-block"}} /></span></div>
            <div className="text-[#aaa] text-[90%] mt-[0.2cm]"><span>Floor</span></div>
            <div className="mt-[0.1cm]"><span>{parseFloat(data[2].toString() * 10 **-18).toFixed(6)} RBTC</span></div>
            <div>
              <button onClick={(e) => {e.preventDefault(); getItemsData(data[1]) & setCollectionTitle(data[5])}} className='bg-[#502] rounded-md px-[0.2cm] py-[0.05cm] mt-[0.2cm] generalbutton' style={{border:"2px solid #aaa"}}>View collection <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button>
              <button onClick={(e) => {e.preventDefault(); getItemCreator(data[0]) & getSingleItemData(data[4])}} className='float-right bg-[#002] rounded-md px-[0.2cm] py-[0.05cm] mt-[0.2cm] generalbutton4' style={{border:"2px solid #aaa"}}>View NFT <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button>
            </div>
          </div>
        </div>
          ))}
        </div>
        <div className='my-[0.5cm]'>
      {Array.from({ length: Math.ceil(searchData.length.toString() / PublicNFTsPerPage) }, (_, index) => (
        <button className='generalbutton bg-[#502] rounded-md px-[0.3cm] py-[0.1cm] mx-[0.2cm] text-[#fff]' key={index} onClick={() => paginate(index + 1)}>
          {index + 1}
        </button>
      ))}
       </div>
       </div>): 
       (
        <div className="p-[0.5cm] text-[#d7b644] lg:text-[105%]">There is no matching item for the NFT you are searching for!</div>
       )}
       </div>}
       </div>
        </div>


        <div className="allcollections" style={{display:allCollectionsDiv}}>
          <div className="lg:text-[180%] md:text-[150%] text-[120%] font-[500] ml-[0.5cm] mb-[1cm]">
            <img src="images/dash.png" style={{display:"inline-block"}} width="30" className="mt-[-0.2cm]" />
            <span> All Collections </span>
            <img src="images/dash.png" style={{display:"inline-block"}} width="30" className="mt-[-0.2cm]" />
          </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-8">
          {currentAllPublicCollections.map((data) => (
          <div key={data[0]} className="grid-cols-1">
            <div className='px-[0.5cm] py-[3cm]' style={{boxShadow:"3px 3px 2px 2px #333", backgroundImage:`url(${data[3]})`, backgroundSize:"100%"}}>
              <div className='text-center text-[120%]'><span className="p-[0.4cm] bg-[rgba(0,0,0,0.7)]">{data[0]}</span></div>
              <div className="lg:text-[150%] text-[120%] marketplacecollectionnumber text-right"><span className="rounded-[100%] p-[0.3cm] bg-[#001]">+{data[5].length.toString()}</span></div>
            </div>
            <div className='mt-[0.3cm]'>
            <button onClick={(e) => {e.preventDefault(); getItemsData(data[4]) & getItemCreator(data[1]) & setCollectionTitle(data[0]) & setaCollectionCategory(data[2])}} className='bg-[#502] rounded-md px-[0.3cm] py-[0.1cm] m-[0.2cm] generalbutton' style={{border:"2px solid #aaa"}}>View collection <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button>
            {(data[data.length.toString() - 1] === false && data[1] === address) && (<button onClick={(e) => {e.preventDefault(); collectionVisibility(data[4], true)}} className='bg-[#002] rounded-md px-[0.3cm] py-[0.1cm] m-[0.2cm] generalbutton2' style={{border:"2px solid #aaa"}}>Publish <img src="images/post.png" width="17" style={{display:"inline-block"}} /></button>)}
            {(data[data.length.toString() - 1] === true && data[1] === address) && (<button onClick={(e) => {e.preventDefault(); collectionVisibility(data[4], false)}} className='text-[#900] bg-[#000] rounded-md px-[0.3cm] py-[0.1cm] m-[0.2cm] generalbutton2' style={{border:"2px solid #aaa"}}>Unpublish <img src="images/post.png" width="17" style={{display:"inline-block"}} /></button>)}
            </div>
          </div>
          ))}
        </div>
        <div className='my-[0.5cm]'>
      {Array.from({ length: Math.ceil(allPublicCollections.length.toString() / PublicNFTsPerPage) }, (_, index) => (
        <button className='generalbutton bg-[#502] rounded-md px-[0.3cm] py-[0.1cm] mx-[0.2cm] text-[#fff]' key={index} onClick={() => paginate(index + 1)}>
          {index + 1}
        </button>
      ))}
       </div>
        </div>
    </div>)}


    {displayOption === "specificcollection" && 
   (<div style={{display:aCollectionDisplay}}>
    <img src="images/cancel.png" width="40" onClick={(e) => setDisplayOption("mainmarketplace")} className='mx-[auto] mt-[1cm] cancelbutton rounded-[100%] cursor-pointer' />
    <div className='mt-[1cm] lg:p-[1cm] top-0 viewthediv2 p-[0.5cm]' style={{zIndex:"9999"}}>
    <div><span className='rounded-md px-[0.3cm] py-[0.15cm] bg-[#00f]' style={{boxShadow:"2px 2px 2px 2px #333"}}>By:</span> &nbsp; <span className='mt-[0.15cm]'><img src={itemCreatorProfilePic} width="25" className='rounded-[100%]' style={{display:"inline-block"}} /> {theItemCreatorUsername}</span></div>
      <div className='text-[120%] mt-[0.5cm]'><span className='font-[500]'>Collection:</span> {collectionTitle} ({chosenCollectionItems.length})</div>
      <div className='mb-[0.5cm] text-[110%] text-[#ccc]'><span className='font-[500]'>Collection category:</span> {aCollectionCategory}</div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8">
          {chosenCollectionItems.map((data) => (
            <div className="grid-cols-1">
            <div><img src={"https://ipfs.filebase.io/ipfs/" + data[9]} className="rounded-2xl w-[100%] lg:h-[8cm]" style={{border:"4px solid #aaa"}} /></div>
            <div className="lg:text-[130%] text-[120%] mt-[0.3cm] mx-[0.2cm]">Title: {data[7]}</div>
            <div className="lg:text-[120%] text-[110%] mx-[0.2cm]">Category: {data[8]}</div>
            <div className='mx-[0.2cm] text-[#aaa]'><span className=''>Price: </span><span className='font-[500]'>{parseFloat(data[2].toString() * 10 **-18).toFixed(6)} RBTC</span></div>
            <button onClick={(e) => getSingleItemData(data[4]) & getItemCreator(data[0])} className='text-[aaa] bg-[#002] rounded-md px-[0.3cm] py-[0.1cm] m-[0.2cm] generalbutton3' style={{border:"2px solid #aaa"}}>View NFT <img src="images/eye-ball.png" width="25" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button>
            </div>
          ))}
        </div>
   </div>
   </div>)}


   <div style={{display:singleNFTdisplay}}>
    <img src="images/crossed.png" width="45" onClick={(e) => {e.preventDefault(); controlSingleNFTDivCancel() & setsingleNFTdisplay("none")}} className='mx-[auto] mt-[1cm] p-[0.2cm] bg-[#000] cancelbutton rounded-[100%] cursor-pointer' />
    <div className='mt-[1cm] viewthediv lg:p-[0.8cm] p-[0.5cm]' style={{zIndex:"9999"}}>
      {chosenItem.map((data) => (
     <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>
     <div className='grid-cols-1'>
     <img src={"https://ipfs.filebase.io/ipfs/" + data[9]} className='rounded-xl' style={{boxShadow:"2px 2px 5px 2px rgba(0,0,0,0.5)"}} />
     </div>
     <div className='grid-cols-1 lg:col-span-2'>
       <div><span className='rounded-md px-[0.3cm] py-[0.15cm] bg-[#00f]' style={{boxShadow:"2px 2px 2px 2px #333"}}>Creator:</span> &nbsp; <span className='mt-[0.15cm]'><img src={itemCreatorProfilePic} width="25" className='rounded-[100%]' style={{display:"inline-block"}} /> {theItemCreatorUsername}</span></div>
      <div className='rounded-xl mt-[0.5cm] bg-[#001]' style={{border:"2px solid #333"}}>
      <div className='p-[0.5cm]' style={{borderBottom:"2px solid #333"}}><img src="images/collections.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /> Collection</div>
      <div className='p-[0.5cm] bg-[#002]'>
         {collectionTitle}
      </div>
      <div className='p-[0.5cm]' style={{borderBottom:"2px solid #333"}}><img src="images/title.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /> Title</div>
      <div className='p-[0.5cm] bg-[#002]'>
         {data[7]}
      </div>
      <div className='p-[0.5cm]' style={{borderBottom:"2px solid #333"}}><img src="images/categories.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /> Category</div>
      <div className='p-[0.5cm] bg-[#002]'>
         {data[8]}
      </div>
       <div className='p-[0.5cm]' style={{borderBottom:"2px solid #333"}}><img src="images/description.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /> Description</div>
       <div className='p-[0.5cm] bg-[#002] max-h-[5cm] overflow-auto'>
        {data[6]}
       </div>
       <div className='p-[0.5cm]' style={{borderBlock:"2px solid #333"}}><img src="images/rootstock.jpg" width="25" className='mt-[-0.1cm]' style={{display:"inline-block"}} /> Price</div>
       <div className='p-[0.5cm] bg-[#002] rounded-b-xl'>
         <div className='text-[150%] font-[500]'>{parseFloat(data[2].toString() * 10 **-18).toFixed(6)} RBTC</div>
         {(data[10] === true && data[0] != address) && (<button onClick={(e) => {e.preventDefault(); buyNFT((data[2].toString() * 10 **-18), data[4])}} className='px-[0.3cm] py-[0.2cm] bg-[#502] generalbutton w-[100%] mt-[0.2cm] rounded-md font-[500]'>Buy</button>)}
         {(data[10] === false && data[0] === address) && (<button onClick={(e) => {e.preventDefault(); ListItem(data[4])}} className='px-[0.3cm] py-[0.2cm] bg-[#005] generalbutton4 w-[100%] mt-[0.2cm] rounded-md font-[500]'>List item</button>)}
         {(data[10] === true && data[0] === address) && (<button onClick={(e) => {e.preventDefault(); UnlistItem(data[4])}} className='px-[0.3cm] py-[0.2cm] bg-[#f00] generalbutton4 w-[100%] mt-[0.2cm] rounded-md font-[500]'>Unlist item</button>)}
         {(data[10] === true && data[0] != address) && (<button className='px-[0.3cm] py-[0.2cm] text-[#000] bg-[#d7b644] cursor-default w-[100%] mt-[0.2cm] rounded-md font-[500]' style={{filter:"blur(1px)"}}>Make offer (coming soon!)</button>)}
       </div>
      </div>
     </div>
    </div>
      ))}
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