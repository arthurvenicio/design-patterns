import { Call } from "./call";
import { ICallCenterDispatcher } from "./call-center-dispatcher-inteface";
import { Employee } from "./employee";
import { EmployeeLevel } from "./employee-levels";

export class CallCenterDispatcher implements ICallCenterDispatcher {
  constructor(private employees: Employee[]) {}
  dispatchCall(call: Call, level: EmployeeLevel | null = null): void {
    if (!level) {
      console.log(
        "There no are avaible employees to handle this call id: ",
        call.id
      );
      return;
    }

    const employee = this.employees.find(
      (employee) => employee.level.isEqual(level) && employee.isFree()
    );

    if (employee !== null && employee != undefined) {
      employee.handle(call);
    } else {
      this.dispatchCall(call, level.nextLevel);
    }
  }
}
