import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { FormsDemoAppComponent } from './forms-demo-app/forms-demo-app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormWithValidationsComponent } from './form-with-validations/form-with-validations.component';
import { CustomValidationsComponent } from './custom-validations/custom-validations.component';



@NgModule({
  declarations: [
    AppComponent,
    FormsDemoAppComponent,
    DemoFormSkuComponent,
    FormBuilderComponent,
    FormWithValidationsComponent,
    CustomValidationsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [FormsDemoAppComponent]
})
export class AppModule { }
