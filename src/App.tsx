import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { MdOutlineBolt } from "react-icons/md";
import { GiRocketThruster, GiShield, GiSpikyExplosion, GiCrossMark, GiCardPickup } from "react-icons/gi";
import { IoPersonSharp } from "react-icons/io5";
import { FaExclamationTriangle, FaSuperpowers, FaUnlock } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import CrewCard from './Components/CardComponents/CrewCard'
import ShipPartsCard from './Components/CardComponents/ShipPartsCard'
import ContractCard from './Components/CardComponents/ContractCards'
import ObjectiveCards from './Components/CardComponents/ObjectiveCards'
import CrewCardData from './CardDecks/CrewCardsData.json'
import ShipCardData from './CardDecks/ShipPartsData.json'
import ContractCardData from './CardDecks/ContractCardsData.json'
import ObjectiveCardsData from './CardDecks/ObjectiveCardsData.json'
import './App.css'

function App() {

  const cardSymbols: { [key: string]: any } = {
    reactor: {
      symbol: <MdOutlineBolt />,
      color: "bg-blue-600"
    },
    thruster: {
      symbol: <GiRocketThruster />,
      color: "bg-black"
    },
    shield: {
      symbol: <GiShield />,
      color: "bg-green-700"
    },
    damage1: {
      symbol: <GiSpikyExplosion />,
      color: "bg-yellow-600"
    },
    damage2: {
      symbol: [<GiSpikyExplosion />, <GiSpikyExplosion />],
      color: "bg-yellow-600"
    },
    damage3: {
      symbol: [<GiSpikyExplosion />, <GiSpikyExplosion />, <GiSpikyExplosion />],
      color: "bg-yellow-600"
    },
    agent: {
      symbol: <IoPersonSharp />,
      color: "bg-purple-700"
    },
    miss: {
      symbol: <GiCrossMark />,
      color: "bg-slate-700"
    },
    hazardDie: {
      symbol: <FaExclamationTriangle />,
      color: "bg-red-700"
    },
    prestige: {
      symbol: <FaSuperpowers />,
      color: "bg-black"
    },
    credits: {
      symbol: <RiMoneyDollarCircleFill />,
      color: "bg-black"
    },
    bonusCard: {
      symbol: <GiCardPickup />,
      color: "bg-black"
    },
    unlock: {
      symbol: <FaUnlock />,
      color: "bg-black"
    }
  }

  let crewCardData = CrewCardData
  let shipCardData = ShipCardData
  let contractCardData = ContractCardData
  let objectiveCardsData = ObjectiveCardsData
  
  return (
    <div className="w-screen h-fit flex flex-row justify-evenly align-middle">
      <CrewCard dataForCrewCards={crewCardData} cardSymbols={cardSymbols} />
      <ShipPartsCard dataForShipParts={shipCardData} cardSymbols={cardSymbols} />
      <ContractCard dataForContractCards={contractCardData} cardSymbols={cardSymbols} />
      <ObjectiveCards secretObj={objectiveCardsData} cardSymbols={cardSymbols} />
    </div>
  )
}

export default App
