import { createAction, props } from '@ngrx/store';
import * as employeeActions from '@state/employee/employee.actions';

export const showLoading = createAction('[Globals] loading', props<{ loading: boolean }>());

export const actionsLoadingOn = [employeeActions.LoadEmployees.request, employeeActions.UpdateEmployee.request];

export const actionsLoadingOff = [
  employeeActions.LoadEmployees.success,
  employeeActions.LoadEmployees.failure,
  employeeActions.UpdateEmployee.failure,
  employeeActions.UpdateEmployee.success,
];
