import axios from "axios";
import type { Post } from "../../types/post";

interface PostsApiResponse {
  posts: Post[];
}

export async function fetchPosts(
  url: string,
  signal?: AbortSignal
): Promise<Post[]> {
  const response = await axios.get<PostsApiResponse>(url, { signal });
  const posts = response.data?.posts;

  if (!Array.isArray(posts)) {
    throw new Error("Invalid posts response format");
  }

  return posts;
}
