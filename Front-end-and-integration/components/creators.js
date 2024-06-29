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

export default function Creators() {
        // wallet connect settings
        const { address, chainId, isConnected } = useWeb3ModalAccount()
        const { walletProvider } = useWeb3ModalProvider()

      //loading state
      const [loading, setLoading] = useState()
  
      //initialize the AOS library
      useEffect(() => {
        AOS.init();
      }, []) 

    const [preferredDisplay, setpreferredDisplay] = useState("main")

    //read profiles of creators
   const [allCreators, setallCreators] = useState([])
   useEffect(()=> {
    const getCreators = async() => {
      if(isConnected){
         //read settings first
         const ethersProvider = new BrowserProvider(walletProvider) 
         const nftContractReadSettings = new Contract(nftContractAddress, nftContractABI, ethersProvider)       
       try {
        const getcreator = await nftContractReadSettings.getAllUsers()
        setallCreators(getcreator)
      } catch (error) {
        console.log(error)
      }
    }
    }
    getCreators();
   }, [])

       // read profile photo from IPFS
       const [getProfilePhotoFromIPFS, setgetProfilePhotoFromIPFS] = useState()
         const readProfilePhoto = async (initialAddress) => {
           if (isConnected){
             try {
             const response = await axios.post("/api/getprofilephoto", {walletaddress:initialAddress});
             if (response.status === 200){
               setgetProfilePhotoFromIPFS(response.data[0].profilephoto)
             }
             } catch (error) {
               
             }
           }
         }

       //read cover photo from IPFS
        const [getCoverPhotoFromIPFS, setgetCoverPhotoFromIPFS] = useState()
          const readCoverPhoto = async (initialAddress) => {
            if (isConnected){
              try {
              const response = await axios.post("/api/getcoverphoto", {walletaddress:initialAddress});
              if (response.status === 200){
                setgetCoverPhotoFromIPFS(response.data[0].coverphoto)
              }
              } catch (error) {
                
              }
            }
          }

  //read from NFT contract for creator details and collection details
  const [registeredUsername, setregisteredUsername] = useState()
  const [soldBalance, setSoldBalance] = useState()
  const [dateJoined, setDateJoined] = useState()
  const [epochDateJoined, setepochDateJoined] = useState()
  const [allPublicCollections, setAllPublicCollections] = useState([])
  const [userCollections, setUserCollections] = useState([])
  const [getAddress, setGetAddress] = useState()
  const [userNumberOfCollections, setUserNumberOfCollections] = useState()
    const getTheData = async(initialAddress) => {
      if(isConnected){
         //read settings first
         const ethersProvider = new BrowserProvider(walletProvider) 
         const nftContractReadSettings = new Contract(nftContractAddress, nftContractABI, ethersProvider)       
       try {
        const userDetails = await nftContractReadSettings.users(initialAddress)
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
        setGetAddress(initialAddress)
        const allpubliccollections = await nftContractReadSettings.getallPublicCollections()
        console.log(allpubliccollections)
        setAllPublicCollections(allpubliccollections)
        const specificuserdetails = await nftContractReadSettings.getUserDetails(initialAddress)
        const specificusercollections = specificuserdetails._collections
        setUserCollections(specificusercollections)
        console.log(specificusercollections)
        setUserNumberOfCollections(specificusercollections.length.toString())
      } catch (error) {
        console.log(error)
      }
    }
    }

         //function to tip creator
         const [showTipAmount, setshowTipAmount] = useState()
         const [amountToTip, setamountToTip] = useState()
         const tipCreator = async () => {
           if(isConnected){
            setLoading(true) 
            const ethersProvider = new BrowserProvider(walletProvider) 
            const signer = await ethersProvider.getSigner()
            const nftContractWriteSettings = new Contract(nftContractAddress, nftContractABI, signer)
            try {
             const tipcreator = await nftContractWriteSettings.tipUser(getAddress, {value:parseUnits(amountToTip, 18)});
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
    <div className="font-[500] bg-[#502] px-[0.4cm] py-[0.15cm] rounded-md mb-[0.2cm]" style={{display:"inline-block", boxShadow:"2px 2px 2px 2px #333"}}>Creators</div>
    <div className="text-[#ccc] text-[90%]">Take a look at the creators on Optic Odyssey</div>

       {preferredDisplay === "main" && 
       (
        <div className="mt-[1cm]">
          <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-4">
            {allCreators.map((data) => (
                <div className="grid-cols-1 rounded-xl bg-[#000]" style={{boxShadow:"2px 2px 5px 2px #502"}}>
                <img src="images/profile.png" className="mx-[auto] rounded-t-xl w-[30%] mt-[0.5cm]" />
                <div className="mt-[0.2cm] p-[0.5cm]">
                <div className="text-[150%] font-[500]">{data[0]}</div>
                <div className="text-[#aaa]">Total sales: {data[2].toString() * 10 ** -18} RBTC</div>
                <div className="text-[#ccc]"><span>Joined at:</span> {new Date(data[3].toString() * 1000).toLocaleString()}</div>
                <div onClick={(e) => {e.preventDefault(); getTheData(data[1]) & readProfilePhoto(data[1]) & readCoverPhoto(data[1]) & setpreferredDisplay("profile")}} className="font-[500] mt-[0.2cm] cursor-pointer" style={{display:"inline-block"}} ><img src="images/add.png" width="17" className="mt-[-0.05cm]" style={{display:"inline-block"}} /> View profile</div>
                </div>
                </div>
            ))}
            </div>
         </div>
       )}

        {preferredDisplay === "profile" && 
        (
          <div className='mt-[1cm] profileinfo'>
          <img src="images/cancel.png" width="40" onClick={(e) => setpreferredDisplay("main")} className='mx-[auto] mb-[1cm] cancelbutton rounded-[100%] cursor-pointer' />
         <div className='lg:pt-[5cm] pt-[3.5cm]' style={{backgroundImage: getCoverPhotoFromIPFS ? `url(${getCoverPhotoFromIPFS})` : "url(/images/canon6.jpg)", backgroundSize:"100%"}}>
           <div className='pl-[0.5%]' style={{display:"inline-block"}}>
             <img src= {getProfilePhotoFromIPFS ? `${getProfilePhotoFromIPFS}` : "images/blank.png"} className='lg:w-[13%] w-[20%] mb-[0.2cm]' style={{boxShadow:"2px 2px 2px 2px rgba(0,0,0,0.5)", display:"inline-block"}} />
           </div>
         </div>
 
         <div className='p-[0.5cm] bg-[#000]'>
        <div className='clear-both'>
         <span className='lg:text-[200%] md:text-[180%] text-[150%] font-[500]'>{registeredUsername ? (<span>{registeredUsername}</span>) : (<span>user</span>)}</span>
         <span className='float-right mt-[0.1cm] font-[500]'>{soldBalance > 0 ? (<span>Total sales: {soldBalance} RBTC</span>) : (<span>Total sales: 0 RBTC</span>)}</span>
        </div>
         <div>
           <span className='float-right mt-[-0.2cm]'>
             {showTipAmount ? 
             (<span><form><button className='bg-[#502] px-[0.3cm] py-[0.08cm] rounded-md' onClick={(e) => {e.preventDefault(); tipCreator(amountToTip)}} style={{border:"2px solid #aaa"}}>Donate</button>
             <input data-aos="fade-left" type="number" className='w-[2.13cm] pl-[0.2cm] bg-[#111] ml-[0.2cm] rounded-md' value={amountToTip} onChange={(e) => setamountToTip(e.target.value)} placeholder='amount' style={{border: "2px solid #aaa"}} /></form></span>) : 
             (<span className='bg-[#502] px-[0.3cm] py-[0.08cm] rounded-md cursor-pointer' onClick={(e) => setshowTipAmount(true)} style={{border:"2px solid #aaa"}}>Donate</span>)
            }
           </span>
         </div>
         <div className="mt-[0.2cm] font-[500]">{userNumberOfCollections > 0 ? (<span>Total collections: {userNumberOfCollections}</span>) : (<span>Total collections: 0</span>)}</div>
         <div className='mt-[0.2cm] text-[#eee] text-[90%]'>{epochDateJoined > 0 ? (<span><span className='px-[0.2cm] py-[0.1cm] bg-[#502] rounded-md' style={{border:"2px solid #555"}}>Joined:</span> {dateJoined}</span>) : (<span></span>)}</div>
         </div>
       </div>
        )}

    {loading ? 
     (<div className='bg-[rgba(0,0,0,0.8)] text-[#000] text-center w-[100%] h-[100%] top-0 right-0' style={{position:"fixed", zIndex:"9999"}}>
      <div className='loader mx-[auto] lg:mt-[20%] md:mt-[40%] mt-[50%]'></div>
      </div>) : (<span></span>)  
     }
    </div>
    )
}