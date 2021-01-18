import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatchComponent } from './latch.component';

describe('LatchComponent', () => {
  let component: LatchComponent;
  let fixture: ComponentFixture<LatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
