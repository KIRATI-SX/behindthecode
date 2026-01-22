import { API } from "../../config/api";
import type { GetPostsParams } from "../../types/post";

export function buildPostsUrl(params: GetPostsParams): string {
  const query = new URLSearchParams();

  if (params.category) query.append("category", params.category);
  if (params.search) query.append("search", params.search);

  return query.toString()
    ? `${API.BASE_URL}posts?${query.toString()}`
    : `${API.BASE_URL}posts`;
}
