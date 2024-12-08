import { Call } from "./call";
import { EmployeeLevel } from "./employee-levels";

export interface ICallCenterDispatcher {
  dispatchCall(call: Call, level: EmployeeLevel): void;
}
