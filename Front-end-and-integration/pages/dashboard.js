import Head from 'next/head';
import { useState, useEffect } from "react";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import OpticodysseydaoSection from '@/components/opticodysseydao';
import Dashboardhome from '@/components/home';
import Profile from '@/components/profile';
import Creators from '../components/creators';
import Marketplace from '@/components/marketplace';

export default function Dashboard(){
  //initialize the AOS library
  useEffect(() => {
    AOS.init();
  }, []) 

  //mount ecosystem components upon button clicks and change menu items background
  const [displayComponent, setDisplayComponent] = useState("home")
  const [bgColor1, setBgColor1] = useState("#502")
  const [bgColor2, setBgColor2] = useState("#111")
  const [bgColor3, setBgColor3] = useState("#111")
  const [bgColor4, setBgColor4] = useState("#111")
  const [bgColor5, setBgColor5] = useState("#111")
  const changeBg1 = () => {
    setBgColor1("#502")
    setBgColor2("#111")
    setBgColor3("#111") 
    setBgColor4("#111") 
    setBgColor5("#111") 
      }
      const changeBg2 = () => {
        setBgColor1("#111")
        setBgColor2("#502")
        setBgColor3("#111") 
        setBgColor4("#111") 
        setBgColor5("#111") 
          }
          const changeBg3 = () => {
            setBgColor1("#111")
            setBgColor2("#111")
            setBgColor3("#502") 
            setBgColor4("#111") 
            setBgColor5("#111")  
              }
              const changeBg4 = () => {
                setBgColor1("#111")
                setBgColor2("#111")
                setBgColor3("#111") 
                setBgColor4("#502") 
                setBgColor5("#111")  
                  }
                  const changeBg5 = () => {
                    setBgColor1("#111")
                    setBgColor2("#111")
                    setBgColor3("#111") 
                    setBgColor4("#111") 
                    setBgColor5("#502") 
                      }

    //useState to mount and unmount small device dashboard menu
    const [mountSmallMenu, setMountSmallMenu] = useState()

  return (
    <>
    <Head>
   <title>Optic Odyssey - Explore, discover NFTs and make your photos work for you</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   </Head>
   <div>

    <div className='dashboardmenulg h-[100%] bg-[#111] text-[#fff]' style={{zIndex:"999", position:"fixed", boxShadow:"2px 2px 2px 2px #502", overflow:"auto"}}> 
     <div className='px-[0.5cm] py-[0.6cm] text-center' style={{display:"block"}}>
       <Link href="/"><img src="images/logo.png" width="150" className='mt-[0.8cm]' style={{display:"inline-block"}}/></Link>
       <Link href="https://rootstock.io"><img src="images/tRBTC.png" width="30" className='ml-[0.3cm] rounded-[100%]' style={{display:"inline-block"}}/></Link>
     </div>
      <div>
      <div className='p-[0.4cm] menuitems4' onClick={(e) => setDisplayComponent("home") & changeBg1(e)} style={{background:bgColor1}}>Home <img src="images/home.png" width="20" className='ml-[0.2cm] mt-[-0.2cm]' style={{display:"inline-block"}}/></div>
      <div className='p-[0.4cm] menuitems4' onClick={(e) => setDisplayComponent("profile") & changeBg2(e)} style={{background:bgColor2}}>Profile <img src="images/profile.png" width="20" className='ml-[0.2cm] mt-[-0.2cm]' style={{display:"inline-block"}}/></div>
      <div className='p-[0.4cm] menuitems4' onClick={(e) => setDisplayComponent("creators") & changeBg4(e)} style={{background:bgColor4}}>Creators <img src="images/creator.png" width="25" className='ml-[0.2cm]' style={{display:"inline-block"}}/></div>
      <div className='p-[0.4cm] menuitems4' onClick={(e) => setDisplayComponent("marketplace") & changeBg5(e)} style={{background:bgColor5}}>NFT Marketplace <img src="images/nft.png" width="25" className='ml-[0.2cm]' style={{display:"inline-block"}}/></div>
      <div className='p-[0.4cm] menuitems4' onClick={(e) => setDisplayComponent("daogovernance") & changeBg3(e)} style={{background:bgColor3}}>DAO Governance <img src="images/dao.png" width="20" className='ml-[0.2cm]' style={{display:"inline-block"}}/></div>
      </div>
      <div className='mt-[30%] p-[0.5cm]' style={{display:"block"}}>
       <div><Link href="https://github.com/Goodness5/optic-odyssey/blob/master/README.md"><button className='m-[0.2cm] rounded-md bg-[#502] px-[0.3cm] py-[0.15cm] text-[#fff]'>Docs <img src="images/documentation.png" width="17" className='ml-[0.2cm]' style={{display:"inline-block"}}/></button></Link></div>
       <Link href="https://discord.com"><img src="images/discord.png" width="35" className='m-[0.2cm]' style={{display:"inline-block"}}/></Link>
       <Link href="https://x.com"><img src="images/twitter.png" width="35" className='m-[0.2cm]' style={{display:"inline-block"}}/></Link>
      </div>
   </div>

   {mountSmallMenu ? (<div className='dashboardmenusm w-[100%] h-[100%] bg-[rgba(0,0,0,0.6)]' style={{zIndex:"9999", position:"fixed", overflow:"auto"}}>
   <div className='w-[70%] h-[100%] bg-[#111] text-[#fff]' data-aos="fade-right" style={{boxShadow:"2px 2px 2px 2px #502", overflow:"auto"}}> 
     <div className='px-[0.5cm] py-[0.6cm] text-center' style={{display:"block"}}>
       <Link href="/"><img src="images/logo.png" width="150" onClick={(e) => setMountSmallMenu(false)} style={{display:"inline-block"}}/></Link>
       <Link href="https://rootstock.io"><img src="images/tRBTC.png" width="30" className='ml-[0.3cm] rounded-[100%]' onClick={(e) => setMountSmallMenu(false)} style={{display:"inline-block"}}/></Link>
     </div>
      <div>
      <div className='p-[0.4cm] menuitems4' onClick={(e) => setDisplayComponent("home") & changeBg1(e) & setMountSmallMenu(false)} style={{background:bgColor1}}>Home <img src="images/home.png" width="20" className='ml-[0.2cm]' style={{display:"inline-block"}}/></div>
      <div className='p-[0.4cm] menuitems4' onClick={(e) => setDisplayComponent("profile") & changeBg2(e) & setMountSmallMenu(false)} style={{background:bgColor2}}>Profile <img src="images/profile.png" width="20" className='ml-[0.2cm]' style={{display:"inline-block"}}/></div>
      <div className='p-[0.4cm] menuitems4' onClick={(e) => setDisplayComponent("creators") & changeBg4(e) & setMountSmallMenu(false)} style={{background:bgColor4}}>Creators <img src="images/creator.png" width="25" className='ml-[0.2cm]' style={{display:"inline-block"}}/></div>
      <div className='p-[0.4cm] menuitems4' onClick={(e) => setDisplayComponent("marketplace") & changeBg5(e) & setMountSmallMenu(false)} style={{background:bgColor5}}>NFT Marketplace <img src="images/nft.png" width="25" className='ml-[0.2cm]' style={{display:"inline-block"}}/></div>
      <div className='p-[0.4cm] menuitems4' onClick={(e) => setDisplayComponent("daogovernance") & changeBg3(e) & setMountSmallMenu(false)} style={{background:bgColor3}}>DAO Governance <img src="images/dao.png" width="20" className='ml-[0.2cm]' style={{display:"inline-block"}}/></div>
      </div>
      <div className='my-[1cm]'><img src="images/arrow.png" onClick={(e) => setMountSmallMenu(false)} className='closedashboardsmallmenu mx-[auto] cursor-pointer' width="50" /></div>
      <div className='mt-[20%] p-[0.5cm]' style={{display:"block"}}>
       <div><Link href="https://github.com/Goodness5/optic-odyssey/blob/master/README.md"><button onClick={(e) => setMountSmallMenu(false)} className='m-[0.2cm] rounded-md bg-[#502] px-[0.3cm] py-[0.15cm] text-[#fff]'>Docs <img src="images/documentation.png" width="17" className='ml-[0.2cm]' style={{display:"inline-block"}}/></button></Link></div>
       <Link href="https://discord.com"><img src="images/discord.png" width="35" className='m-[0.2cm]' onClick={(e) => setMountSmallMenu(false)} style={{display:"inline-block"}}/></Link>
       <Link href="https://x.com"><img src="images/twitter.png" width="35" className='m-[0.2cm]' onClick={(e) => setMountSmallMenu(false)} style={{display:"inline-block"}}/></Link>
      </div>
   </div>
   </div>) : (<span></span>)}

   <div className='ecosystemcomponentsarea bg-[#000] h-[100%]' style={{position:"fixed", overflow:"auto"}}>
   <div className='text-center w-[100%] p-[0.5cm] clear-both'><div className='float-right' style={{display:"inline-block"}}><w3m-button /></div></div>
   {mountSmallMenu ? (<span></span>) : (<div className='dashboardsmallmenubar clear-both text-right w-[100%] px-[1cm] pt-[0.3cm]'><img src="images/menu-bar.png" className='cursor-pointer' onClick={(e) => setMountSmallMenu(true)} width="30" style={{display:"inline-block"}}/></div>)}
   <div className='w-[100%]'>
   <img src="images/tRBTC.png" width="100" className='lg:mt-[10%] mt-[20%] ml-[5%] rounded-[100%] blurimage1' style={{position:"absolute"}} />
   <img src="images/tRBTC.png" width="100" className='lg:mt-[15%] mt-[25%] lg:ml-[85%] ml-[65%] rounded-[100%] blurimage2' style={{position:"absolute"}} />
   <img src="images/logo.png" width="200" className='lg:mt-[35%] mt-[100%] ml-[8%] blurimage2' style={{position:"absolute"}} />
   <img src="images/logo.png" width="200" className='lg:mt-[45%] mt-[105%] lg:ml-[85%] ml-[50%] blurimage1' style={{position:"absolute"}} />
   </div>
   <div className='w-[100%] p-[0.5cm] mt-[1cm]' style={{position:"absolute"}}>
    {displayComponent === "home" && (<div id="home" data-aos="zoom-in" className='dashboardcomponent homecomponent bg-[#111] lg:mx-[2cm] md:mx-[1cm] p-[0.5cm] rounded-xl mb-[1cm]' style={{boxShadow:"2px 2px 2px 2px #502", zIndex:"9999"}}>
      <Dashboardhome displayComponent={displayComponent} setDisplayComponent = {setDisplayComponent} changeBg3 = {changeBg3} changeBg4 = {changeBg4} changeBg5 = {changeBg5} />
    </div>)} 
    {displayComponent === "profile" && (<div id="profile" data-aos="zoom-in" className='dashboardcomponent bg-[#111] lg:mx-[2cm] md:mx-[1cm] p-[0.5cm] rounded-xl mb-[1cm]' style={{boxShadow:"2px 2px 2px 2px #502", zIndex:"9999"}}>
    <Profile displayComponent={displayComponent} />
    </div>)} 
    {displayComponent === "daogovernance" && (<div id="daogovernance" data-aos="zoom-in" className='dashboardcomponent bg-[#111] lg:mx-[2cm] md:mx-[1cm] p-[0.5cm] rounded-xl mb-[1cm]' style={{boxShadow:"2px 2px 2px 2px #502", zIndex:"9999"}}>
     <OpticodysseydaoSection />
    </div>)} 
    {displayComponent === "creators" && (<div id="creators" data-aos="zoom-in" className='dashboardcomponent bg-[#111] lg:mx-[2cm] md:mx-[1cm] p-[0.5cm] rounded-xl mb-[1cm]' style={{boxShadow:"2px 2px 2px 2px #502", zIndex:"9999"}}>
      <Creators />
    </div>)} 
    {displayComponent === "marketplace" && (<div id="marketplace" data-aos="zoom-in" className='dashboardcomponent bg-[#111] lg:mx-[2cm] md:mx-[1cm] p-[0.5cm] rounded-xl mb-[1cm]' style={{boxShadow:"2px 2px 2px 2px #502", zIndex:"9999"}}>
      <Marketplace />
    </div>)} 
   </div>
   </div>
   
  </div>
  </>
  );
};

