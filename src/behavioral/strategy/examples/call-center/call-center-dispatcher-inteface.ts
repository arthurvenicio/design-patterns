import { Call } from "./call";
import { Employee } from "./employee";

export interface ICallCenterDispatcher {
  dispatchCall(call: Call, employees: Employee[]): void;
}
