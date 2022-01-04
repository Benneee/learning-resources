import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindWordComponent } from './find-word.component';

describe('FindWordComponent', () => {
  let component: FindWordComponent;
  let fixture: ComponentFixture<FindWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindWordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
