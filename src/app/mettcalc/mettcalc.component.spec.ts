import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MettcalcComponent} from './mettcalc.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('MettcalcComponent', () => {
  let component: MettcalcComponent;
  let fixture: ComponentFixture<MettcalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [MettcalcComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MettcalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
