import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseStarkComponent } from './house-stark.component';

describe('HouseStarkComponent', () => {
  let component: HouseStarkComponent;
  let fixture: ComponentFixture<HouseStarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseStarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseStarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
