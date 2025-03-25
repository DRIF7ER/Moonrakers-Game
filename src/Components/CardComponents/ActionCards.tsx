import { ActionCardsArray } from "../../Interfaces";

interface Props {
  cardsOfAction: ActionCardsArray,
  cardSymbols: { [key: string]: any }
}

export function ActionCards({ cardsOfAction, cardSymbols }: Props) {
  // console.log(cardsOfAction.hazardDie, "<-- IN ACTION CARDS")

  let constructKey = `${Math.random()}`
  // console.log(constructKey, "<-- IN ACTION CARDS")

  const cardsAwarded = cardsOfAction.actionCards.map((actionCards) => {
    // console.log(actionCards, "<-- actionCards")

    return (
      <>
        <div className={`actiion-cards-required flex flex-col justify-center items-center w-[30%] h-[100%] ${cardSymbols[actionCards.type].color}`}>
          <div className={`graphics-container flex`}>
            {
            actionCards.type != 'hazardDie'
            && actionCards.number >= 1
            ?
            cardSymbols[actionCards.type].symbol : null
            }
          </div>
          {
          cardSymbols[actionCards.type].symbol 
          && actionCards.number != 0 
          && actionCards.type != 'hazardDie' 
          ? actionCards.number : null
          }
        </div>
      </>
    )
  })

  return (
    <>
      {cardsOfAction.actionCards[0].for === "part card" ?
        <div key={`${constructKey}`} className={`flex flex-row justify-end items-center w-[100%] h-[100%]`}>
          { cardsAwarded }
        </div>
      : null}
      {cardsOfAction.actionCards[0].for === "contract card" ?
        <div key={`${constructKey}`} className={`flex flex-row justify-start items-center w-[75%] h-[100%]`}>
          { cardsAwarded }
        </div>
      : null}
      {
        cardsOfAction.hazardDie ? 
          <div key={`${cardsOfAction.hazardDie}${constructKey}`} className={`haz-die-box flex flex-col justify-center items-center w-[25%] ${cardSymbols[cardsOfAction.hazardDie.type].color}`}>
            {cardSymbols[cardsOfAction.hazardDie.type].symbol}
            {cardsOfAction.hazardDie ? 
            cardsOfAction.hazardDie.number
            : null}
          </div>
        : null
      }
    </>
  )
}

export default ActionCards;