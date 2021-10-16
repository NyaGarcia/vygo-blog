export interface Post {
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
