import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsDemoAppComponent } from './forms-demo-app.component';

describe('FormsDemoAppComponent', () => {
  let component: FormsDemoAppComponent;
  let fixture: ComponentFixture<FormsDemoAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsDemoAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsDemoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
