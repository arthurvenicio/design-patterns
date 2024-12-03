import { Address } from "./address";

export class Person {
  constructor(
    private name: string,
    private address: Address,
    private email: string,
    private phone: string
  ) {}
}
