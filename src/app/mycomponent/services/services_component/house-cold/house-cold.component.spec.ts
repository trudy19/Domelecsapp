import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseColdComponent } from './house-cold.component';

describe('HouseColdComponent', () => {
  let component: HouseColdComponent;
  let fixture: ComponentFixture<HouseColdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseColdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseColdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
