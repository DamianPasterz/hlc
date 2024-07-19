import { Injectable } from '@angular/core';
import { EmployeeService } from '@app/core/services/employee.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as actions from '@state/employee/employee.actions';
import { of } from 'rxjs';
import { catchError, delay, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class EmployeeEffects {
  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService
  ) {}

  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.LoadEmployees.request),
      mergeMap(() =>
        this.employeeService.getEmployees().pipe(map((employees) => actions.LoadEmployees.success({ employees })))
      )
    )
  );

  updateEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.UpdateEmployee.request),
      mergeMap(({ employee }) =>
        of(employee).pipe(
          delay(2000),
          map(() => actions.UpdateEmployee.success({ employee })),
          catchError((error) => of(actions.UpdateEmployee.failure({ error })))
        )
      )
    )
  );
}
