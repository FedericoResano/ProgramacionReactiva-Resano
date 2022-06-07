import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseMuestraComponent } from './promise-muestra.component';

describe('PromiseMuestraComponent', () => {
  let component: PromiseMuestraComponent;
  let fixture: ComponentFixture<PromiseMuestraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromiseMuestraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseMuestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
