import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSNComponent } from './ssn.component';

describe('SSNComponent', () => {
  let component: SSNComponent;
  let fixture: ComponentFixture<SSNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SSNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SSNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
