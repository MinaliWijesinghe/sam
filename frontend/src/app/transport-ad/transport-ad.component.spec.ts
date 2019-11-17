import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportAdComponent } from './transport-ad.component';

describe('TransportAdComponent', () => {
  let component: TransportAdComponent;
  let fixture: ComponentFixture<TransportAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
