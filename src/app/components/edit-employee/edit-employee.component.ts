import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Employee } from '@app/models/employee.models';
import { ConfirmButtonComponent } from '../confirm-button/confirm-button.component';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ConfirmButtonComponent,
  ],
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { employee: Employee }
  ) {
    this.employeeForm = this.fb.group({
      id: [{ value: '', disabled: true }],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      city: ['', Validators.required],
      street: ['', Validators.required],
      department: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.data && this.data.employee) {
      this.employeeForm.patchValue(this.data.employee);
    }
  }

  createForm(): void {}

  onSave(): void {
    if (this.employeeForm.valid) {
      this.dialogRef.close(this.employeeForm.getRawValue());
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
