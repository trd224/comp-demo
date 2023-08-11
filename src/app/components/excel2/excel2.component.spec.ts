import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Excel2Component } from './excel2.component';

describe('Excel2Component', () => {
  let component: Excel2Component;
  let fixture: ComponentFixture<Excel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Excel2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Excel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
