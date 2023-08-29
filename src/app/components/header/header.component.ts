import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const yOffset = window.pageYOffset;
    const scrollTop = yOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollTop > 100) { // algumValor é o valor de scroll que você quer para a mudança acontecer
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
