import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-mettcalc',
  templateUrl: './mettcalc.component.html',
  styleUrls: ['./mettcalc.component.css']
})
export class MettcalcComponent implements OnInit {

  amountOfMettPerPeople: FormControl = new FormControl(150);
  amountOfBunsPerPeople: FormControl = new FormControl(2);
  amountOfPeople: FormControl = new FormControl();

  ngOnInit() {
  }

  public calcAmount($input1: FormControl, $input2: FormControl): number {
    if (isNaN(Number($input1.value)) || isNaN(Number($input2.value))) {
      return 0;
    }

    return Number($input1.value) * Number($input2.value);
  }
}
