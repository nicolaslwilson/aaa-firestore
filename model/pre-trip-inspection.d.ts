export interface IPreTripInspection {
  crewId: string,
  completedBy: string,
  insideOne: any,
  insideTwo: any,
  odometer: number,
  outside: any
  submittedAt: number, // unix timestamp in milliseconds
  truckId: string,
}


