export interface CrewCardsArray {
  crewCards: {
    "image": null | string,
    "name": string,
    "role": string,
    "type": string,
    "specialAbility": string,
    "cost": number,
    "key": string
  }[]
}

export interface ShipPartsArray {
  shipParts: {
    "image": null | string,
    "name": string,
    "brand": string,
    "actionCards": { "type": string, "number": number, "for": string }[],
    "specialAbility": string,
    "cost": number,
    "key": string
  }[]
}

export interface ContractCardsArray {
  contractCards: {
    "image": string | null,
    "name": string,
    "type": string,
    "rewards": {
      "prestige": number,
      "credits": number,
      "bonusCard"?: number | null
    },
    "contractRequirements": {
      "actionCards": { "type": string, "number": number, "for": string }[],
      "hazardDie": {"type": string, "number": number}
    },
    "key": string
  }[]
}

export interface SecretObjectivesArray {
  secretObjectives: {
    "title": string,
    "objective": string,
    "prestige": number
  }[]
}

export interface CrewCardInfo {
  "image": null | string,
  "name": string,
  "role": string,
  "type": string,
  "specialAbility": string,
  "cost": number,
  "key": string
}

export interface ShipPartInfo {
  "image": null | string,
  "name": string,
  "brand": string,
  "actionCards": { "type": string, "number": number, "for": string }[],
  "specialAbility": string,
  "cost": number,
  "key": string
}

export interface ContractCardInfo {
  "image": string | null,
  "name": string,
  "type": string,
  "rewards": {
    "prestige": number,
    "credits": number,
    "bonusCard"?: string | null
  },
  "contractRequirements": {
    "actionCards": { "type": string, "number": number, "for": string }[]
  },
  "key": string
}

export interface SecretObjectivesInfo {
  "secretObjectives": {
    "title": string,
    "objective": string,
    "prestige": number
  }
}

export interface ActionCardsArray {
  "actionCards": { "type": string, "number": number, "for": string }[],
  "hazardDie"?: {"type": string, "number": number} | null
}