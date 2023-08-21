import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpansionPanelComponent } from './epansion-panel.component';

describe('EpansionPanelComponent', () => {
  let component: EpansionPanelComponent;
  let fixture: ComponentFixture<EpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpansionPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
