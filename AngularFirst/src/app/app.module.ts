import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//Yeni componenti import edip dosya konumunu ekliyoruz
import { ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component'

//Yeni eklenen komponentleri declare ediyoruz
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
