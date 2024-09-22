import NavBar from "../components/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import axios from "axios";
import PostForm from "../components/PostForm";

export default function EditPost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    const run = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/posts/${id}`
      );
      if (response) {
        const processed = {
          ...response.data.post,
          tags: response.data.post?.tags.split(","),
        };
        setPost(processed);
      }
      console.log(response.data.post);
    };

    run();
  }, [id]);

  return (
    <>
      <NavBar />
      <div className="PostView w-full max-w-2xl mx-auto flex flex-col">
        <div className="flex flex-row gap-2 items-center mt-8">
          <button
            className="text-green-500 hover:text-green-700"
            onClick={() => navigate(-1)}
          >
            <ArrowLeftCircleIcon className="h-10 w-10" />
          </button>
          <h1 className="text-4xl font-bold flex items-center gap-2">
            Edit Post
          </h1>
        </div>
        <div className="my-8">{post && <PostForm post={post} />}</div>
      </div>
    </>
  );
}
