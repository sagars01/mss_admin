import { Component, OnInit } from '@angular/core';
import { FbauthService } from 'src/app/shared/services/fbauth.service';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: FbauthService,
    private modal: NzModalService,
  ) { }

  ngOnInit() {
  }

  login() {

  }

}
