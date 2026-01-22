export interface Post {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  likes: number;
  content: string;
}

export interface GetPostsParams {
  category?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export interface PostsApiResponse {
  posts: Post[];
  totalPosts: number;
  currentPage: number;
  nextPage: number | null;
  totalPages: number;
  limit: number;
}
