import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceAnOrderComponent } from './place-an-order.component';

describe('PlaceAnOrderComponent', () => {
  let component: PlaceAnOrderComponent;
  let fixture: ComponentFixture<PlaceAnOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceAnOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceAnOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
