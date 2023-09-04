import { Component } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent {
  images = [
    {name: 'lol.jpeg', caption: 'LOL'},
    {name: 'farcry.png', caption: 'farcry'},
    {name: 'ori.jpg', caption: 'ori'},
  ]

}
