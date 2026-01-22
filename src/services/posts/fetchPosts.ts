import axios from "axios";
import type { PostsApiResponse } from "../../types/post";



export async function fetchPosts(
  url: string,
  signal?: AbortSignal
): Promise<PostsApiResponse> {
  const response = await axios.get<PostsApiResponse>(url, { signal });


  if (!Array.isArray(response.data.posts)) {
    throw new Error("Invalid posts response format");
  }

  return response.data;
}
