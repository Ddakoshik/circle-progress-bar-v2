import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exempl-controll',
  templateUrl: './exempl-controll.component.html',
  styleUrls: ['./exempl-controll.component.css']
})
export class ExemplControllComponent implements OnInit {

  swicher_data = 'block-row-1';

  checked = false;
  indeterminate = false;

  align1 ;
  align2 ;

  disabled = false;

  checked3 = false;
  indeterminate3 = false;


  value1 = 0;
  value2 = 0;
  value3 = 0;
  value4 = 0;
  // title1 = ['test'];
  myChecker = [];

  constructor() { }

  ngOnInit() {

  }

  showOptions_1(e) {
    console.log(e);
    if (e.checked === true) {
      this.value1 += 50;
    } else {
      this.value1 -= 50;
    }
    this.sum_progres();
  }


  showOptions_2(e) {
    const temp = this.myChecker.filter(x => x === e.source.name)[0];
    if (!temp) {
      this.myChecker.push(e.source.name);
      this.value2 += 50;
    }
    this.sum_progres();
  }

  showOptions_3(e) {
    console.log(e);
    if (e.checked === true) {
      this.value3 += 50;
    } else {
      this.value3 -= 50;
    }
    this.sum_progres();

  }

  sum_progres() {
    this.value4 = (this.value1 + this.value2 + this.value3 ) / 3;
    console.log(this.value4);

  }
  swich_list(e) {
    this.swicher_data = e;
    console.log(e);

  }


}
