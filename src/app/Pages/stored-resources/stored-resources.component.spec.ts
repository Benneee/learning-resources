import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoredResourcesComponent } from './stored-resources.component';

describe('StoredResourcesComponent', () => {
  let component: StoredResourcesComponent;
  let fixture: ComponentFixture<StoredResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoredResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoredResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
