import { Call } from "./call";
import { EmployeeLevels } from "./employee-levels-enum";

export class Employee {
  constructor(
    public id: number,
    public name: string,
    public level: EmployeeLevels,
    private _isFree = true
  ) {}

  isFree() {
    return this._isFree;
  }

  setIsFree() {
    this._isFree = !this._isFree;
  }

  handle(call: Call): void {
    this.setIsFree();
    console.log(`${this.name} process the call with id: ${call.id}`);

    return;
  }
}
