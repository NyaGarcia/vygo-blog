import { Component, OnInit } from '@angular/core';

import { AlertService } from 'src/app/common/services/alert.service';
import { AuthService } from 'src/app/common/services/auth.service';
import { LoadingService } from 'src/app/common/services/loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'vygo-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly loadingService: LoadingService,
    private readonly alertService: AlertService,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  async login() {
    const loading = await this.loadingService.create();

    try {
      await this.authService.signInWithGoogle();
      this.router.navigate(['posts']);
    } catch {
      this.alertService.error();
    } finally {
      loading.dismiss();
    }
  }
}
