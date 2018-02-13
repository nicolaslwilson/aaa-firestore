export interface ITeamMember {
  // Not stored in Firestore
  id?: string,
  fullName: string,

  // Stored in Firstore
  firstName: string,
  lastName: string,
}

export interface ICrew {
  id?: string,
  leadId: string,
  memberIds: string[],
  lead: ITeamMember,
  members: ITeamMember[]
}
