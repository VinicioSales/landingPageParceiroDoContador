import { Component } from '@angular/core';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent {
  estatisticas = {
    titulo: '70% De aumento',
    subtitulo: 'Na produtividade dos nossos clientes',
    dados: [
        {
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imagem: 'assets/img/dados2.png'
        },
        {
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imagem: 'assets/img/dados2.png'
        }
    ]
}


}
