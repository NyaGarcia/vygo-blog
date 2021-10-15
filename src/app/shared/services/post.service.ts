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

  create(post: Post) {
    const id = this.ngFirestore.createId();
    post.id = id;

    return from(
      this.collection.doc(id).set({ ...post, createdAt: Date.now() })
    );
  }
}
