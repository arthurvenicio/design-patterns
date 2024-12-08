import { Call } from "./call";
import { ICallCenterDispatcher } from "./call-center-dispatcher-inteface";
import { Employee } from "./employee";

export class CallCenter {
  private employees: Employee[] = [];
  constructor(private dispatcher: ICallCenterDispatcher) {}

  addEmployees(...employees: Employee[]): void {
    for (const employee of employees) {
      this.employees.push(employee);
    }
  }

  dispatchCall(call: Call) {
    this.dispatcher.dispatchCall(call, this.employees);
  }
}
