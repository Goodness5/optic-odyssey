import Head from 'next/head';
import { useState, useEffect } from "react";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import Header from '@/components/header';
import { useRouter } from 'next/router';

export default function Home(){
  useEffect(() => {
    AOS.init();
  }, [])

  // create countdown for dashboard navigation
  const [count, setCount] = useState(120);
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(countdownInterval);
  }, []);

  //navigate to dashboard page
  const [allowAutoNav, setAllowAutoNav] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const autoNav = allowAutoNav && setTimeout(() => {
      router.push("/dashboard");
    }, 120000);

    // Cleanup function to clear the timeout when the component is unmounted or auto navigation is stopped
    return () => clearTimeout(autoNav);
}, [allowAutoNav, router])

  //stop navigation to dashboard page
  const stopNav = () => {
    setAllowAutoNav(false)
  }

  return (
    <>
    <Head>
   <title>Optic Odyssey - Explore and make your photos work for you.</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   </Head>
   <div>
   <Header />
   <div className='lg:mx-[8%] mx-[5%] pt-[3cm]'>


   <div className='lg:mx-[-8%] mx-[-5%] lg:pb-[10%] pb-[50%] firstsectiondiv' style={{backgroundImage:"url(images/studio.jpg)", transition:"0.3s ease-in-out"}}>
   <div className='text-center text-[150%] lg:text-[220%] md:text-[180%] pt-[1.5cm] font-[500] text-[#502]'>Explore, discover and make your photos/assets work for you on Rootstock</div>
   <div className='text-center my-[0.5cm]'><img src="images/photographer.png" className='m-[auto]' width="50" /></div>
   <div className='mt-[1cm] text-center lg:text-[140%] text-[120%] lg:mx-[20%] md:mx-[10%] mx-[5%] p-[1cm] lg:px-[2cm] text-[#ccc] bg-[rgba(0,0,0,0.9)]' style={{border:"1px solid #502"}}>
    <div data-aos="fade-in" className='info1' style={{transition:"0.5s ease-in-out"}}>
     Optic Odyssey NFT Marketplace: Explore and turn your photos into NFTs on Rootstock. The NFT marketplace is where all NFTs created on Optic Odyssey are being sold.
     You can fix a price for your NFTs or set them up for bidding. Highest bidder can then buy the NFT. Defaulters of the marketplace will be penalized.
     Listing an NFT on the marketplace is free and only the buyer pays for transaction fees. These transaction fees will be used to fund photographers/creators seeking for funding.
    </div>
    <div data-aos="fade-in" className='info2' style={{transition:"0.5s ease-in-out"}}>
    DAO: All photographers and creators from anywhere in the world, all cultures of life have an option to join the Optic Odyssey DAO. By becoming a member of the DAO, you are able to 
    request for funding and make governance decisions and vote in the DAO.
    </div>
    <div data-aos="fade-in" className='info3' style={{transition:"0.5s ease-in-out"}}>
    Profile: All it takes to turn your photos into NFTs is to create a profile, and by the powerful application of the Filebase AWS SDK, upload your photos and publish.
    </div>
    </div>
   </div>
   <div className='mt-[1cm] text-center' style={{transition:"0.3s ease-in-out"}}>
    <Link href="/dashboard"><button className='m-[0.2cm] rounded-md bg-[#502] px-[0.3cm] py-[0.2cm] text-[#fff] generalbutton ecobutton' style={{border:"2px solid #502"}}>Explore NFT marketplace <img src="images/nft.png" width="25" className='ml-[0.2cm]' style={{display:"inline-block"}}/></button></Link>
    <Link href="https://github.com/Goodness5/optic-odyssey"><button className='m-[0.2cm] rounded-md bg-[#111] px-[0.3cm] py-[0.2cm] text-[#fff] generalbutton docbutton' style={{border:"2px solid #502"}}>Documentation <img src="images/documentation.png" width="25" className='ml-[0.2cm]' style={{display:"inline-block"}}/></button></Link>
    <Link href="/dashboard"><button className='m-[0.2cm] rounded-md bg-[#111] px-[0.3cm] py-[0.2cm] text-[#fff] generalbutton daobutton' style={{border:"2px solid #502"}}>Optic Odyssey DAO <img src="images/dao.png" width="25" className='ml-[0.2cm]' style={{display:"inline-block"}}/></button></Link>
   </div>
   {allowAutoNav ? (<div className='text-center mt-[1cm]'>You will be automatically navigated to the dashboard in {count} seconds....</div>) : 
   (<div className='text-center mt-[1cm]'>Automatic navigation cancelled....</div>)}
   <div className='text-center mb-[1cm]'>
    {allowAutoNav ? (<button onClick={(e) => stopNav(e)} className='fa-fade mt-[0.5cm] rounded-md bg-[#fff] px-[0.3cm] py-[0.2cm] text-[#001]' style={{boxShadow:"2px 2px 2px 2px #502", animationDuration:"5s"}}>Cancel auto navigation</button>) : (<div></div>)}
   </div>
   </div>

   </div>
  </>
  );
};

