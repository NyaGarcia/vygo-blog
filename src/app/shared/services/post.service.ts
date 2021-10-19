import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private collection = this.ngFirestore.collection<Post>('posts');

  constructor(private readonly ngFirestore: AngularFirestore) {}

  find(): Observable<Post[]> {
    return this.collection.valueChanges({ idField: 'id' });
  }

  findById(id: string): Observable<Post> {
    return this.collection
      .doc(id)
      .valueChanges({ idField: 'id' })
      .pipe(switchMap((post) => this.getPostWithHistory(post)));
  }

  create(post: Post): Observable<void> {
    const id = this.ngFirestore.createId();
    post.id = id;
    post.originalDocRef = id;

    return from(
      this.collection.doc(id).set({ ...post, createdAt: Date.now() })
    );
  }

  delete(id: string): Observable<void> {
    return from(
      this.deleteHistory(id).then(() => this.collection.doc(id).delete())
    );
  }

  update(post: Partial<Post>): Observable<Post> {
    const docRef = this.collection.doc(post.originalDocRef);

    return this.setHistory(docRef).pipe(tap(() => docRef.update(post)));
  }

  private getPostWithHistory(post: Post): Observable<Post> {
    return this.collection
      .doc(post.id)
      .collection('history', (ref) => ref.orderBy('updatedAt', 'desc'))
      .valueChanges()
      .pipe(
        map((history: Post[]) => ({
          ...post,
          history,
        }))
      );
  }

  private setHistory(docRef: AngularFirestoreDocument<Post>): Observable<Post> {
    const id = this.ngFirestore.createId();

    return from(docRef.ref.get()).pipe(
      map((doc) => ({
        ...doc.data(),
        id,
        updatedAt: Date.now(),
      })),
      tap((postHistory) =>
        docRef.collection('history').doc(id).set(postHistory)
      )
    );
  }

  private deleteHistory(id: string): Promise<void> {
    return this.collection
      .doc(id)
      .collection('history')
      .ref.get()
      .then((querySnapshot) => querySnapshot.forEach((doc) => doc.ref.delete()))
      .catch(window.alert);
  }
}
