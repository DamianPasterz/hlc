import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EmployeeFacade } from '@app/state/employee';
import { Employee } from '@models/employee.models';
import { EditEmployeeComponent, Label } from '../edit-employee/edit-employee.component';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatDialogModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeComponent implements OnInit {
  employees$ = inject(EmployeeFacade).employees$;
  dataSource = new MatTableDataSource<Employee>();
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'age', 'city', 'street', 'department', 'actions'];
  employeeFacade = inject(EmployeeFacade);
  dialog = inject(MatDialog);
  label = Label;
  ngOnInit(): void {
    this.employeeFacade.loadEmployees();
    this.employees$.subscribe((d) => console.log(d));
    this.employees$.subscribe((employees) => {
      this.dataSource.data = employees;
    });
  }

  editEmployee(employee: Employee): void {
    const dialogRef = this.dialog.open(EditEmployeeComponent, {
      data: { employee },
    });

    dialogRef.afterClosed().subscribe((result: Employee) => {
      if (result) {
        console.log('resault', result);

        this.employeeFacade.updateEmployee(result);
      }
    });
  }
}
