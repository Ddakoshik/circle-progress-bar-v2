import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplControllComponent } from './exempl-controll.component';

describe('ExemplControllComponent', () => {
  let component: ExemplControllComponent;
  let fixture: ComponentFixture<ExemplControllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemplControllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemplControllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
