import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeNumComponent } from './change-num.component';

describe('ChangeNumComponent', () => {
  let component: ChangeNumComponent;
  let fixture: ComponentFixture<ChangeNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeNumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
