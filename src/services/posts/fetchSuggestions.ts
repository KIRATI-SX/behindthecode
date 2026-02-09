import axios from "axios";
import { API } from "../../config/api";

export interface Suggestion {
  id: number;
  title: string;
}

export async function fetchSuggestions(
  keyword: string,
  signal?: AbortSignal,
): Promise<Suggestion[]> {
  if (!keyword || keyword.length < 2) {
    return [];
  }

  const url = `${API.BASE_URL}posts?keyword=${encodeURIComponent(keyword)}`;

  try {
    const response = await axios.get(url, { signal });
    console.log(response);

    // Assuming API returns posts array, extract id and title
    if (response.data.posts && Array.isArray(response.data.posts)) {
      return response.data.posts.map((post: { id: number; title: string }) => ({
        id: post.id,
        title: post.title,
      }));
    }

    return [];
  } catch (error) {
    if (axios.isCancel(error)) {
      // Request was cancelled, return empty array
      return [];
    }
    console.error("Error fetching suggestions:", error);
    return [];
  }
}
