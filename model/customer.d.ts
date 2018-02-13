export interface ICustomer {
  // Not stored in Firestore
  id?: string,
  fullName?: string,

  // Stored in Firestore
  email: string,
  firstName: string,
  lastName: string,
  phone: string,
}

