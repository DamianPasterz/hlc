import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-confirm-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirm-button.component.html',
  styleUrl: './confirm-button.component.scss',
})
export class ConfirmButtonComponent {
  buttonText = input.required<string>();
  confirmText = input<string>('Definitely?');
  buttonClass = input<string>('confirm');
  buttonMainClass = input<string>('settings-button');
  buttonClick = output<void>();

  confirm = false;

  onClick(): void {
    if (!this.confirm) {
      this.confirm = true;
      return;
    }
    this.buttonClick.emit();
    this.confirm = false;
  }
}
