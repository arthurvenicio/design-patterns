import { Call } from "./call";
import { ICallCenterDispatcher } from "./call-center-dispatcher-inteface";
import { Employee } from "./employee";
import { EmployeeLevels } from "./employee-levels-enum";

export class CallCenterDispatcher implements ICallCenterDispatcher {
  dispatchCall(call: Call, employees: Employee[]): void {
    for (const level of Object.keys(EmployeeLevels)) {
      const employee = employees.find(
        (employee) => employee.level.toString() === level && employee.isFree()
      );

      if (employee) {
        employee.handle(call);
        return;
      }
    }

    console.log("No employee founds to process the call with id: ", call.id);
    return;
  }
}
