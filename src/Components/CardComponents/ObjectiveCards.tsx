import { SecretObjectivesArray } from "../../Interfaces"

interface Props {
  secretObj: SecretObjectivesArray,
  cardSymbols: { [key: string]: any }
}

export function ObjectiveCards ({ secretObj, cardSymbols }: Props) {
  // console.log(secretObj, "<-- IN SECRET STUFFS")
  
  const secretObjCards = secretObj.secretObjectives.map((obj) => {
    // console.log(obj, "<-- OBJ")

    return (
      <div className={`${obj.title}-objective flex flex-col justify-between items-center w-[15vw] h-[15vw] border-[2px] border-red-700 mb-[3%]`}>
        <div className={`encrypted-and-prestige-box flex justify-center items-center w-[100%] h-[20%] border-[.5px]`}>
          <div className="unlock-symbol-box flex justify-center items-center w-[20%] h-[100%]">
            {cardSymbols.unlock.symbol}
          </div>
          <div className="encypted-box flex justify-center items-center w-[60%] h-[100%]">
            <p>ENCRYPTED</p>
          </div>
          <div className="prestige-box flex justify-center items-center w-[20%] h-[100%]">
            <div className="prestige-number z-1 absolute text-md">
              <p className="flex flex-col justify-center items-center text-pretty">{obj.prestige}</p>
            </div>
            <div className="prestige-symbol z-0 text-4xl">
              {cardSymbols.prestige.symbol}
            </div>
          </div>
        </div>
        <div className={`flex flex-col justify-center items-center w-[100%] h-[32%] border-[.5px]`}>
          <p className="flex flex-col justify-center items-center text-pretty">{obj.title}</p>
        </div>
        <div className={`flex flex-col justify-center items-center w-[100%] h-[32%] border-[.5px]`}>
          <p className="flex flex-col text-center text-pretty">{obj.objective}</p>
        </div>
      </div>
    )
  })

  return (
    <div className="flex flex-col justify-center items-center">
      {secretObjCards}
    </div>
  )
}

export default ObjectiveCards