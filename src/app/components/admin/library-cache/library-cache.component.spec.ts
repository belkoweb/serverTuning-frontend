import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryCacheComponent } from './library-cache.component';

describe('LibraryCacheComponent', () => {
  let component: LibraryCacheComponent;
  let fixture: ComponentFixture<LibraryCacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryCacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
