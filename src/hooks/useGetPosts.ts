import { useState, useEffect } from 'react';
import { API } from '../config/api';
import axios from 'axios';
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

// type FetchPostsResponse = {
//     posts: Post[];
// }

export function useGetPosts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.get(`${API.BASE_URL}posts`);
               console.log(response);
                setPosts(response.data.posts);
            } catch (error) {
                console.error("Error fetching posts:", error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchPosts();
    }, []);

    return { posts, isLoading, isError };
}