import { AccountStatus } from "../enums/account-status-enum";
import { Account } from "./account";
import { Person } from "./constants/person";

export class AdminAccount extends Account {
  constructor(
    userName: string,
    password: string,
    person: Person,
    accountStatus: AccountStatus = AccountStatus.ACTIVE
  ) {
    super(userName, password, person, accountStatus);
  }
  addParkingFloor(): void {}
  addParkingSpot(): void {}
  addParkingDisplayBoard(): void {}
  addCustomerInfoPortal(): void {}
  addEntrancePanel(): void {}
  addExitPanel(): void {}
}
