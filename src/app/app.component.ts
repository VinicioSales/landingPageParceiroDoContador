import { Component, ElementRef, Renderer2, AfterViewInit, OnInit   } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'landing_page-PARCEIRO';

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  documentHeight!: number;

  ngOnInit() {
    this.documentHeight = this.getDocumentHeight();
    // const alturaUsb = this.documentHeight - 161;
    const alturaUsb = this.documentHeight - 300;
    console.log(this.documentHeight);
    const linePrincipalElem = this.el.nativeElement.querySelector('.linha-principal');
    this.renderer.setStyle(linePrincipalElem, 'height', `${alturaUsb}px`);
  }

  getDocumentHeight(): number {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  }

  }


  // ngAfterViewInit() {
  //   setTimeout(() => {
  //       const fullDocumentHeight = document.documentElement.scrollHeight;
  //       const linePrincipalElem = this.el.nativeElement.querySelector('.linha-principal');
  //       let windowHeight = window.innerHeight;
  //       console.log(fullDocumentHeight);
  //       console.log(windowHeight);

  //       this.renderer.setStyle(linePrincipalElem, 'height', `${fullDocumentHeight}px`);
  //   }, 500); // Espera por 500 milissegundos (meio segundo)



