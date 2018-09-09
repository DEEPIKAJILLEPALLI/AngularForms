import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  sku: AbstractControl ;
  myForm: FormGroup ;
  constructor(fb: FormBuilder) {
    this.myForm = fb. group({
      'sku': ['', Validators.required]
    });
    this.sku = this.myForm.controls['sku'];
  }

  ngOnInit() {
  }
  onSubmit(value: string): void {
    console.log('you have submitted the formvalue:', value);

  }

}
