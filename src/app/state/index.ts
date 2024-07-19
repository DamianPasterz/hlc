import { EmployeeEffects, EmployeeFacade, employeeReducer, EmployeeState } from './employee';
import { GlobalsEffects, GlobalsFacade, globalsReducer, GlobalsState } from './globals';

export const reducer = {
  globals: globalsReducer,
  employee: employeeReducer,
};

export const effects = [GlobalsEffects, EmployeeEffects];

export const facades = [GlobalsFacade, EmployeeFacade];

export interface AppState {
  globals: GlobalsState;
  employee: EmployeeState;
}
