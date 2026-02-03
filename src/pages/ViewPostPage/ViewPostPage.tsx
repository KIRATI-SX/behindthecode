import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer.tsx";
import PostView from "@/components/ui/PostView";
import { useParams } from "react-router-dom";
import type { Post } from "@/types/post";
import axios from "axios";
import { useEffect, useState } from "react";
import { API } from "@/config/api";

function ViewPostPage() {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  async function getPost(postId: number) {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${API.BASE_URL}posts/${postId}`);
      console.log(response.data);
      setPost(response.data);
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (postId) {
      getPost(Number(postId));
    }
  }, [postId]);

  return (
    <>
      <NavBar />
      {!loading && post && (
        <PostView
          id={post.id}
          image={post.image}
          category={post.category}
          title={post.title}
          description={post.description}
          author={post.author}
          date={post.date}
          likes={post.likes}
          content={post.content}
        />
      )}
      {error ? <p>{error}</p> : null}
      <Footer />
    </>
  );
}

export default ViewPostPage;
