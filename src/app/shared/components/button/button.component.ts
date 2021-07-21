import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button [class]="btnType">{{ text }}</button>`,
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() text: string;
  @Input() btnType: string;
  constructor() {
    this.text = Input();
    this.btnType = Input();
  }
}
