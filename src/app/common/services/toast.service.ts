import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private MESSAGE = {
    SUCCESS: 'Operation done successfully',
    ERROR: 'Operation failed! Retry again',
  };
  constructor(private toastController: ToastController) {}

  async default(
    message: string = this.MESSAGE.SUCCESS,
    duration: number = 2000
  ) {
    const toast = await this.toastController.create({
      message,
      duration,
      cssClass: 'default',
    });
    await toast.present();
  }

  async info(message: string, duration: number = 2000) {
    const toast = await this.toastController.create({
      message,
      duration,
      cssClass: 'info',
    });
    await toast.present();
  }

  async success(
    message: string = this.MESSAGE.SUCCESS,
    duration: number = 2000
  ) {
    const toast = await this.toastController.create({
      message,
      duration,
      cssClass: 'success',
    });
    await toast.present();
  }

  async warn(message: string, duration: number = 3000) {
    const toast = await this.toastController.create({
      message,
      duration,
      cssClass: 'warn',
    });
    await toast.present();
  }

  async error(message: string = this.MESSAGE.ERROR, duration: number = 3000) {
    const toast = await this.toastController.create({
      message,
      duration,
      cssClass: 'error',
    });
    await toast.present();
  }
}
