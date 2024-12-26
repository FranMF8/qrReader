import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { QRCodeComponent } from 'angularx-qrcode';
import { AppModule } from '../app.module';

@NgModule({
  imports: [
    CommonModule,
    AppModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    QRCodeComponent
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
