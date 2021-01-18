import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryCacheComponent } from './dictionary-cache.component';

describe('DictionaryCacheComponent', () => {
  let component: DictionaryCacheComponent;
  let fixture: ComponentFixture<DictionaryCacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictionaryCacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
