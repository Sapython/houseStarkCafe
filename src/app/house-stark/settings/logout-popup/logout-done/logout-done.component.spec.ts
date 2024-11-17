import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutDoneComponent } from './logout-done.component';

describe('LogoutDoneComponent', () => {
  let component: LogoutDoneComponent;
  let fixture: ComponentFixture<LogoutDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutDoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoutDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
