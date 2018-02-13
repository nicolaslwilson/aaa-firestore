export interface IAddress {
  addressOne: string,
  addressTwo: string,
  city: string,
  coords: {
    latitude: number,
    longitude: number
  },
  state: string,
  zipCode: string
}

export interface IJob {
  id?: string,
  estimate: {
    startAt: number, // unix timestamp in milliseconds
    endAt: number, // unix timestamp in milliseconds
    timeToPickup: number,
    timeToDropOff: number
  },
  crewId: string,
  customerId: string,
  date: number, // unix timestamp in milliseconds
  dropOffLocation: IAddress,
  pickUpLocation: IAddress,
}



