import { Call } from "./call";
import { CallCenter } from "./call-center";
import { CallCenterDispatcher } from "./call-center-dispatcher";
import { Employee } from "./employee";
import { EmployeeLevels } from "./employee-levels-enum";

const dispatcher = new CallCenterDispatcher();
const callCenter = new CallCenter(dispatcher);

const employeeB = new Employee(1, "José", EmployeeLevels.MANAGER);
const employeeA = new Employee(2, "Ana", EmployeeLevels.RESPONDENT);
const employeeC = new Employee(3, "Carolina", EmployeeLevels.DIRECTOR);

callCenter.addEmployees(employeeA, employeeB, employeeC);

callCenter.dispatchCall(new Call(1, "Test call"));
callCenter.dispatchCall(new Call(2, "Test call"));
callCenter.dispatchCall(new Call(3, "Test call"));
callCenter.dispatchCall(new Call(4, "Test call"));
