import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-App';
  isLinear = true;
  welocomeFormGroup:FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup:  FormGroup;
  forthFormGroup:  FormGroup;
  
  constructor(private _formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
     
    });
    this.secondFormGroup = this._formBuilder.group({
      Lastname: ['', Validators.required],
      
    });
    this.thirdFormGroup = this._formBuilder.group({
      amount: ['', Validators.required],
     
    });
    this.forthFormGroup = this._formBuilder.group({
      Loan: ['', Validators.required],
     
    });


  }
  
  submit(){
      console.log(this.firstFormGroup.value);
      console.log(this.secondFormGroup.value);
      console.log(this.secondFormGroup.value);
      console.log(this.forthFormGroup.value);


  }
}
