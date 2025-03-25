import React from "react"
import ActionCards from "./ActionCards.tsx"
import { MdOutlineBolt } from "react-icons/md"
import { ShipPartsArray } from "../../Interfaces.tsx"

interface Props {
  dataForShipParts: ShipPartsArray,
  cardSymbols: { [key: string]: any }
}

export function ShipPartsCard ({ dataForShipParts, cardSymbols }: Props) {

  const shipPartsCards = dataForShipParts.shipParts.map((shipPartData) => {
    // console.log(shipPartData, "<--FOR REF")
    return (
      <div key={`${shipPartData.key}`} className={`${shipPartData.name}-${shipPartData.brand}-ship-part flex flex-col justify-center items-center w-[15vw] h-[15vw] border-[3px] border-black mb-[.3vw]`}>
        <div className={`pic-name-and-acards bg-${shipPartData.image} w-[100%] h-[60%] border-[1px] border-red-600`}>
          <div className="name-and-acards-box flex flex-row justify-between w-[100%] h-[30%] border-[.5px] border-sky-500">
            <div className="title-box flex w-[50%] h-[100%]">
              <p className="part-name">{shipPartData.name}</p>
            </div>
            <div className="action-cards-awarded flex flex-row justify-end items-center w-[50%] h-[100%]">
              {<ActionCards cardsOfAction={shipPartData} cardSymbols={cardSymbols} />}
            </div>
          </div>
        </div>
        <div className="ability-brand-and-cost-box flex flex-row w-[100%] h-[40%] border-[1px] border-green-600">
          <div className="special-ability-box flex items-center w-[80%] h-[100%] border-[.5px] border-yellow-300">
            <p className="special-ability-description text-center text-balance">{shipPartData.specialAbility}</p>
          </div>
          <div className="brand-and-cost-box flex flex-col justify-evenly items-center w-[20%] h-[100%] border-[.5px] ">
            <div className="part-brand">{shipPartData.brand}</div>
            <div className="part-cost">{shipPartData.cost}</div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className="flex flex-col justify-center">
      {shipPartsCards}
    </div>
  )
}

export default ShipPartsCard;