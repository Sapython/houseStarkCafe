import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarksPickComponent } from './starks-pick.component';

describe('StarksPickComponent', () => {
  let component: StarksPickComponent;
  let fixture: ComponentFixture<StarksPickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarksPickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarksPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
