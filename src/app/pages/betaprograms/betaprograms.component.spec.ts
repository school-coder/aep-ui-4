import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaprogramsComponent } from './betaprograms.component';

describe('BetaprogramsComponent', () => {
  let component: BetaprogramsComponent;
  let fixture: ComponentFixture<BetaprogramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetaprogramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetaprogramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
