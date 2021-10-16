import { ModalController, ModalOptions } from '@ionic/angular';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private modalController: ModalController) {}

  public async default(opts?: ModalOptions) {
    const modal = await this.modalController.create(opts);
    await modal.present();
  }

  public dismiss() {
    this.modalController.dismiss();
  }
}
