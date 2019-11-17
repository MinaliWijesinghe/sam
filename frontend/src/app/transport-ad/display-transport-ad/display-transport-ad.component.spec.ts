import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTransportAdComponent } from './display-transport-ad.component';

describe('DisplayTransportAdComponent', () => {
  let component: DisplayTransportAdComponent;
  let fixture: ComponentFixture<DisplayTransportAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTransportAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTransportAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
