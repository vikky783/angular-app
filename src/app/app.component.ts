import {Component} from '@angular/core'
import { User } from 'src/models/user'

@Component({
  selector:".app-root",
  templateUrl: "./app.component.html",
  styles:[`h2{
    color:red;
  }`]
})

export class AppComponent{
  phoneNo='9600645788'
title:string = 'header';
show=true;
  users: Array<User> = [
    {user: "mukesh", age:20,imagePath:"assets/Vikky Image.jpg"},
    
  ]

  receivedDatas(e:any){
    console.log(e)
  }

}