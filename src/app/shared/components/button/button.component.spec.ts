import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

const mockText= "Ordenar";
const mockBtnType= "btn-primary";
describe('ButtomComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    component.btnType=mockBtnType;
    component.text=mockText;
    fixture.detectChanges();
  });

  it('should create button', () => {
    expect(component).toBeTruthy();
  });
  it('should display text button', () => {
    expect(component.text).toBe("Ordenar");
  });
});
