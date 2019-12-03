import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grand2Component } from './grand2.component';

describe('Grand2Component', () => {
  let component: Grand2Component;
  let fixture: ComponentFixture<Grand2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grand2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grand2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
