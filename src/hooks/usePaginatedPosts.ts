import { useEffect, useState } from "react";
import type { Post, GetPostsParams } from "../types/post";
import { buildPostsUrl } from "../services/posts/buildPostsUrl";
import { fetchPosts } from "../services/posts/fetchPosts";

const LIMIT = 6;

export function usePaginatedPosts(params: GetPostsParams = {}) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState<number | null>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [pageToFetch, setPageToFetch] = useState<number | null>(1);
  const [totalPages, setTotalPages] = useState<number | null>();
  const [hasMore, setHasMore] = useState(true);
  
  // Reset when filters change
  useEffect(() => {
    setPosts([]);
    setCurrentPage(1);
    setNextPage(1);
    setPageToFetch(1);
  }, [params.category, params.search]);

  useEffect(() => {
    if (pageToFetch === null) return;

    const controller = new AbortController();

    async function load() {
      setIsLoading(true);
      setError(null);

      try {
        const url = buildPostsUrl({
          ...params,
          page: pageToFetch!,
          limit: LIMIT,
        });

        const data = await fetchPosts(url, controller.signal);

        setPosts((prev) =>
          pageToFetch === 1 ? data.posts : [...prev, ...data.posts],
        );
        setCurrentPage(data.currentPage);
        setNextPage(data.nextPage);
        setTotalPages(data.totalPages);
        console.log(`${totalPages}-${currentPage}`);
        setHasMore(totalPages !== currentPage);
        setPageToFetch(null); // Clear after fetch
      } catch (err) {
        if ((err as Error).name !== "CanceledError") {
          console.error(err);
          setError(err as Error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, [pageToFetch, params.category, params.search]);

  function loadMore() {
    if (!isLoading && nextPage !== null) {
      setPageToFetch(nextPage);
    }

  }
  return {
    posts,
    isLoading,
    hasMore,
    loadMore,
    currentPage,
    error,
  };
}
