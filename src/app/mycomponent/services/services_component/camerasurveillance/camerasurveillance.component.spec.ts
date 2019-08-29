import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamerasurveillanceComponent } from './camerasurveillance.component';

describe('CamerasurveillanceComponent', () => {
  let component: CamerasurveillanceComponent;
  let fixture: ComponentFixture<CamerasurveillanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamerasurveillanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamerasurveillanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
