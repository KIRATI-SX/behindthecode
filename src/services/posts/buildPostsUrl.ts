import { API } from "../../config/api";
import type { GetPostsParams } from "../../types/post";

export function buildPostsUrl(params: GetPostsParams): string {
  const query = new URLSearchParams();

  if (params.category) query.append("category", params.category);
  if (params.search) query.append("search", params.search);
  if (params.page) query.append("page", params.page.toString());
  if (params.limit) query.append("limit", params.limit.toString());

  return query.toString()
    ? `${API.BASE_URL}posts?${query.toString()}`
    : `${API.BASE_URL}posts`;
}
