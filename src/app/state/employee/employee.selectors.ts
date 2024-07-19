import { createSelector } from '@ngrx/store';
import { EmployeeState } from '@state/employee/employee.reducer';
import { AppState } from '..';

export const selectEmployeeState = (state: AppState): EmployeeState => state.employee;

export const selectAllEmployees = createSelector(selectEmployeeState, (state: EmployeeState) =>
  state ? state.employees : []
);
