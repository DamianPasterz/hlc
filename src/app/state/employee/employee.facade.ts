import { Injectable } from '@angular/core';
import { Employee } from '@models/employee.models';
import { Store, select } from '@ngrx/store';
import * as actions from '@state/employee/employee.actions';
import * as selectors from '@state/employee/employee.selectors';
import { AppState } from '..';

@Injectable({
  providedIn: 'root',
})
export class EmployeeFacade {
  employees$ = this.store.pipe(select(selectors.selectAllEmployees));
  constructor(private store: Store<AppState>) {}

  loadEmployees(): void {
    this.store.dispatch(actions.LoadEmployees.request());
  }

  updateEmployee(employee: Employee): void {
    this.store.dispatch(actions.UpdateEmployee.request({ employee }));
  }
}
