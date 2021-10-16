import { Observable, from } from 'rxjs';

import { AngularFirestore } from '@angular/fire/compat/firestore';
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
    return this.collection.doc(id).valueChanges({ idField: 'id' });
  }

  create(post: Post) {
    const id = this.ngFirestore.createId();
    post.id = id;

    return from(
      this.collection.doc(id).set({ ...post, createdAt: Date.now() })
    );
  }

  delete(id: string): Observable<void> {
    return from(this.collection.doc(id).delete());
  }

  update(post: Partial<Post>) {
    return from(this.collection.doc(post.id).update(post));
  }
}
