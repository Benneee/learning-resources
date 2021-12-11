import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewResourceComponent } from './add-new-resource.component';

describe('AddNewResourceComponent', () => {
  let component: AddNewResourceComponent;
  let fixture: ComponentFixture<AddNewResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewResourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
