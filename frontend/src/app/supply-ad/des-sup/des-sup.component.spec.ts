import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesSupComponent } from './des-sup.component';

describe('DesSupComponent', () => {
  let component: DesSupComponent;
  let fixture: ComponentFixture<DesSupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesSupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
