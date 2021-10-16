import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/common/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'vygo-blog.layout',
  templateUrl: './post-layout.page.html',
})
export class PostLayoutPage implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  async logout() {
    await this.authService.logout();
    this.router.navigate(['auth']);
  }
}
