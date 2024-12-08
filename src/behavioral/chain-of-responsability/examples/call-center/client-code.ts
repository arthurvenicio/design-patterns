import { Call } from "./call";
import { CallCenter } from "./call-center";
import { CallCenterDispatcher } from "./call-center-dispatcher";
import { Employee } from "./employee";
import { Director, Manager, Respondent } from "./employee-levels";

const employeeB = new Employee(1, "José", new Respondent());
const employeeA = new Employee(2, "Ana", new Manager());
const employeeC = new Employee(3, "Carolina", new Director());

const dispatcher = new CallCenterDispatcher([employeeA, employeeB, employeeC]);
const callCenter = new CallCenter(dispatcher);

callCenter.dispatchCall(new Call(1, "Test call"));
callCenter.dispatchCall(new Call(2, "Test call"));
callCenter.dispatchCall(new Call(3, "Test call"));
callCenter.dispatchCall(new Call(4, "Test call"));
