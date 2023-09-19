import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-usb',
  templateUrl: './usb.component.html',
  styleUrls: ['./usb.component.css']
})
export class UsbComponent  {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  // ngAfterViewInit() {
  //   this.adjustLinePrincipalHeight();
  // }

  // adjustLinePrincipalHeight() {
  //   const windowHeight = window.innerHeight;
  //   // console.log(windowHeight);
  //   const linePrincipalElem = this.el.nativeElement.querySelector('.linha-principal');
  //   this.renderer.setStyle(linePrincipalElem, 'height', `${windowHeight}px`);
  // }

}
