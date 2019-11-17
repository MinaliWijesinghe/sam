import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesTraComponent } from './des-tra.component';

describe('DesTraComponent', () => {
  let component: DesTraComponent;
  let fixture: ComponentFixture<DesTraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesTraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesTraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
