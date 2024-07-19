import { Employee } from '@models/employee.models';
import { createReducer, on } from '@ngrx/store';
import * as action from '@state/employee/employee.actions';

export interface EmployeeState {
  employees: Employee[];
}

export const initialState: EmployeeState = {
  employees: [],
};

export const employeeReducer = createReducer(
  initialState,
  on(action.LoadEmployees.success, (state, { employees }) => ({ ...state, employees })),
  on(action.UpdateEmployee.success, (state, { employee }) => {
    console.log('Update Employee Success:', employee);
    return {
      ...state,
      employees: state.employees.map((e) => (e.id === employee.id ? employee : e)),
    };
  })
);
