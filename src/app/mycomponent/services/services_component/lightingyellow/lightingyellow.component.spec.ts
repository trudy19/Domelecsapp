import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightingyellowComponent } from './lightingyellow.component';

describe('LightingyellowComponent', () => {
  let component: LightingyellowComponent;
  let fixture: ComponentFixture<LightingyellowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightingyellowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightingyellowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
