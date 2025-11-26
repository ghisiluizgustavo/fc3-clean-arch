export interface InputFindCustomerDto {
  id: string;
}

export interface OutputFindCustomerDto {
  id: string;
  name: string;
  addrress: {
    street: string;
    city: string;
    number: number;
    zip: string
  }
}
