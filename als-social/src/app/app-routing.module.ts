import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlsLoginComponent } from './component/als-login/als-login.component';
import { AlsNavbarComponent } from './component/als-navbar/als-navbar.component';
import { AlsRegisterComponent } from './component/als-register/als-register.component';
import { AlsFooterComponent } from './component/als-footer/als-footer.component';
import { AlsPaymentComponent } from './component/als-payment/als-payment.component';
import { AlsStudentComponent } from './component/als-student/als-student.component';
import { AlsTutorComponent } from './component/als-tutor/als-tutor.component';
import { AlsAdminComponent } from './component/als-admin/als-admin.component';
import { AlsNavbaradminComponent } from './component/als-navbaradmin/als-navbaradmin.component';
import { AlsNavbartutorComponent } from './component/als-navbartutor/als-navbartutor.component';
import { AlsNavbarstudentComponent } from './component/als-navbarstudent/als-navbarstudent.component';
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

const routes: Routes = [
  { path: "", component: AlsNavbarComponent },
  { path: "alslogin", component: AlsLoginComponent },
  { path: "alsregister", component: AlsRegisterComponent },
  { path: "alsfooter", component: AlsFooterComponent },
  { path: "alspayment", component: AlsPaymentComponent },
  { path: "alsstudent", component: AlsStudentComponent },
  { path: "alstutor", component: AlsTutorComponent },
  { path: "alsadmin", component: AlsAdminComponent },
  { path: "alsnavbaradmin", component: AlsNavbaradminComponent },
  { path: "alsnavbartutor", component: AlsNavbartutorComponent },
  { path: "alsnavbarstudent", component: AlsNavbarstudentComponent },
  { path: "alsmodulestudent", component: AlsModulestudentComponent },
  { path: "alsperfil", component: AlsPerfilComponent },
  { path: "alsmensajes", component: AlsMensajesComponent },
  { path: "alsprogress", component: AlsProgressComponent },
  { path: "alsconfiguration", component: AlsConfigurationComponent },
  { path: "alsstartmodule", component: AlsStartmoduleComponent },
  { path: "alsmodulepractice", component: AlsModulepracticeComponent },
  { path: "alstutormodule", component: AlsTutormoduleComponent },
  { path: "alsagregarcontenido", component: AlsAgregarcontenidoComponent },
  { path: "alseditarcontenido", component: AlsEditarcontenidoComponent },
  { path: "alspromover", component: AlsPromoverComponent },
  { path: "alsconferencia", component: AlsConferenciaComponent },
  { path: "alsconfiguraciontutor", component: AlsConfiguraciontutorComponent },
  { path: "alsusers", component: AlsUsersComponent },
  { path: "alsmoduleadmin", component: AlsModuleadminComponent },
  { path: "alsmessageadmin", component: AlsMessageadminComponent },
  { path: "alsregistrartutor", component: AlsRegistrartutorComponent },
  { path: "alscertificado", component: AlsCertificadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
