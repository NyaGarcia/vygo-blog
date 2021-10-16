import { LoadingController, LoadingOptions } from '@ionic/angular';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  DEFAULT_OPTIONS = {
    message: 'Please wait...',
  };

  constructor(private loadingController: LoadingController) {}

  async create(
    opts: LoadingOptions = this.DEFAULT_OPTIONS
  ): Promise<HTMLIonLoadingElement> {
    const loading = await this.loadingController.create(opts);
    loading.present();
    return loading;
  }

  dimiss(): Promise<Boolean> {
    return this.loadingController.dismiss();
  }
}
