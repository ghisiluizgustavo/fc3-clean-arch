export interface InputUpdateCustomerDto {
  id: string;
  name: string;
  addrress: {
    street: string;
    city: string;
    number: number;
    zip: string
  }
}