import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-form-with-validations',
  templateUrl: './form-with-validations.component.html',
  styleUrls: ['./form-with-validations.component.css']
})
export class FormWithValidationsComponent implements OnInit {
myForm: FormGroup;
sku: AbstractControl;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });
    this.sku = this.myForm.controls['sku'];
   }

  ngOnInit() {
  }
  onSubmit(value: string): void {
console.log('you submitted details:', value);
  }

}
