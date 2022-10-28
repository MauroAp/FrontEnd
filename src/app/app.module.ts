import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { LogoApComponent } from './componentes/logo-ap/logo-ap.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardSoftComponent } from './componentes/hard-soft/hard-soft.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componentes/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { PersonaService } from './service/persona.service';
import { HomeComponent } from './componentes/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HardysoftComponent } from './componentes/hardysoft/hardysoft.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';






@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    LogoApComponent,
    BannerComponent,
    HardSoftComponent,
    FooterComponent,
    LoginComponent,

    AcercaDeComponent,
     HomeComponent,
     HeaderComponent,
     EducacionComponent,
     ExperienciaComponent,
     HardysoftComponent,
     ProyectosComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    
    

  ],
  providers: [
    interceptorProvider,
    PersonaService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

