import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDemandAdComponent } from './display-demand-ad.component';

describe('DisplayDemandAdComponent', () => {
  let component: DisplayDemandAdComponent;
  let fixture: ComponentFixture<DisplayDemandAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDemandAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDemandAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
