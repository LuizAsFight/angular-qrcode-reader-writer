import { Component } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qrcode';
  elementType = 'url';
  value = 'Techiediaries';

  page: string;

  readQrCode() {
    this.page = 'readQrCode';
  }
}
