import { Injectable } from '@angular/core';
import { Employee } from '@models/employee.models';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: Employee[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 30, city: 'Warsaw', street: 'Main St', department: 'HR' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', age: 25, city: 'Krakow', street: 'Second St', department: 'IT' },
    {
      id: 3,
      firstName: 'Michael',
      lastName: 'Brown',
      age: 40,
      city: 'Gdansk',
      street: 'Third St',
      department: 'Finance',
    },
    {
      id: 4,
      firstName: 'Emily',
      lastName: 'Johnson',
      age: 35,
      city: 'Poznan',
      street: 'Fourth St',
      department: 'Marketing',
    },
    {
      id: 5,
      firstName: 'Daniel',
      lastName: 'Williams',
      age: 28,
      city: 'Wroclaw',
      street: 'Fifth St',
      department: 'IT',
    },
    { id: 6, firstName: 'Sarah', lastName: 'Jones', age: 32, city: 'Lodz', street: 'Sixth St', department: 'HR' },
    {
      id: 7,
      firstName: 'David',
      lastName: 'Miller',
      age: 45,
      city: 'Katowice',
      street: 'Seventh St',
      department: 'Logistics',
    },
    {
      id: 8,
      firstName: 'Laura',
      lastName: 'Davis',
      age: 29,
      city: 'Szczecin',
      street: 'Eighth St',
      department: 'Legal',
    },
    {
      id: 9,
      firstName: 'James',
      lastName: 'Garcia',
      age: 27,
      city: 'Bydgoszcz',
      street: 'Ninth St',
      department: 'Finance',
    },
    { id: 10, firstName: 'Linda', lastName: 'Martinez', age: 38, city: 'Lublin', street: 'Tenth St', department: 'IT' },
  ];

  getEmployees(): Observable<Employee[]> {
    return of(this.employees).pipe(delay(2000));
  }
}
