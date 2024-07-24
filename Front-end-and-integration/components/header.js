import Head from 'next/head';
import { useState, useEffect } from "react";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

export default function Header(){
  //control menu display for small device
  const [menu, setmenu] = useState(true)
  const changemenubehaviour1 = () => {
    setmenu(false)
  }
  const changemenubehaviour2 = () => {
    setmenu(true)
  }

  //mount the AOS library
  useEffect(() => {
    AOS.init();
  }, [])

  
    return (
      <div>

       {/* header for large devices */}
      <div className='text-center w-[100%] py-[0.1cm] text-[#fff] bg-[rgba(5,5,5,0.95)] headerdivforlarge' style={{boxShadow:"-1px 1px 1px 1px rgba(0,0,0,0.2)", zIndex:"999", position:"fixed", transition:"0.3s ease-in-out"}}>
      <Link href="/"><img src="images/logo.png" width="120" style={{display:"inline-block"}} alt="logo" /></Link>
      <div className='ml-[1cm]' style={{display:"inline-block"}}>
      <Link href="/dashboard"><button className='ml-[1cm] menuitems'>Creators</button><img src="images/creator.png" width="25" className='ml-[0.2cm]' style={{display:"inline-block"}}/></Link>
      <Link href="/dashboard"><button className='ml-[1cm] menuitems'>Marketplace</button><img src="images/nft.png" width="25" className='ml-[0.2cm]' style={{display:"inline-block"}}/></Link>
      <Link href="/dashboard"><button className='ml-[1cm] menuitems'>Profile</button><img src="images/profile.png" width="22" className='ml-[0.2cm]' style={{display:"inline-block"}}/></Link>
      </div>
      <div className='ml-[1.2cm]' style={{display:"inline-block"}}>
      <span className='text-[#fff] font-[600]'>NFT marketplace, Creators, DAO, on Rootstock</span>
      <img src="images/tRBTC.png" width="30" className='ml-[0.2cm] rounded-[100%]' style={{display:"inline-block"}} />
      </div>
      <div className="ml-[1cm] mb-[0.2cm]" style={{display:"inline-block"}}>
      <w3m-button />
      </div>
      </div>


      {/* header for small devices */}
      <div className='w-[100%] headerdivforsmallandmedium' style={{position:"fixed", zIndex:"999"}}>
      {menu ? 
      (<div className='px-[0.3cm] pb-[0.3cm] bg-[rgba(5,5,5,0.95)]' style={{display:"block"}}>
      <img src="images/menu.png" width="35" onClick={(e) => changemenubehaviour1(e)} className='cursor-pointer my-[auto] pt-[0.3cm]' style={{display:"inline-block"}}/>
      <Link href="/"><img src="images/logo.png" width="100" className='float-right' style={{display:"inline-block"}}/></Link>
      </div>) : 
 
      (<div className='bg-[rgba(0,0,0,0.85)] pb-[100%]'>
      <div data-aos="fade-right" className='bg-[#111] text-[#fff] w-[90%] pb-[15%]' style={{boxShadow:"2px 2px 4px 2px #502"}}>
      <div className='py-[0.3cm] px-[0.2cm] text-right' style={{boxShadow:"-2px 0px 5px 2px #000", display:"block"}}><img src="images/cancel.png" width="40" onClick={(e) => changemenubehaviour2(e)} className='cursor-pointer' style={{display:"inline-block"}} /></div>
      <div className='px-[0.5cm]'>
       <Link href="/dashboard" onClick={(e) => changemenubehaviour2(e)}><div className='py-[0.5cm] menuitems4' style={{borderBottom:"3px solid #000"}}>Creators <img src="images/creator.png" width="25" className='ml-[0.2cm]' style={{display:"inline-block"}}/></div></Link>
       <Link href="/dashboard" onClick={(e) => changemenubehaviour2(e)}><div className='py-[0.5cm] menuitems4' style={{borderBottom:"3px solid #000"}}>Marketplace <img src="images/nft.png" width="25" className='ml-[0.2cm]' style={{display:"inline-block"}}/></div></Link>
       <Link href="/dashboard" onClick={(e) => changemenubehaviour2(e)}><div className='py-[0.5cm] menuitems4' style={{borderBottom:"3px solid #000"}}>Profile <img src="images/profile.png" width="22" className='ml-[0.2cm]' style={{display:"inline-block"}}/></div></Link>
       
       <div className="text-center pt-[1cm]" style={{zIndex:"9999"}}>
       <span className='m-[auto]'><w3m-button /></span>
       </div>
       <div className='mt-[1cm]' style={{display:"block"}}>
       <Link href="/" onClick={(e) => changemenubehaviour2(e)}><img src="images/logo.png" width="140" style={{display:"inline-block"}}/></Link>
       <Link href="https://rootstock.io/" onClick={(e) => changemenubehaviour2(e)}><img src="images/tRBTC.png" width="30" className='ml-[0.5cm] rounded-[100%]' style={{display:"inline-block"}}/></Link>
       </div>
      </div>
      </div>
      </div>)
       }
      </div> 

      </div>
    )
}