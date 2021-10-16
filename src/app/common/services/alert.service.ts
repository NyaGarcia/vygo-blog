import { AlertController } from '@ionic/angular';
import { AlertOptions } from '@ionic/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  ERROR_OPTS = {
    header: 'ERROR',
    subHeader: 'VygoError',
    message: 'An unexpected error ocurred. Please try again later',
    buttons: ['OK'],
  };

  constructor(private alertController: AlertController) {}

  async default(opts?: AlertOptions): Promise<void> {
    const alert = await this.alertController.create(opts);
    return alert.present();
  }

  async error(opts: AlertOptions = this.ERROR_OPTS): Promise<void> {
    const alert = await this.alertController.create(opts);
    return alert.present();
  }
}
