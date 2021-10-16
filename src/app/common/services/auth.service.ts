import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly auth: AngularFireAuth) {}

  get authState(): Observable<firebase.User> {
    return this.auth.authState;
  }

  signInWithGoogle(): Promise<firebase.auth.UserCredential> {
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout(): Promise<void> {
    return this.auth.signOut();
  }
}
