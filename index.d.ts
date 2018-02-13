import { ICrew, ITeamMember } from './model/crew';
import { ICustomer } from './model/customer';
import { IAddress, IJob } from './model/job';
import { IPreTripInspection } from './model/pre-trip-inspection';
import { ITruck } from './model/truck';

declare namespace AAATypes {
  export const Address: IAddress;
  export const Crew: ICrew;
  export const Customer: ICustomer;
  export const Job: IJob;
  export const PreTripInspect: IPreTripInspection;
  export const TeamMember: ITeamMember;
  export const Truck: ITruck;
}