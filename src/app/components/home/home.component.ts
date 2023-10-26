import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollToForms(): void {
    const formsSection = this.document.getElementById('formulario');
    formsSection?.scrollIntoView({ behavior: 'smooth' })
  }

}
