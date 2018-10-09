import { NgxQRCodeModule } from 'ngx-qrcode2';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { AppComponent } from './app.component';
import { AppReaderComponent } from './reader/reader.component';

@NgModule({
  declarations: [
    AppComponent,
    AppReaderComponent
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule,
    CommonModule,
    ZXingScannerModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
