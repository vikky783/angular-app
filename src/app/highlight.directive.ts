import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') bgColor:any;
  @HostListener('mouseenter')
  onEnter(){
    this.bgColor="blue";
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.bgColor='transparent';
  }
  constructor(private el : ElementRef) {
    
   }
   
}
