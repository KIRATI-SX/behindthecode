import type { Post } from "@/types/post";
import { useCallback, useEffect, useState } from "react";

export default function useFetchPost(postId: number, fetchFunction: (postId: number) => Promise<{ data: Post[] }>) {
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    const execute = useCallback(async () => {

        try {
            setLoading(true);
            setError(null);
            const response = await fetchFunction(postId);
            setData(response.data);
        } catch (error) {
            setError(error instanceof Error ? error.message : "An error occurred");
        } finally {
            setLoading(false);
        }
    }, [postId, fetchFunction]);
    useEffect(() => {
        execute();
    }, [execute]);

    return { data, loading, error, refetch: execute };

}