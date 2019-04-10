import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonListComponent } from './hackathon-list.component';

describe('HackathonListComponent', () => {
  let component: HackathonListComponent;
  let fixture: ComponentFixture<HackathonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackathonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackathonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
