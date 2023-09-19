import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MatMenuModule} from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { UsbComponent } from './components/usb/usb.component';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { BotaoComponent } from './components/botao/botao.component';
import { Botao2Component } from './components/botao2/botao2.component'
import { HeaderComponent } from './components/header/header.component';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { SolucoesComponent } from './components/solucoes/solucoes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioComponent } from './components/formulario/formulario.component'; 
import { ModalSolucoesComponent } from './components/modal-solucoes/modal-solucoes.component';
import { CasesComponent } from './components/cases/cases.component';
import { EstatisticasComponent } from './components/estatisticas/estatisticas.component';
import { ParceirosComponent } from './components/parceiros/parceiros.component';
import { ContatoComponent } from './components/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UsbComponent,
    SobreComponent,
    SolucoesComponent,
    BotaoComponent,
    ModalSolucoesComponent,
    Botao2Component,
    FormularioComponent,
    CasesComponent,
    EstatisticasComponent,
    ParceirosComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    CarouselModule.forRoot(),
    NgbModule,
    NgbCarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
