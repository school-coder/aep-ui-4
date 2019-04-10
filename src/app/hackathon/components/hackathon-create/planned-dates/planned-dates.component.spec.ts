import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedDatesComponent } from './planned-dates.component';

describe('PlannedDatesComponent', () => {
  let component: PlannedDatesComponent;
  let fixture: ComponentFixture<PlannedDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlannedDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannedDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
