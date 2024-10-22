export interface IFormaData {
  fullName: string,
  church: string,
  whatsapp: string,
  instagram: string,
  foodRestriction: string,
  team: {
    firstOption: string,
    secondOption: string,
    thirdOption: string,
  }
}

export interface ITeamsGroup {
  fisrtTeamsGroup: Array<string>
  secondTeamsGroup: Array<string>
  thirdTeamsGroup: Array<string>
}