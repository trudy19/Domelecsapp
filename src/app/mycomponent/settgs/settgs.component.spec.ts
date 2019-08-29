import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettgsComponent } from './settgs.component';

describe('SettgsComponent', () => {
  let component: SettgsComponent;
  let fixture: ComponentFixture<SettgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
