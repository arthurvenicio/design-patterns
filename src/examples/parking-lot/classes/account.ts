import { AccountStatus } from "../enums/account-status-enum";
import { Person } from "./constants/person";

export abstract class Account {
  constructor(
    private userName: string,
    private password: string,
    private person: Person,
    private accountStatus: AccountStatus
  ) {}

  resetPassword(): void {}
}
