import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemEventComponent } from './system-event.component';

describe('SystemEventComponent', () => {
  let component: SystemEventComponent;
  let fixture: ComponentFixture<SystemEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
