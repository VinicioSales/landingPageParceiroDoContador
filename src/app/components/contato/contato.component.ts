import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {

  numeroWhatsapp: string = '5571988928500'; // Substitua pelo número que deseja usar.
  mensagemPadrao: string = 'Olá, quero automatizar';


  constructor() {}

  onColunaClick(url: string): void {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  abrirWhatsapp() {
    const urlEncodedMessage = encodeURIComponent(this.mensagemPadrao);
    window.open(`https://wa.me/${this.numeroWhatsapp}?text=${urlEncodedMessage}`, '_blank');
  }

  onEmailCLick(): void {
    window.location.href = "mailto:parceiro@parceirodocontador.com.br?subject=Quero automatizar&body=Olá,";
  }
}
