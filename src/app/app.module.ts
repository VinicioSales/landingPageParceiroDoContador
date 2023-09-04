import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { UsbComponent } from './components/usb/usb.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { SolucoesComponent } from './components/solucoes/solucoes.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BotaoComponent } from './components/botao/botao.component';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrosselComponent } from './components/carrossel/carrossel.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UsbComponent,
    SobreComponent,
    SolucoesComponent,
    BotaoComponent,
    CarrosselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    CarouselModule.forRoot(),
    NgbModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
