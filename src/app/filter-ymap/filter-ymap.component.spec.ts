import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterYMapComponent } from './filter-ymap.component';

describe('FilterYMapComponent', () => {
  let component: FilterYMapComponent;
  let fixture: ComponentFixture<FilterYMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterYMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterYMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
