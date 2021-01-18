import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedoLogBufferComponent } from './redo-log-buffer.component';

describe('RedoLogBufferComponent', () => {
  let component: RedoLogBufferComponent;
  let fixture: ComponentFixture<RedoLogBufferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedoLogBufferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedoLogBufferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
