import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlsLoginComponent } from './component/als-login/als-login.component';
import { AlsNavbarComponent } from './component/als-navbar/als-navbar.component';
import { AlsRegisterComponent } from './component/als-register/als-register.component';
import { AlsFooterComponent } from './component/als-footer/als-footer.component';
import { AlsPaymentComponent } from './component/als-payment/als-payment.component';
import { AlsStudentComponent } from './component/als-student/als-student.component';
import { AlsTutorComponent } from './component/als-tutor/als-tutor.component';
import { AlsAdminComponent } from './component/als-admin/als-admin.component';
import { AlsNavbaradminComponent } from './component/als-navbaradmin/als-navbaradmin.component';
import { AlsNavbarstudentComponent } from './component/als-navbarstudent/als-navbarstudent.component';
import { AlsNavbartutorComponent } from './component/als-navbartutor/als-navbartutor.component';
import { AlsModulestudentComponent } from './component/als-modulestudent/als-modulestudent.component';
import { AlsPerfilComponent } from './component/als-perfil/als-perfil.component';
import { AlsMensajesComponent } from './component/als-mensajes/als-mensajes.component';
import { AlsProgressComponent } from './component/als-progress/als-progress.component';
import { AlsConfigurationComponent } from './component/als-configuration/als-configuration.component';
import { AlsStartmoduleComponent } from './component/als-startmodule/als-startmodule.component';
import { AlsModulepracticeComponent } from './component/als-modulepractice/als-modulepractice.component';
import { AlsTutormoduleComponent } from './component/als-tutormodule/als-tutormodule.component';
import { AlsAgregarcontenidoComponent } from './component/als-agregarcontenido/als-agregarcontenido.component';
import { AlsEditarcontenidoComponent } from './component/als-editarcontenido/als-editarcontenido.component';
import { AlsPromoverComponent } from './component/als-promover/als-promover.component';
import { AlsConferenciaComponent } from './component/als-conferencia/als-conferencia.component';
import { AlsConfiguraciontutorComponent } from './component/als-configuraciontutor/als-configuraciontutor.component';
import { AlsUsersComponent } from './component/als-users/als-users.component';
import { AlsModuleadminComponent } from './component/als-moduleadmin/als-moduleadmin.component';
import { AlsMessageadminComponent } from './component/als-messageadmin/als-messageadmin.component';
import { AlsRegistrartutorComponent } from './component/als-registrartutor/als-registrartutor.component';
import { AlsCertificadoComponent } from './component/als-certificado/als-certificado.component';

@NgModule({
  declarations: [
    AppComponent,
    AlsLoginComponent,
    AlsNavbarComponent,
    AlsRegisterComponent,
    AlsFooterComponent,
    AlsPaymentComponent,
    AlsStudentComponent,
    AlsTutorComponent,
    AlsAdminComponent,
    AlsNavbaradminComponent,
    AlsNavbarstudentComponent,
    AlsNavbartutorComponent,
    AlsModulestudentComponent,
    AlsPerfilComponent,
    AlsMensajesComponent,
    AlsProgressComponent,
    AlsConfigurationComponent,
    AlsStartmoduleComponent,
    AlsModulepracticeComponent,
    AlsTutormoduleComponent,
    AlsAgregarcontenidoComponent,
    AlsEditarcontenidoComponent,
    AlsPromoverComponent,
    AlsConferenciaComponent,
    AlsConfiguraciontutorComponent,
    AlsUsersComponent,
    AlsModuleadminComponent,
    AlsMessageadminComponent,
    AlsRegistrartutorComponent,
    AlsCertificadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
