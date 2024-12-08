import { Call } from "./call";
import { EmployeeLevel } from "./employee-levels";

export class Employee {
  constructor(
    public id: number,
    public name: string,
    public level: EmployeeLevel,
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
