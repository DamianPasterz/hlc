import { Employee } from '@models/employee.models';
import { createActionGroup, props } from '@ngrx/store';
import { baseEvents } from '../utils/action-groups';

export const LoadEmployees = createActionGroup({
  source: '[Employee] Load Employees',
  events: {
    ...baseEvents,
    Success: props<{ employees: Employee[] }>(),
  },
});

export const UpdateEmployee = createActionGroup({
  source: '[Employee] Update Employee',
  events: {
    ...baseEvents,
    Request: props<{ employee: Employee }>(),
    Success: props<{ employee: Employee }>(),
  },
});
