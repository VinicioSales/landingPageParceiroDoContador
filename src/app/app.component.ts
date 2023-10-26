import { Component, ElementRef, Renderer2, OnInit   } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  documentHeight!: number;
  title = 'landing_page-PARCEIRO';

  constructor(private renderer: Renderer2, private el: ElementRef) { }


  //NOTE - ngOnInit
  ngOnInit() {
    this.documentHeight = this.getDocumentHeight();
    const alturaUsb = this.documentHeight + 1100;
    console.log(this.documentHeight);
    const linePrincipalElem = this.el.nativeElement.querySelector('.linha-principal');
    this.renderer.setStyle(linePrincipalElem, 'height', `${alturaUsb}px`);
  }


  //NOTE - getDocumentHeight
  getDocumentHeight(): number {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  }

}
