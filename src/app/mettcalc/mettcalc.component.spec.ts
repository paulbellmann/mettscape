import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MettcalcComponent } from './mettcalc.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSliderModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MettcalcComponent', () => {
  let component: MettcalcComponent;
  let fixture: ComponentFixture<MettcalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatSliderModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
        BrowserAnimationsModule
      ],
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

  it('calcAmount should return 0 if input is not a number', () => {
    const input1 = new FormControl('a');
    const input2 = new FormControl(1);

    expect(component.calcAmount(input1, input2)).toBe(0);
  });

  it('calcAmount should return correct math', () => {
    const input1 = new FormControl(2);
    const input2 = new FormControl(3);

    expect(component.calcAmount(input1, input2)).toBe(6);
  });
});
