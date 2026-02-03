import axiosInstance from "@/api/axiosInstance";


export const getPostViewKey = (postId: string) => axiosInstance.get(`/posts/view/${postId}`);