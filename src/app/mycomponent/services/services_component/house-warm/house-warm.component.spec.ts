import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseWarmComponent } from './house-warm.component';

describe('HouseWarmComponent', () => {
  let component: HouseWarmComponent;
  let fixture: ComponentFixture<HouseWarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseWarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseWarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
