// import React from "react";
// import CrewCardsData from "../CardDecks/CrewCardsData.json"
import { CrewCardsArray } from '../../Interfaces.tsx'

interface Props {
  dataForCrewCards: CrewCardsArray,
  cardSymbols: { [key: string]: any }
}

export function CrewCard ({ dataForCrewCards, cardSymbols }: Props) {

  // console.log(dataForCrewCards, "<--- CREW CARD DATA")

  const crewCards = dataForCrewCards.crewCards.map((cardData) => {
    return (
      <div key={`${cardData.key}`} className={`${cardData.name}-${cardData.role}-crew-card card-outer w-[15vw] h-[40vh] flex flex-col justify-center items-center border-[3px] bg-stone-800 border-black mb-[.3vw]`}>
        {/* <img src={dataForCrewCard.image}></img> */}
        <div className={`pic-and-role bg-[${cardData.image}] w-[100%] h-[55%] border-[2px] border-red-600`}>
          <p className="role-tag border-[.5px] border-sky-400 text-right">{cardData.role}</p>
        </div>
        <p className="crew-name text-center w-[100%] h-[15%] border-[2px] border-red-600">{cardData.name}</p>
        <div className="info-box flex flex-row w-[100%] h-[30%] border-[.5px] border-green-400">
          <div className="special-ability flex items-center w-[80%] h-[100%] border-[.5px] border-yellow-400">
            <p className="ability-description text-[.8vw] text-center text-balance">{cardData.specialAbility}</p>
          </div>
          <div className="type-and-cost flex flex-col justify-evenly w-[20%] h-[100%] text-center border-[.5px] border-blue-400">
            <div className="type">{cardData.type}</div>
            <div className="cost">{cardData.cost}</div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className="flex flex-col justify-center">
      {crewCards}
    </div>
  )
}

export default CrewCard;