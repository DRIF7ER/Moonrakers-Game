import { ActionCards } from "../CardComponents/ActionCards"
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiCardPickup } from "react-icons/gi";
import { FaSuperpowers } from "react-icons/fa";
import { ContractCardsArray } from "../../Interfaces";

interface Props {
  dataForContractCards: ContractCardsArray,
  cardSymbols: { [key: string]: any }
}

export function ContractCard ({ dataForContractCards, cardSymbols }: Props) {
  // console.log(dataForContractCards.contractCards, "<-- CONTRACTS")

  const contractCards = dataForContractCards.contractCards.map((contract) => {
    // console.log(contract, "<-- A CONTRACT")
    return (
      <div key={`${contract.key}`} className={`flex flex-col w-[15vw] h-[40vh] justify-between items-center border-[3px] bg-${contract.image} bg-stone-800 border-black mb-[.3vw]`}>
        <div className="title-and-rewards-box flex flex-row justify-around items-center w-[100%] h-[80%] border-[.5px] border-sky-500">
          <div className="title-and-type-box flex flex-col w-[70%] h-[100%] border border-sky-600">
            <p>{contract.name}</p>
            <p>{contract.type}</p>
          </div>
          <div className="rewards-box flex flex-col w-[30%] h-[100%] border border-blue-500">
            <div className={`prestige flex flex-col justify-start items-center w-[100%] h-[20%]`}>
              <div className="prestige-number z-1 absolute text-md pt-[.3%]">
                {contract.rewards.prestige}
              </div>
              <div className="z-0 text-4xl">
                {cardSymbols.prestige.symbol}
              </div>
            </div>
            <div className="rewards flex flex-col justify-start items-center w-[100%] h-[20%]">
              <div className="z-0 absolute border rounded-[50%] h-[4%]">
                <div className="credit-number z-2 text-md flex flex-col items-center pt-[20%]">
                  {contract.rewards.credits}
                </div>
                <div className="z-1 text-4xl bg-stone-800 rounded-[50%]">
                  {cardSymbols.credits.symbol}
                </div>
              </div>
            </div>
            {contract.rewards.bonusCard ? 
              <div className="rewards flex flex-col justify-center items-center w-[100%] h-[30%]">
                <div className="bonus-card-bg-circle z-0 absolute border rounded-[50%] w-[2%] h-[4%]">
                  <div className="bcard-count z-2 text-md flex flex-col items-center pt-[18%]">
                    {contract.rewards.bonusCard}
                  </div>
                  <div className="flex flex-col justify-center items-center w-[75%] h-[75%] z-1 text-2xl bg-stone-800 rounded-[50%] border-[4px] border-l-[1px] border-r-[6px] border-stone-800 ml-[13%]">
                    {cardSymbols.bonusCard.symbol}
                  </div>
                </div>
              </div>
            : null}
          </div>
        </div>
        <div className="requirements-box flex flex-row w-[100%] h-[20%] justify-between border-[.5px] border-yellow-300">
          <ActionCards cardsOfAction={contract.contractRequirements} cardSymbols={cardSymbols} />
        </div>
      </div>
    )
  })

  return (
    <div className="flex flex-col justify-center items-center">
      {contractCards}
    </div>
  )
}

/**
* In the ContractCardData.json file, the actionCards in contractRequirements are structured as follows:
*  "actionCards": [
          {
            "type": "reactor",
            "number": number
          },
          {
            "type": "thruster",
            "number": number
          },
          {
            "type": "damage1",
            "number": number
          },
          {
            "type": "agent",
            "number": number
          },
          {
            "type": "hazardDie",
            "number": number
          }
        ]
* Beacuse of how I've made ActionCards.tsx work, only put the cards that have a non-zero number in that array.
*/

export default ContractCard