import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SirenComponent } from './siren.component';

describe('SirenComponent', () => {
  let component: SirenComponent;
  let fixture: ComponentFixture<SirenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SirenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SirenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
