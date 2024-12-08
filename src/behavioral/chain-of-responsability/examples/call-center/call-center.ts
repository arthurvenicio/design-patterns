import { Call } from "./call";
import { ICallCenterDispatcher } from "./call-center-dispatcher-inteface";
import { Employee } from "./employee";
import { Respondent } from "./employee-levels";

export class CallCenter {
  private employees: Employee[] = [];
  constructor(private dispatcher: ICallCenterDispatcher) {}

  addEmployees(...employees: Employee[]): void {
    for (const employee of employees) {
      this.employees.push(employee);
    }
  }

  dispatchCall(call: Call): void {
    this.dispatcher.dispatchCall(call, new Respondent());
  }
}
