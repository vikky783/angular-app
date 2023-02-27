import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent {
  myDate! : Date;
  name:string="Ramesh Verma";
  age:number=20;
  status:string = "Unmarried";
  salary:number = 20;

  isDisable:boolean = false;
  inputValue: string = "ramesh";

  btnColor:string= "btn red";

  fruits : string[] = ['banana', 'mango', 'grape', 'apple']

  constructor(){
    const color:string[] = ['red', 'blue', 'yellow','pink']
    this.btnColor = "btn "+ color[Math.floor(Math.random() *4)]
  }

  convertToINR(){
    const inr = this.salary*70;
    alert(`INR ${inr}`);
    
    // alert(this.salary*70);
  }

  getInput(e:any){
    this.inputValue = e.target.value;
  }

}
