import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableMuestraComponent } from './observable-muestra.component';

describe('ObservableMuestraComponent', () => {
  let component: ObservableMuestraComponent;
  let fixture: ComponentFixture<ObservableMuestraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableMuestraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableMuestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
