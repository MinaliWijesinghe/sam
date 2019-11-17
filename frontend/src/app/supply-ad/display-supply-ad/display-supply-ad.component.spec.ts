import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySupplyAdComponent } from './display-supply-ad.component';

describe('DisplaySupplyAdComponent', () => {
  let component: DisplaySupplyAdComponent;
  let fixture: ComponentFixture<DisplaySupplyAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySupplyAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySupplyAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
