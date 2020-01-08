import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoductAlertsComponent } from './poduct-alerts.component';

describe('PoductAlertsComponent', () => {
  let component: PoductAlertsComponent;
  let fixture: ComponentFixture<PoductAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoductAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoductAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
