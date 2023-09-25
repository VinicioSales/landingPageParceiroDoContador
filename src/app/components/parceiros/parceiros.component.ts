import { Component } from '@angular/core';

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.css']
})
export class ParceirosComponent {
  parceiros: any[] = [
    {
      texto: "aaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaa",
      midia: "assets/img/dados1.png"
    },
    {
      texto: "aaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaa",
      midia: "assets/img/dados2.png"
    },
    {
      texto: "aaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaa",
      midia: "assets/img/email.png"
    },
  ]

}
