import axios from 'axios';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  nftContractAddress,
  nftContractABI,
} from "@/abiAndContractSettings";
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'
import { BrowserProvider, Contract, formatUnits, parseUnits } from 'ethers'

export default function Profile() {
      // wallet connect settings
      const { address, chainId, isConnected } = useWeb3ModalAccount()
      const { walletProvider } = useWeb3ModalProvider()

      //loading state
      const [loading, setLoading] = useState()

    //initialize the AOS library
    useEffect(() => {
      AOS.init();
    }, []) 

  const [profileDisplayComponent, setprofileDisplayComponent] = useState("uploadFiles")
  const [uploadFilesShadow, setuploadFilesShadow] = useState("#333")
  const [uploadFilesBg, setuploadFilesBg] = useState("#00f")
  const [yourNFTsShadow, setyourNFTsShadow] = useState("#333")
  const [yourNFTsBg, setyourNFTsBg] = useState("#000")
  const [aosValue, setaosValue] = useState()

  const controlUploadButton = () => {
    setprofileDisplayComponent("uploadFiles")
    setuploadFilesShadow("#333")
    setuploadFilesBg("#00f")
    setyourNFTsShadow("#333")
    setyourNFTsBg("#000")
    setaosValue("zoom-in")
  }
  const controlNFTsButton = () => {
    setprofileDisplayComponent("AllYourNFTCollections")
    setuploadFilesShadow("#333")
    setuploadFilesBg("#000")
    setyourNFTsShadow("#333")
    setyourNFTsBg("#00f")
    setaosValue("zoom-in")
  }

  const [mainNFTsdivDisplay, setmainNFTsdivDisplay] = useState("block")
  const [collectionDivDisplay, setcollectionDivDisplay] = useState("none")
  const [singleNFTdisplay, setSingleNFTdisplay] = useState("none")
  const controlCollectionsDiv = () => {
    setmainNFTsdivDisplay("none")
    setcollectionDivDisplay("block")
  }
  const controlCollectionsDivHide = () => {
    setmainNFTsdivDisplay("block")
    setcollectionDivDisplay("none")
  }
  const controlSingleNFTDiv = () => {
    setSingleNFTdisplay("block")
    setcollectionDivDisplay("none")
  }
  const controlSingleNFTDivHide = () => {
    setSingleNFTdisplay("none")
    setcollectionDivDisplay("block")
  }

        //update profile and cover photos
      //update profile photo
      const [showProfilePhotoSection, setShowProfilePhotoSection] = useState()
      const [theProfilePhoto, settheProfilePhoto] = useState()
      const [showCoverPhotoSection, setShowCoverPhotoSection] = useState()
      const [theCoverPhoto, settheCoverPhoto] = useState()
      const updateProfilePhoto = async () => {
        if(isConnected){
          setLoading(true) 
        try {
          const formData = new FormData();
          formData.append('file', theProfilePhoto);
          const response = await axios.post('/api/uploadprofilephoto', formData);
          if (response.status === 200) {
            const cid = response.data.cid;
            console.log('File uploaded:', cid);
            const request = await axios.post('/api/updateprofilephoto', { profilephoto: cid, walletaddress: address });
            if (request.status === 200) {
              console.log("Profile photo updated successfully");
              setShowProfilePhotoSection(false);
            }
            else if (request.status === 201) {
              console.log("Profile photo added successfully");
              setShowProfilePhotoSection(false);
            }
          }
        } catch (error) {
          console.error('Error uploading:', error.message);
          setLoading(false) 
        }
        finally {
            setLoading(false)
         }
      }
      };

    // read profile photo from IPFS
    const [getProfilePhotoFromIPFS, setgetProfilePhotoFromIPFS] = useState()
    useEffect(()=> {
      const readProfilePhoto = async () => {
        if (isConnected){
          try {
          const response = await axios.post("/api/getprofilephoto", {walletaddress:address});
          if (response.status === 200){
            setgetProfilePhotoFromIPFS(response.data[0].profilephoto)
          }
          } catch (error) {
            
          }
        }
      }
      readProfilePhoto();
    }, [loading, getProfilePhotoFromIPFS, isConnected, address])

    //update cover photo
    const updateCoverPhoto = async () => {
      if(isConnected){
        setLoading(true) 
      try {
        const formData = new FormData();
        formData.append('file', theCoverPhoto);
        const response = await axios.post('/api/uploadcoverphoto', formData);
        if (response.status === 200) {
          const cid = response.data.cid;
          console.log('File uploaded:', cid);
          const request = await axios.post('/api/updatecoverphoto', { coverphoto: cid, walletaddress: address });
          if (request.status === 200) {
            console.log("Cover photo updated successfully");
            setShowCoverPhotoSection(false);
          }
          else if (request.status === 201) {
            console.log("Cover photo added successfully");
            setShowCoverPhotoSection(false);
          }
        }
      } catch (error) {
        console.error('Error uploading:', error.message);
        setLoading(false) 
      }
      finally {
          setLoading(false)
       }
    }
    };

       //read cover photo from IPFS
        const [getCoverPhotoFromIPFS, setgetCoverPhotoFromIPFS] = useState()
        useEffect(()=> {
          const readCoverPhoto = async () => {
            if (isConnected){
              try {
              const response = await axios.post("/api/getcoverphoto", {walletaddress:address});
              if (response.status === 200){
                setgetCoverPhotoFromIPFS(response.data[0].coverphoto)
              }
              } catch (error) {
                
              }
            }
          }
          readCoverPhoto();
        }, [loading, getCoverPhotoFromIPFS, isConnected, address])

  //read from NFT contract for user details and collection details
  const [userRBTCbalance, setuserRBTCbalance] = useState()
  const [registeredUsername, setregisteredUsername] = useState()
  const [soldBalance, setSoldBalance] = useState()
  const [dateJoined, setDateJoined] = useState()
  const [epochDateJoined, setepochDateJoined] = useState()
  const [allPublicCollections, setAllPublicCollections] = useState([])
  const [userCollections, setUserCollections] = useState([])
  useEffect(()=>{
    const getTheData = async() => {
      if(isConnected){
         //read settings first
         const ethersProvider = new BrowserProvider(walletProvider) 
         const nftContractReadSettings = new Contract(nftContractAddress, nftContractABI, ethersProvider)       
       try {
        const RBTCbalance = await ethersProvider.getBalance(address)
        const parseRBTCbalance = formatUnits(RBTCbalance, 18);
        console.log(parseRBTCbalance)
        setuserRBTCbalance(parseRBTCbalance)
        const userDetails = await nftContractReadSettings.users(address)
        console.log(userDetails)
        const registeredusername = userDetails.username.toString()
        console.log(registeredusername)
        setregisteredUsername(registeredusername)
        const datejoined = userDetails.joined_at.toString()
        setepochDateJoined(datejoined)
        const convertedDateJoined = new Date(datejoined.toString() * 1000).toLocaleString()
        setDateJoined(convertedDateJoined)
        const soldbalance = userDetails.balance.toString()
        console.log("sold:" + soldbalance)
        const parsedSoldBalance = parseFloat(formatUnits(soldbalance, 18)).toFixed(10)
        setSoldBalance(parsedSoldBalance)
        const allpubliccollections = await nftContractReadSettings.getallPublicCollections()
        console.log(allpubliccollections)
        setAllPublicCollections(allpubliccollections)
        const specificuserdetails = await nftContractReadSettings.getUserDetails(address)
        const specificusercollections = specificuserdetails._collections
        setUserCollections(specificusercollections)
        console.log(specificusercollections)
      } catch (error) {
        console.log(error)
      }
    }
    }
    getTheData();  
  }, [isConnected, address, loading])

  //read for collection items
  const [chosenCollectionItems, setchosenCollectionItems] = useState([])
  const [collectionTitle, setCollectionTitle] = useState()
  const [aCollectionCategory, setaCollectionCategory] = useState()
    const getItemsData = async(initialCollectionContract) => {
      if(isConnected){
         //read settings first
         const ethersProvider = new BrowserProvider(walletProvider) 
         const nftContractReadSettings = new Contract(nftContractAddress, nftContractABI, ethersProvider)       
       try {
        const specificuserdetails = await nftContractReadSettings.getUserDetails(address)
        const specificuseritems = specificuserdetails._items
        console.log(specificuseritems)
        console.log("contract" + initialCollectionContract)
        const chosenCollectionArray = []
        for (let i = 0; i < specificuseritems.length; i++){
          if (specificuseritems[i][1] === initialCollectionContract){
            const specificuseritem = specificuserdetails._items[i]
            chosenCollectionArray.push(specificuseritem)
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
    
   //read for single collection item creator
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
        const specificuserdetails = await nftContractReadSettings.getUserDetails(address)
        const specificuseritems = specificuserdetails._items
        const chosenItemArray = []
        for (let i = 0; i < specificuseritems.length; i++){
          if (specificuseritems[i][4] === initialItemID){
            const specificuseritem = specificuserdetails._items[i]
            chosenItemArray.push(specificuseritem)
          }
        }
        setChosenItem(chosenItemArray)
      } catch (error) {
        console.log(error)
      }
    }
    }

      //now we are going to create a collection
      const [username, setUsername] = useState()
      const [collectionName, setCollectionName] = useState()
      const [publicVisibility, setpublicVisibility] = useState()
      const [collectionCategory, setcollectionCategory] = useState("Art")
      const createNFTcollection = async () => {
        if(isConnected){
         setLoading(true) 
         const ethersProvider = new BrowserProvider(walletProvider) 
         const signer = await ethersProvider.getSigner()
         const nftContractWriteSettings = new Contract(nftContractAddress, nftContractABI, signer)
         try {
          if (registeredUsername.length > 0){
            const createcollection = await nftContractWriteSettings.createCollection(registeredUsername, collectionName, publicVisibility, collectionCategory);
          }
          else {
            const createcollection = await nftContractWriteSettings.createCollection(username, collectionName, publicVisibility, collectionCategory);
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

      //getting file upload cid
      const [theHash, setTheHash] = useState();
      const [theFile, setTheFile] = useState()
      const uploadFile = async () => {
        if(isConnected){
          setLoading(true) 
        try {
          const formData = new FormData();
          formData.append('file', theFile);
    
          const response = await axios.post('/api/server', formData);
          if (response.status === 200) {
            setTheHash(response.data.cid);
            console.log('File uploaded to IPFS:', response.data.cid);
          }
        } catch (error) {
          console.error('Error uploading to IPFS:', error.message);
          setLoading(false)
        }
        finally {
          setLoading(false)
         }
      }
      };

      //function to set collection visibility
      const collectionVisibility = async (initialCollectionContractAddress, visibility) => {
        if(isConnected){
         setLoading(true) 
         const ethersProvider = new BrowserProvider(walletProvider) 
         const signer = await ethersProvider.getSigner()
         const nftContractWriteSettings = new Contract(nftContractAddress, nftContractABI, signer)
         try {
          const collectionvisibility = await nftContractWriteSettings.changeCollectionVisisbility(initialCollectionContractAddress, visibility);
         } catch (error) {
          console.log(error)
          setLoading(false)
         }
         finally {
          setLoading(false)
         }
        }
      }

      //now we are going to add item to a collection
      const [itemTitle, setItemTitle] = useState()
      const [collectionContractAddress, setcollectionContractAddress] = useState()
      const [itemPrice, setItemPrice] = useState()
      const [itemCategory, setItemCategory] = useState("Art")
      const [itemDescription, setItemDescription] = useState()
      const addItemToNFTcollection = async () => {
        if(isConnected){
         setLoading(true) 
         const ethersProvider = new BrowserProvider(walletProvider) 
         const signer = await ethersProvider.getSigner()
         const nftContractWriteSettings = new Contract(nftContractAddress, nftContractABI, signer)
         console.log(collectionContractAddress)
         try {
          const addtocollection = await nftContractWriteSettings.addItemToCollection(collectionContractAddress, itemTitle, theHash, itemDescription, itemCategory, parseUnits(itemPrice, 18));
         } catch (error) {
          console.log(error)
          setLoading(false)
         }
         finally {
          setLoading(false)
         }
        }
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
          const buynft = await nftContractWriteSettings.buyItem({value:parseUnits(convertedInitialAmount, 18)}, initialID);
         } catch (error) {
          console.log(error)
          setLoading(false)
         }
         finally {
          setLoading(false)
         }
        }
      }


  return (
    <div>
      <div className="font-[500] bg-[#502] px-[0.4cm] py-[0.15cm] rounded-md mb-[0.2cm]" style={{ display: 'inline-block', boxShadow: '2px 2px 2px 2px #333' }}>
        Profile
      </div>
      <div className="text-[#ccc] text-[90%]">View or update your profile</div>

      <div className='mt-[1cm] profileinfo'>
        <div className='lg:pt-[5cm] pt-[3.5cm]' style={{backgroundImage: getCoverPhotoFromIPFS ? `url(${getCoverPhotoFromIPFS})` : "url(/images/canon6.jpg)", backgroundSize:"100%"}}>
        {!showCoverPhotoSection ?
        (<div className='bg-[rgba(0,0,0,0.7)] mr-[0.2cm] lg:mt-[-4.8cm] mt-[-3.3cm] px-[0.2cm] py-[0.1cm] float-right clear-both cursor-pointer' onClick={(e) => setShowCoverPhotoSection(true)} style={{display:"inline-block"}}>
          <span>Edit</span> <img src="images/edit.png" width="17" className='mt-[-0.15cm] cursor-pointer' style={{display:"inline-block"}} />
        </div>) :
        (<div className='float-right lg:mt-[-3.8cm] mt-[-2.3cm] mr-[0.2cm]'> 
          <input type="file" className='p-[0.1cm] bg-[#001] rounded-md outline-[#fff] w-[6cm]' id="theCoverPhoto" name="theCoverPhoto" onChange={(e) => settheCoverPhoto(e.target.files[0])} style={{border:"2px solid #00f"}} /><br />
          <button className='px-[0.3cm] py-[0.1cm] mt-[0.1cm] bg-[#002] rounded-md font-[500] generalbutton4' onClick={(e) => {e.preventDefault(); updateCoverPhoto(theCoverPhoto, address)}} style={{border:"2px solid #333"}}>Update <img src="images/upload.png" width="20" style={{display:"inline-block"}} /></button>
         </div>)}
          <div className='pl-[0.5%]' style={{display:"inline-block"}}>
            <img src= {getProfilePhotoFromIPFS ? `${getProfilePhotoFromIPFS}` : "images/blank.png"} className='lg:w-[13%] w-[20%] mb-[0.2cm]' style={{boxShadow:"2px 2px 2px 2px rgba(0,0,0,0.5)", display:"inline-block"}} />
            {!showProfilePhotoSection ? 
            (<img src="images/edit2.png" width="25" className='lg:ml-[-7.5%] ml-[-12.5%] cursor-pointer rounded-[100%]' onClick={(e) => setShowProfilePhotoSection(true)} style={{display:"inline-block", boxShadow:"2px 2px 5px 2px #000"}} />) :
            (<div className='my-[0.2cm]'> 
          <input type="file" className='p-[0.1cm] bg-[#001] rounded-md outline-[#fff] w-[6cm]' id="theProfilePhoto" name="theProfilePhoto" onChange={(e) => settheProfilePhoto(e.target.files[0])} style={{border:"2px solid #00f"}} />
          <button className='px-[0.3cm] py-[0.1cm] bg-[#002] rounded-md font-[500] generalbutton4' onClick={(e) => {e.preventDefault(); updateProfilePhoto(theProfilePhoto, address)}} style={{border:"2px solid #333"}}>Update <img src="images/upload.png" width="20" style={{display:"inline-block"}} /></button>
          </div>)
          } 
          </div>
        </div>

        <div className='p-[0.5cm] bg-[#000]'>
       <div className='clear-both'>
        <span className='lg:text-[200%] md:text-[180%] text-[150%] font-[500]'>{registeredUsername ? (<span>{registeredUsername}</span>) : (<span>user</span>)}</span>
        <span className='float-right mt-[0.1cm] font-[500]'>{soldBalance > 0 ? (<span>Total sales: {soldBalance} RBTC</span>) : (<span>Total sales: 0 RBTC</span>)}</span>
       </div>
        <div>
          <span>{address ? (<span>{address.substring(0, 4)}...{address.substring(36, 42)}</span>) : (<span>Connect wallet</span>)}</span>
          {/* <span className='float-right mt-[-0.2cm]'>
            {showTipAmount ? 
            (<span><form><button className='bg-[#502] px-[0.3cm] py-[0.08cm] rounded-md' onClick={(e) => {e.preventDefault(); tipCreator(amountToTip)}} style={{border:"2px solid #aaa"}}>Donate</button>
            <input data-aos="fade-left" type="number" className='w-[2.13cm] pl-[0.2cm] bg-[#111] ml-[0.2cm] rounded-md' value={amountToTip} onChange={(e) => setamountToTip(e.target.value)} placeholder='amount' style={{border: "2px solid #aaa"}} /></form></span>) : 
            (<span className='bg-[#502] px-[0.3cm] py-[0.08cm] rounded-md cursor-pointer' onClick={(e) => setshowTipAmount(true)} style={{border:"2px solid #aaa"}}>Donate</span>)
           }
          </span> */}
        </div>
        <div className='mt-[0.2cm] text-[#eee] text-[90%]'>{epochDateJoined > 0 ? (<span><span className='px-[0.2cm] py-[0.1cm] bg-[#502] rounded-md' style={{border:"2px solid #555"}}>Joined:</span> {dateJoined}</span>) : (<span></span>)}</div>
        </div>
      </div>

    <div className='mt-[0.8cm]'>
      <div style={{display:mainNFTsdivDisplay}}>
      <div>
      <div className='text-center'>
        <Link href="#uploadFiles"><button onClick={(e) => controlUploadButton(e)} className={`m-[0.2cm] px-[0.3cm] py-[0.13cm] bg-[${uploadFilesBg}] rounded-md`} style={{boxShadow:`2px 2px 2px 2px ${uploadFilesShadow}`}}>Upload files</button></Link>
        <Link href="#AllYourNFTCollections"><button onClick={(e) => controlNFTsButton(e)} className={`m-[0.2cm] px-[0.3cm] py-[0.13cm] bg-[${yourNFTsBg}] rounded-md`} style={{boxShadow:`2px 2px 2px 2px ${yourNFTsShadow}`}}>Your collections</button></Link>
      </div>
      {profileDisplayComponent != "uploadFiles" &&
      (<div className='text-center mt-[0.5cm] '>
        <span className='bg-[#000] text-[#fff] px-[0.5cm] py-[0.2cm] rounded-full' style={{border:"2px solid #00f"}}>
        <form onSubmit={(e) => {e.preventDefault(); handleSearch(searchQuery)}} style={{display:"inline-block"}}>
        <input type="text" placeholder="Search by name or collection..." onChange={(e) => setSearchQuery(e.target.value)} className='bg-[#000] w-[5cm] placeholder-[#fff] text-[#fff] text-[90%] outline-none' /><img src="images/search.png" width="20" className='ml-[0.2cm] cursor-pointer' onClick={(e) => {e.preventDefault(); handleSearch(searchQuery)}} style={{display:"inline-block"}}/>
        </form>
        </span>
      </div>)}
      </div>

      {profileDisplayComponent === "uploadFiles" &&
      (<div data-aos={aosValue} id="uploadFiles" className='mt-[1cm]' style={{border:"1px solid #333", backgroundImage:"url(/images/canon3.jpg)", backgroundRepeat:"no-repeat", backgroundPositionX:"50%"}}>
        <div className='p-[0.5cm] bg-[rgba(0,0,0,0.85)]'>   
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
        <div className='grid-cols-1 bg-[rgba(0,0,0,0.7)] p-[0.5cm]' style={{border:"1px solid #333"}}>
          <div className='font-[500] mb-[0.3cm] text-[120%]'>Create a collection</div>
        {registeredUsername ? 
        (<input type="text" className='p-[0.2cm] bg-[#000]  rounded-md outline-none w-[100%] mb-[0.3cm]' name="username" value={registeredUsername} style={{border:"2px solid #00f"}} />) :
        (<input type="text" className='p-[0.2cm] bg-[#001] rounded-md outline-[#fff] w-[100%] mb-[0.3cm]' name="username" onChange={(e) => setUsername(e.target.value)} placeholder="Create a username" style={{border:"2px solid #00f"}} />)}
        <input type="text" className='p-[0.2cm] bg-[#001] rounded-md outline-[#fff] w-[100%] mb-[0.3cm]' name="collectionName" onChange={(e) => setCollectionName(e.target.value)} placeholder="Create a name for collection" style={{border:"2px solid #00f"}} />
        <select className='bg-[#001] p-[0.2cm] text-[#fff] rounded-md outline-[#fff] mb-[0.3cm] w-[100%]' onClick={(e) => setcollectionCategory(e.target.value)} style={{border:"2px solid #00f"}}>
            <option className='py-[0.2cm]' value="Art">Art</option>
            <option className='py-[0.2cm]' value="Fashion">Fashion</option>
            <option className='py-[0.2cm]' value="Portrait">Portrait</option>
            <option className='py-[0.2cm]' value="Lifestyle">Lifestyle</option>
            <option className='py-[0.2cm]' value="Photography">Photography</option>
          </select>
        <div className='pl-[0.3cm]'>
        <div className='text-[#aaa]'>Is collection public or private?</div>
        <div className='mt-[0.2cm]'>
          <div><input type="radio" name="collectionvisibility" onChange={(e) => setpublicVisibility(true)} /> Public</div>
          <div><input type="radio" name="collectionvisibility" onChange={(e) => setpublicVisibility(false)} /> Private</div>
        </div>
        </div>
        <button onClick={(e) => {e.preventDefault(); createNFTcollection(username, collectionName, publicVisibility, collectionCategory)}} className='px-[0.3cm] py-[0.2cm] w-[100%] font-[500] mt-[0.5cm] bg-[#502] rounded-md generalbutton'>Create collection <img src="images/collection.png" width="20" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button>
        </div>
        <div className='grid-cols-1 bg-[rgba(0,0,0,0.7)] p-[0.5cm]' style={{border:"1px solid #333"}}>
          <div className='font-[500] mb-[0.3cm] text-[120%]'>Add an item to your collection (<span>{userCollections ? (userCollections.length) : (0)}</span>)</div>
          {userCollections.length > 0 ? 
          (<select className='bg-[#001] p-[0.2cm] text-[#fff] rounded-md outline-[#fff] mb-[0.3cm] w-[100%]' onClick={(e) => setcollectionContractAddress(e.target.value)} style={{border:"2px solid #00f"}}>
            {userCollections.map((data) => (
               <option className='py-[0.2cm]' value={data[2]}>{data[0]}</option>
            ))}
          </select>) : 
          (
            <select className='bg-[#001] p-[0.2cm] text-[#fff] rounded-md outline-[#fff] mb-[0.3cm] w-[100%]' style={{border:"2px solid #00f"}}>
               <option className='py-[0.2cm]'>You are yet to create a collection</option>
          </select>
          )}
        <input type="text" className='p-[0.2cm] bg-[#001] rounded-md outline-[#fff] w-[100%] mb-[0.3cm]' value={itemTitle} onChange={(e) => setItemTitle(e.target.value)} placeholder="Give your item a title" style={{border:"2px solid #00f"}} />
        <select className='bg-[#001] p-[0.2cm] text-[#fff] rounded-md outline-[#fff] mb-[0.3cm] w-[100%]' onClick={(e) => setItemCategory(e.target.value)} style={{border:"2px solid #00f"}}>
            <option className='py-[0.2cm]' value="Art">Art</option>
            <option className='py-[0.2cm]' value="Fashion">Fashion</option>
            <option className='py-[0.2cm]' value="Portrait">Portrait</option>
            <option className='py-[0.2cm]' value="Lifestyle">Lifestyle</option>
            <option className='py-[0.2cm]' value="Photography">Photography</option>
          </select>
        <textarea className='p-[0.2cm] h-[2cm] bg-[#001] rounded-md outline-[#fff] w-[100%] mb-[0.3cm]' name="itemDescription" onChange={(e) => setItemDescription(e.target.value)} placeholder="Give your item a description" style={{border:"2px solid #00f"}} />
        <div className='mb-[0.3cm]'>
          <input type="file" className='p-[0.2cm] bg-[#001] rounded-md outline-[#fff] w-[100%] mb-[0.3cm]' id="theFile" name="theFile" onChange={(e) => setTheFile(e.target.files[0])} style={{border:"2px solid #00f"}} />
          <button className='px-[0.3cm] py-[0.2cm] bg-[#002] rounded-md font-[500] generalbutton4' onClick={(e) => {e.preventDefault(); uploadFile(theFile)}} style={{border:"2px solid #333"}}>Upload file <img src="images/upload.png" width="20" style={{display:"inline-block"}} /></button>
        </div>
        <div className='text-center mb-[0.3cm] lg:mx-[20%] md:mx-[10%] mx-[5%] '><img src={theHash} className='mx-[auto]' /></div>
        <input type="number" className='p-[0.2cm] bg-[#001] rounded-md outline-[#fff] w-[100%] mb-[0.3cm]' value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} placeholder="Set a price for your item e.g 1 RBTC" style={{border:"2px solid #00f"}} />
        <button className='px-[0.3cm] py-[0.2cm] w-[100%] font-[500] bg-[#502] rounded-md generalbutton' onClick={(e) => {e.preventDefault(); addItemToNFTcollection(collectionContractAddress, itemTitle, theHash, itemDescription, itemCategory, itemPrice)}}>Add to collection <img src="images/collection2.png" width="23" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button>
        </div>
        </div>
        </div>
        </div>
      )}

      {profileDisplayComponent === "AllYourNFTCollections" &&
      (<div data-aos={aosValue} id='AllYourNFTCollections' className='mt-[1cm] lg:p-[1cm] lg:pt-[1.5cm] viewthediv p-[0.5cm] bg-[#000]'>
        <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-8">
          {userCollections.map((data) => (
          <div key={data[0]} className="grid-cols-1">
            <div className='px-[1cm] py-[2cm] userfundingrequestsdiv bg-[#000]' style={{boxShadow:"3px 3px 2px 2px #333"}}>
              <div className='text-center text-[120%]'>{data[0]}</div>
            </div>
            <div className='mt-[0.3cm]'>
            <button onClick={(e) => controlCollectionsDiv() & getItemsData(data[2]) & setCollectionTitle(data[0]) & setaCollectionCategory(data[1])} className='bg-[#502] rounded-md px-[0.3cm] py-[0.1cm] m-[0.2cm] generalbutton' style={{border:"2px solid #aaa"}}>View collection <img src="images/add.png" width="17" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button>
            {data[4] === false && (<button onClick={(e) => {e.preventDefault(); collectionVisibility(data[2], true)}} className='bg-[#002] rounded-md px-[0.3cm] py-[0.1cm] m-[0.2cm] generalbutton2' style={{border:"2px solid #aaa"}}>Publish <img src="images/post.png" width="17" style={{display:"inline-block"}} /></button>)}
            {data[4] === true && (<button onClick={(e) => {e.preventDefault(); collectionVisibility(data[2], false)}} className='text-[#900] bg-[#000] rounded-md px-[0.3cm] py-[0.1cm] m-[0.2cm] generalbutton2' style={{border:"2px solid #aaa"}}>Unpublish <img src="images/post.png" width="17" style={{display:"inline-block"}} /></button>)}
            </div>
          </div>
          ))}
        </div>
        </div>
      </div>
      )}
      </div>

   {collectionDivDisplay === "block" && 
   (<div style={{display:collectionDivDisplay}}>
    <img src="images/cancel.png" width="40" onClick={(e) => controlCollectionsDivHide()} className='mx-[auto] cancelbutton rounded-[100%] cursor-pointer' />
    <div className='mt-[1cm] lg:p-[1cm] top-0 viewthediv2 p-[0.5cm]' style={{zIndex:"9999"}}>
      <div className='text-[120%]'><span className='font-[500]'>Collection:</span> {collectionTitle} ({chosenCollectionItems.length})</div>
      <div className='mb-[0.5cm] text-[110%] text-[#ccc]'><span className='font-[500]'>Collection category:</span> {aCollectionCategory}</div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8">
          {chosenCollectionItems.map((data) => (
            <div className="grid-cols-1">
            <div><img src={data[9]} className="rounded-2xl w-[100%] lg:h-[8cm]" style={{border:"4px solid #aaa"}} /></div>
            <div className="lg:text-[130%] text-[120%] mt-[0.3cm] mx-[0.2cm]">Title: {data[7]}</div>
            <div className="lg:text-[120%] text-[110%] mx-[0.2cm]">Category: {data[8]}</div>
            <div className='mx-[0.2cm] text-[#aaa]'><span className=''>Price: </span><span className='font-[500]'>{data[2].toString() * 10 **-18} RBTC</span></div>
            <button onClick={(e) => controlSingleNFTDiv(e) & getSingleItemData(data[4]) & getItemCreator(data[0])} className='text-[aaa] bg-[#002] rounded-md px-[0.3cm] py-[0.1cm] m-[0.2cm] generalbutton3' style={{border:"2px solid #aaa"}}>View NFT <img src="images/eye-ball.png" width="25" className='mt-[-0.1cm]' style={{display:"inline-block"}} /></button>
            </div>
          ))}
        </div>
   </div>
   </div>)}

  {singleNFTdisplay === "block" && 
  (<div style={{display:singleNFTdisplay}}>
    <img src="images/crossed.png" width="45" onClick={(e) => controlSingleNFTDivHide()} className='mx-[auto] p-[0.2cm] bg-[#000] cancelbutton rounded-[100%] cursor-pointer' />
    <div className='mt-[1cm] viewthediv lg:p-[0.8cm] p-[0.5cm]' style={{zIndex:"9999"}}>
      {chosenItem.map((data) => (
     <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>
     <div className='grid-cols-1'>
     <img src={data[9]} className='rounded-xl' style={{boxShadow:"2px 2px 5px 2px rgba(0,0,0,0.5)"}} />
     </div>
     <div className='grid-cols-1 lg:col-span-2'>
       <div><span className='rounded-md px-[0.3cm] py-[0.15cm] bg-[#00f]' style={{boxShadow:"2px 2px 2px 2px #333"}}>Creator:</span> &nbsp; <img src="images/user.png" width="25" className='mt-[-0.1cm]' style={{display:"inline-block"}} /> {theItemCreatorUsername}</div>
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
         <div className='text-[150%] font-[500]'>{data[2].toString() * 10 **-18} RBTC</div>
         {(data[10] === false && data[0] != address) && (<button onClick={(e) => {e.preventDefault(); buyNFT((data[2].toString() * 10 **-18), data[4])}} className='px-[0.3cm] py-[0.2cm] bg-[#502] generalbutton w-[100%] mt-[0.2cm] rounded-md font-[500]'>Buy</button>)}
         {data[10] === true && (<button className='px-[0.3cm] py-[0.2cm] bg-[#050] cursor-default w-[100%] mt-[0.2cm] rounded-md font-[500]' style={{filter:"blur(0.045cm)"}}>Sold</button>)}
         {data[10] === false && (<button className='px-[0.3cm] py-[0.2cm] text-[#000] bg-[#d7b644] cursor-default w-[100%] mt-[0.2cm] rounded-md font-[500]'>Make offer (coming soon!)</button>)}
       </div>
      </div>
     </div>
    </div>
      ))}
    </div>
  </div>)
  }
   </div>

   {loading ? 
     (<div className='bg-[rgba(0,0,0,0.8)] text-[#000] text-center w-[100%] h-[100%] top-0 right-0' style={{position:"fixed", zIndex:"9999"}}>
      <div className='loader mx-[auto] lg:mt-[20%] md:mt-[40%] mt-[50%]'></div>
      </div>) : (<span></span>)  
     }

    </div>
  );
}
