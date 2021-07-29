import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

import { MenuComponent } from './menu.component';

fdescribe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  // let firestoreService: FirestoreService;
  class FirestoreServiceStub {
    getMenu(){
      return of(true)
    }

    getMenuByType(){
      return of(true)
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuComponent],
      providers: [{ provider: FirestoreService, useClass: FirestoreServiceStub }],
      schemas:[NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    // firestoreService =TestBed.inject(FirestoreService)
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
  it('deberia llamar la funcion getMenuBreakfast', () =>{
    component.showMenu('breakFast');
    expect(component.getMenuBreakfast).toHaveBeenCalled()
  })
});
