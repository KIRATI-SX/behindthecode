import { useState, useEffect } from "react";
import { API } from "../config/api";
import axios from "axios";
interface Post {
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

interface GetPostsParams {
  category?: string;
  search?: string;
}

export function useGetPosts(params: GetPostsParams = {}) {
  const { category, search } = params;
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true);
      try {
        const queryParams = new URLSearchParams();
        if (category) queryParams.append("category", category);
        if (search) queryParams.append("search", search);

        const url = queryParams.toString()
          ? `${API.BASE_URL}posts?${queryParams.toString()}`
          : `${API.BASE_URL}posts`;

        const response = await axios.get(url);
        const data = response.data?.posts;

        if (!Array.isArray(data)) {
          throw new Error("Invalid posts data format");
        }

        setPosts(data);
        setIsError(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, [category, search]);

  return { posts, isLoading, isError };
}
