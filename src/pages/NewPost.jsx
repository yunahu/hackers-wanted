import PostForm from "../components/PostForm";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

export default function NewPost() {
  const navigate = useNavigate();

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
            Create New Post
          </h1>
        </div>
        <div className="my-8">
          <PostForm />
        </div>
      </div>{" "}
    </>
  );
}
