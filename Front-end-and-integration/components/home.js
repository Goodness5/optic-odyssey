import { useState, useEffect } from "react";
    export default function Dashboardhome({displayComponent, setDisplayComponent}) {
    
    return (
        <div className="lg:p-[0.5cm]">

      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
        <div className="grid-cols-1">
        <div className="lg:text-[280%] md:text-[250%] text-[200%] font-[500]"><img src="images/camera.png" width="80" className="mt-[-0.3cm]" style={{display:"inline-block"}} /> Explore and make your photos work for you</div>
        <div className="mt-[0.5cm]">
            Turn your art and creativity into NFTs, request for funding, connect with fellow photographers and creators from all over the world.
        </div>
        <div className="mt-[1cm]">
        <button className="font-[500] text-[#fff] bg-[#00f] px-[0.7cm] py-[0.3cm] rounded-full">Explore</button>
        <span className="ml-[0.2cm]" style={{display:"inline-block"}}>Discover NFTs on Optic Odyssey</span>
        </div>
        <div className="mt-[0.5cm]">
        <button className="font-[500] text-[#fff] bg-[#00f] px-[0.7cm] py-[0.3cm] rounded-full">Join DAO</button>
        <span className="ml-[0.2cm]" style={{display:"inline-block"}}>Need funding?</span>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-8 mt-[1cm]">
       <div className="grid-cols-1">
        <div className="text-[150%] font-[500]">$200,000</div>
        <div className="text-[#aaa]">Total sales</div>
       </div>
       <div className="grid-cols-1">
        <div className="text-[150%] font-[500]">$25,000</div>
        <div className="text-[#aaa]">Funds raised</div>
       </div>
       <div className="grid-cols-1">
        <div className="text-[150%] font-[500]">50</div>
        <div className="text-[#aaa]">Photographers</div>
       </div>
       <div className="grid-cols-1">
        <div className="text-[150%] font-[500]">18</div>
        <div className="text-[#aaa]">Collections</div>
       </div>
       </div>
        </div>
        <div className="grid-cols-1">
            <img src="images/hubcover2.jpg" className="rounded-2xl lg:w-[80%] lg:float-right" style={{boxShadow:"5px 5px 10px 2px #000"}} />
        </div>
      </div>

      <div className="mt-[2cm]">
        <div>
        <div className="lg:text-[200%] md:text-[180%] text-[150%] font-[500]">Trending Collections <img src="images/nft.png" width="35" style={{display:"inline-block"}} /></div>
        <div className="text-[#aaa]">Checkout our daily updated trending collection on the marketplace.</div>
        </div>
        <div className="mt-[1cm]">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-8">
            <div className="grid-cols-1">
                <div><img src="images/asa.png" className="rounded-2xl" style={{border:"4px solid #aaa"}} /></div>
                <div className="grid grid-cols-2 gap-4 mt-[0.5cm]">
                    <div className="grid-cols-1 rounded-2xl" style={{border:"4px solid #aaa"}}><img src="images/asa.png" className="rounded-xl" /></div>
                    <div className="grid-cols-1 rounded-2xl bg-[#502] lg:text-[150%] text-[120%]" style={{border:"4px solid #aaa", placeItems:"center", display:"grid"}}><div>50+</div></div>
                </div>
                <div className="font-[500] lg:text-[130%] text-[120%] mt-[0.3cm]">Moment by moment</div>
            </div>
            <div className="grid-cols-1">
                <div><img src="images/studio.jpg" className="rounded-2xl" style={{border:"4px solid #aaa"}} /></div>
                <div className="grid grid-cols-2 gap-4 mt-[0.5cm]">
                    <div className="grid-cols-1 rounded-2xl" style={{border:"4px solid #aaa"}}><img src="images/studio.jpg" className="rounded-xl" /></div>
                    <div className="grid-cols-1 rounded-2xl bg-[#502] lg:text-[150%] text-[120%]" style={{border:"4px solid #aaa", placeItems:"center", display:"grid"}}><div>26+</div></div>
                </div>
                <div className="font-[500] lg:text-[130%] text-[120%] mt-[0.3cm]">Fashion showoff</div>
            </div>
            <div className="grid-cols-1">
                <div><img src="images/style.jpg" className="rounded-2xl" style={{border:"4px solid #aaa"}} /></div>
                <div className="grid grid-cols-2 gap-4 mt-[0.5cm]">
                    <div className="grid-cols-1 rounded-2xl" style={{border:"4px solid #aaa"}}><img src="images/style.jpg" className="rounded-xl" /></div>
                    <div className="grid-cols-1 rounded-2xl bg-[#502] lg:text-[150%] text-[120%]" style={{border:"4px solid #aaa", placeItems:"center", display:"grid"}}><div>15+</div></div>
                </div>
                <div className="font-[500] lg:text-[130%] text-[120%] mt-[0.3cm]">Embrace, breath, live</div>
            </div>
        </div>
        </div>
      </div>

      <div className="mt-[2cm]">
        <div>
        <div className="lg:text-[200%] md:text-[180%] text-[150%] font-[500]">Top Creators <img src="images/photographer.png" width="30" className="mt-[-0.3cm]" style={{display:"inline-block"}} /></div>
        <div className="text-[#aaa]">Take a look at the NFT Marketplace's top creators.</div>
        </div>
        <div className="mt-[1cm]">
            <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-4">
            <div className="grid-cols-1 rounded-2xl bg-[#000]">
                <img src="images/humphreyo.png" className="rounded-t-2xl h-[9cm] w-[100%]" />
                <div className="mt-[0.2cm] p-[0.5cm]">
                <div className="text-[150%] font-[500]">Humphreyo</div>
                <div className="text-[#aaa]">Total sales: $20,500</div>
                <div className="text-[#ccc] font-[500]"><span>Total collections:</span> 1</div>
                </div>
                </div>
                <div className="grid-cols-1 rounded-2xl bg-[#000]">
                <img src="images/david.jpg" className="rounded-t-2xl h-[9cm] w-[100%]" />
                <div className="mt-[0.2cm] p-[0.5cm]">
                <div className="text-[150%] font-[500]">David_Xaj</div>
                <div className="text-[#aaa]">Total sales: $29,100</div>
                <div className="text-[#ccc] font-[500]"><span>Total collections:</span> 5</div>
                </div>
                </div>
                <div className="grid-cols-1 rounded-2xl bg-[#000]">
                <img src="images/priya.jpg" className="rounded-t-2xl h-[9cm] w-[100%]" />
                <div className="mt-[0.2cm] p-[0.5cm]">
                <div className="text-[150%] font-[500]">Priya</div>
                <div className="text-[#aaa]">Total sales: $22,700</div>
                <div className="text-[#ccc] font-[500]"><span>Total collections:</span> 2</div>
                </div>
                </div>
                <div className="grid-cols-1 rounded-2xl bg-[#000]">
                <img src="images/daniel.jpg" className="rounded-t-2xl h-[9cm] w-[100%]" />
                <div className="mt-[0.2cm] p-[0.5cm]">
                <div className="text-[150%] font-[500]">Daniel Ekeng</div>
                <div className="text-[#aaa]">Total sales: $27,000</div>
                <div className="text-[#ccc] font-[500]"><span>Total collections:</span> 3</div>
                </div>
                </div>
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
                <div className="grid-cols-1 rounded-2xl bg-[#001]">
                <img src="images/art.jpg" className="rounded-t-2xl h-[9cm] w-[100%]" />
                <div className="mt-[0.2cm] p-[0.5cm]">
                <div className="text-[150%] font-[500]">Art</div>
                </div>
                </div>
                <div className="grid-cols-1 rounded-2xl bg-[#001]">
                <img src="images/portrait.jpg" className="rounded-t-2xl h-[9cm] w-[100%]" />
                <div className="mt-[0.2cm] p-[0.5cm]">
                <div className="text-[150%] font-[500]">Portrait</div>
                </div>
                </div>
                <div className="grid-cols-1 rounded-2xl bg-[#001]">
                <img src="images/lifestyle.jpg" className="rounded-t-2xl h-[9cm] w-[100%]" />
                <div className="mt-[0.2cm] p-[0.5cm]">
                <div className="text-[150%] font-[500]">Lifestyle</div>
                </div>
                </div>
                <div className="grid-cols-1 rounded-2xl bg-[#001]">
                <img src="images/fashion.jpg" className="rounded-t-2xl h-[9cm] w-[100%]" />
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
                 <div className="px-[0.4cm] py-[0.15cm] bg-[#00f] rounded-md font-[500]" style={{display:"inline-block"}}>Request for Funding</div>
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
                 <div className="px-[0.4cm] py-[0.15cm] bg-[#00f] rounded-md font-[500]" style={{display:"inline-block"}}>Create a Proposal</div>
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
                 <div className="px-[0.4cm] py-[0.15cm] bg-[#00f] rounded-md font-[500]" style={{display:"inline-block"}}>Vote for a Proposal</div>
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
                <img src="images/dao.png" width="130" className="mx-[auto] pt-[1cm]" />
                <div className="p-[0.5cm]">
                 <div className="text-center text-[120%] font-[500]">DAO membership</div>
                 <div className="mt-[0.2cm] text-[#aaa]">
                    All photographers and creators have an option to join the Optic Odyssey DAO. By becoming a member of the DAO, you are able to request for funds and make governance decisions and vote in the DAO.
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
            </div>
        </div>
      </div>

        </div>
    )
}