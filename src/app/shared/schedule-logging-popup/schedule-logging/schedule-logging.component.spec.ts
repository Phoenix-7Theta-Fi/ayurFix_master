import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleLoggingComponent } from './schedule-logging.component';

describe('ScheduleLoggingComponent', () => {
  let component: ScheduleLoggingComponent;
  let fixture: ComponentFixture<ScheduleLoggingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduleLoggingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleLoggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
