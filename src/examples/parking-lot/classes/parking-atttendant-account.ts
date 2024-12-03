import { AccountStatus } from "../enums/account-status-enum";
import { Account } from "./account";
import { Person } from "./constants/person";

export class ParkingAttendantAccount extends Account {
  constructor(
    userName: string,
    password: string,
    person: Person,
    accountStatus: AccountStatus = AccountStatus.ACTIVE
  ) {
    super(userName, password, person, accountStatus);
  }
  processTicket(): boolean {
    return true;
  }
}
