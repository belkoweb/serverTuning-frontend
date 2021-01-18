import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileStatComponent } from './file-stat.component';

describe('FileStatComponent', () => {
  let component: FileStatComponent;
  let fixture: ComponentFixture<FileStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
