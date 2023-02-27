import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
 
 @Input() user : string ="vikky";
 @Input() age! : number;
 @Input() img!:string;
 @Input() title!: string

 @Output() myevents = new EventEmitter<string>();

 passData(){
  this.myevents.emit("coders never Quit")
 }

 listenerRef = setInterval(()=>{},1000)
 ngOnInit()  {
  console.log('ngOnInit', this.user)
  this.listenerRef 

  this.listenerRef = setInterval(()=> {console.log("Timer Runnig ")},300 )
}

ngOnChanges(value:SimpleChange){
  console.log('ngOnChanges',value)
}

ngOnDestroy(){
  console.log('component Destroy')
  clearInterval(this.listenerRef)
}


}
