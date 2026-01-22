import { useEffect, useState } from "react";
import type { Post, GetPostsParams } from "../types/post";
import { buildPostsUrl } from "../services/posts/buildPostsUrl";
import { fetchPosts } from "../services/posts/fetchPosts";

export function useGetPosts(params: GetPostsParams = {}) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      setIsLoading(true);
      setError(null);

      try {
        const url = buildPostsUrl(params);
        const data = await fetchPosts(url, controller.signal);
        setPosts(data);
      } catch (err) {
        if ((err as Error).name === "CanceledError") return;
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    }

    load();

    return () => controller.abort();
  }, [params.category, params.search]);

  return { posts, isLoading, error };
}
