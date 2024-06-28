import { useState, useEffect } from "react";
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'
import { BrowserProvider, Contract, formatUnits } from 'ethers'
import { useRouter } from "next/router";

export default function DAOgovernance () {
    // wallet connect settings
    const { address, chainId, isConnected } = useWeb3ModalAccount()
    const { walletProvider } = useWeb3ModalProvider()
    const router = useRouter()

    //styling for governance
    const [displayDAOFeature, setdisplayDAOFeature] = useState("viewProposals")
    const [joinDAOshadow, setjoinDAOshadow] = useState("#333")
    const [viewProposalsShadow, setviewProposalsShadow] = useState("#fff")
    const [createProposalsShadow, setcreateProposalsShadow] = useState("#333")
    const [viewUserProposalsShadow, setviewUserProposalsShadow] = useState("#333")
    const [requestFundingShadow, setRequestFundingShadow] = useState("#333")
    const [fundingRequestsShadow, setfundingRequestsShadow] = useState("#333")
    const [yourFundingRequestsShadow, setyourFundingRequestsShadow] = useState("#333")
    const [loading, setLoading] = useState()

    const showAndSetJoinDAO = () => {
        setdisplayDAOFeature("joinDAO")
        setjoinDAOshadow("#fff")
        setviewProposalsShadow("#333")
        setcreateProposalsShadow("#333")
        setviewUserProposalsShadow("#333")
        setRequestFundingShadow("#333")
        setfundingRequestsShadow("#333")
        setyourFundingRequestsShadow("#333")
    }

    const showAndSetViewProposals = () => {
        setdisplayDAOFeature("viewProposals")
        setjoinDAOshadow("#333")
        setviewProposalsShadow("#fff")
        setcreateProposalsShadow("#333")
        setviewUserProposalsShadow("#333")
        setRequestFundingShadow("#333")
        setfundingRequestsShadow("#333")
        setyourFundingRequestsShadow("#333")
    }

    const showAndSetCreateProposals = () => {
        setdisplayDAOFeature("createProposals")
        setjoinDAOshadow("#333")
        setviewProposalsShadow("#333")
        setcreateProposalsShadow("#fff")
        setviewUserProposalsShadow("#333")
        setRequestFundingShadow("#333")
        setfundingRequestsShadow("#333")
        setyourFundingRequestsShadow("#333")
    }

    const showAndSetviewUserProposals = () => {
        setdisplayDAOFeature("viewUserProposals")
        setjoinDAOshadow("#333")
        setviewProposalsShadow("#333")
        setcreateProposalsShadow("#333")
        setviewUserProposalsShadow("#fff")
        setRequestFundingShadow("#333")
        setfundingRequestsShadow("#333")
        setyourFundingRequestsShadow("#333")
    }

    const showAndSetRequestFunding = () => {
      setdisplayDAOFeature("requestFunding")
      setjoinDAOshadow("#333")
      setviewProposalsShadow("#333")
      setcreateProposalsShadow("#333")
      setviewUserProposalsShadow("#333")
      setRequestFundingShadow("#fff")
      setfundingRequestsShadow("#333")
      setyourFundingRequestsShadow("#333")
  }

  const showAndSetfundingRequests = () => {
    setdisplayDAOFeature("fundingRequests")
    setjoinDAOshadow("#333")
    setviewProposalsShadow("#333")
    setcreateProposalsShadow("#333")
    setviewUserProposalsShadow("#333")
    setRequestFundingShadow("#333")
    setfundingRequestsShadow("#fff")
    setyourFundingRequestsShadow("#333")
}

const showAndSetYourFundingRequests = () => {
  setdisplayDAOFeature("yourFundingRequests")
  setjoinDAOshadow("#333")
  setviewProposalsShadow("#333")
  setcreateProposalsShadow("#333")
  setviewUserProposalsShadow("#333")
  setRequestFundingShadow("#333")
  setfundingRequestsShadow("#333")
  setyourFundingRequestsShadow("#fff")
}


    return (
       <div>
        
        <div className="text-center">
          <button onClick={(e) => showAndSetJoinDAO(e)} className="bg-[#00f] px-[0.3cm] py-[0.12cm] rounded-md m-[0.2cm] joindao" style={{boxShadow:`2px 2px 2px 2px ${joinDAOshadow}`}}>Join DAO</button>
          <button onClick={(e) => showAndSetViewProposals(e)} className="bg-[#00f] px-[0.3cm] py-[0.12cm] rounded-md m-[0.2cm]" style={{boxShadow:`2px 2px 2px 2px ${viewProposalsShadow}`}}>All Proposals</button>
          <button onClick={(e) => showAndSetCreateProposals(e)} className="bg-[#00f] px-[0.3cm] py-[0.12cm] rounded-md m-[0.2cm]" style={{boxShadow:`2px 2px 2px 2px ${createProposalsShadow}`}}>Create a Proposal</button>
          <button onClick={(e) => showAndSetviewUserProposals(e)} className="bg-[#00f] px-[0.3cm] py-[0.12cm] rounded-md m-[0.2cm]" style={{boxShadow:`2px 2px 2px 2px ${viewUserProposalsShadow}`}}>Your Proposals</button>
          <button onClick={(e) => showAndSetRequestFunding(e)} className="bg-[#00f] px-[0.3cm] py-[0.12cm] rounded-md m-[0.2cm]" style={{boxShadow:`2px 2px 2px 2px ${requestFundingShadow}`}}>Request for Funding</button>
          <button onClick={(e) => showAndSetfundingRequests(e)} className="bg-[#00f] px-[0.3cm] py-[0.12cm] rounded-md m-[0.2cm]" style={{boxShadow:`2px 2px 2px 2px ${fundingRequestsShadow}`}}>All Funding Requests</button>
          <button onClick={(e) => showAndSetYourFundingRequests(e)} className="bg-[#00f] px-[0.3cm] py-[0.12cm] rounded-md m-[0.2cm]" style={{boxShadow:`2px 2px 2px 2px ${yourFundingRequestsShadow}`}}>Your Funding Requests</button>
        </div> 

        <div className="text-[120%] lg:text-[180%] md:text-[150%] font-[500] text-center my-[1cm]">Coming soon!</div>

  </div>
    )
}