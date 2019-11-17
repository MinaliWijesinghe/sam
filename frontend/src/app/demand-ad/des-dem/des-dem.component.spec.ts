import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesDemComponent } from './des-dem.component';

describe('DesDemComponent', () => {
  let component: DesDemComponent;
  let fixture: ComponentFixture<DesDemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesDemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesDemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
