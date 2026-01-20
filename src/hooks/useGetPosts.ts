import { useState, useEffect } from 'react';
import { API } from '../config/api';

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

export function useGetPosts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch(`${API.BASE_URL}posts`);
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();
                setPosts(data);
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