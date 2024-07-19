import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as employeeActions from '@state/employee/employee.actions';
import * as actions from '@state/globals/globals.actions';
import { of, switchMap, tap } from 'rxjs';
import { actionsLoadingOn } from './globals.actions';

@Injectable()
export class GlobalsEffects {
  constructor(
    private actions$: Actions,
    private snackBar: MatSnackBar
  ) {}

  public loadingOn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(...actionsLoadingOn),
      switchMap(() =>
        of(
          actions.showLoading({
            loading: true,
          })
        )
      )
    );
  });

  public loadingOf$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(...actions.actionsLoadingOff),
      switchMap(() => of(actions.showLoading({ loading: false })))
    );
  });

  public showUpdateEmployeeSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(employeeActions.UpdateEmployee.success),
        tap(({ employee }) => {
          this.snackBar.open(`Employee ID: ${employee.id} updated successfully!`, 'Close', {
            duration: 3000,
          });
        })
      );
    },
    { dispatch: false }
  );
}
