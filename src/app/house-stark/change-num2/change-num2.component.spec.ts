import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeNum2Component } from './change-num2.component';

describe('ChangeNum2Component', () => {
  let component: ChangeNum2Component;
  let fixture: ComponentFixture<ChangeNum2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeNum2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeNum2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
