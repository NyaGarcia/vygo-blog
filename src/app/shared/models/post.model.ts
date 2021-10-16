import { User } from './user.model';

export interface Post {
  author: User;
  createdAt: number;
  id: string;
  title: string;
  subtitle: string;
  content: string;
  updatedAt: number;
  originalDocRef: string;
  photoUrl: string;
  history: Post[];
}
