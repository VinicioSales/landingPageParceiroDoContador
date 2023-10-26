import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.css']
})
export class WhatsappComponent {
  numeroWhatsapp: string = '5571988928500'; // Substitua pelo número que deseja usar.
  mensagemPadrao: string = 'Olá, quero automatizar';

  abrirWhatsapp() {
    const urlEncodedMessage = encodeURIComponent(this.mensagemPadrao);
    window.open(`https://wa.me/${this.numeroWhatsapp}?text=${urlEncodedMessage}`, '_blank');
  }

}
