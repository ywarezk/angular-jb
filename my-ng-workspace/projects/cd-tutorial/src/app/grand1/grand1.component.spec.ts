import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grand1Component } from './grand1.component';

describe('Grand1Component', () => {
  let component: Grand1Component;
  let fixture: ComponentFixture<Grand1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grand1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grand1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
