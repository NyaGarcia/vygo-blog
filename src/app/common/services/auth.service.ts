import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import firebase from 'firebase/compat/app';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly auth: AngularFireAuth) {}

  get authState(): Observable<firebase.User> {
    return this.auth.authState;
  }

  get user(): Observable<User> {
    return this.authState.pipe(
      map(({ displayName, uid, photoURL, email }) => ({
        uid,
        displayName,
        photoURL,
        email,
      }))
    );
  }

  signInWithGoogle(): Promise<firebase.auth.UserCredential> {
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout(): Promise<void> {
    return this.auth.signOut();
  }
}
