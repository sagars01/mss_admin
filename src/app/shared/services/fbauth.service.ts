import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FbauthService {
  userData$: Observable<firebase.User>;
  userSub$: Subscription;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
  ) {
    this.getLoginStatus();
  }

  login(email: any, password: any) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then((_) => {
        this.router.navigate(['dashboard']);
      });
  }

  getLoginStatus() {
    this.userSub$ = this.afAuth.authState.subscribe((user) => {
      console.log(user);
    });
  }

  logout() {

  }
}
