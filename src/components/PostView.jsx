import { ArrowLeftCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PostView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({
    id: 1,
    title:
      "Loading",
    description:
      "Loading...",
    tags: "",
    user_name: "user1",
    user_email: "user1@gmail.com",
    created_at: "2021-09-12T12:00:00Z",
    status: 1,
  });

  useEffect(() => {
    const run = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/posts/${id}`);

        if (!response.ok) throw new Error('Unable to fetch post.');

        const postData = await response.json();
        setPost(postData.post);

      } catch (err) {
        console.error(err);
      }
      
    };

    run();
  }, []);

  const [interested, setInterested] = useState(false);
  const tags = post.tags.split(',');

  return (
    <div className="PostView w-full max-w-2xl mx-auto flex flex-col">
      <div className="flex flex-row gap-2 items-center mt-8">
        <button
          className="text-green-500 hover:text-green-700"
          onClick={() => navigate(-1)}
        >
          <ArrowLeftCircleIcon className="h-10 w-10" />
        </button>
        {/* Avatar */}
        <div className="w-10 h-10 bg-gray-300 rounded-full">
        <img className="rounded-full" src={post.user_picture || "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=200"} alt="profile picture"/>
        </div>
        {/* User Info */}
        <div>
          <div className="font-semibold">{post.user_name}</div>
          <div className="text-sm text-gray-400">{post.created_at}</div>
        </div>
      </div>
      <div className="mt-8 ">
        <h1 className="text-4xl font-bold flex items-center gap-2">
          {post.title}
        </h1>
        {/* Tags */}
        <div className="flex flex-row gap-1 mt-2">
          {post.status == 0 ? (
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm font-bold">
              Active
            </span>
          ) : (
            <span className="bg-gray-300 text-gray-800 px-2 py-1 rounded-full text-sm font-bold">
              Closed
            </span>
          )}
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-green-400 text-black px-2 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Detailed Content */}
        <p className="mt-2">{post.description}</p>
      </div>
      <div className="mt-8">
        <button
          onClick={() => setInterested(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          I&apos;m interested
        </button>
        {interested && (
          <div className="mt-4 relative bg-green-100 text-green-800 p-4 rounded-lg">
            <button
              onClick={() => setInterested(false)}
              className="absolute top-2 right-2"
            >
              <XMarkIcon className="h-4 w-4" />
            </button>

            <h3 className="font-semibold">
              Contact {post.user_name} through email
            </h3>
            <p className="mt-2">
              <a
                href={`mailto:${post.user_email}`}
                className="text-green-500 hover:underline"
              >
                {post.user_email}
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default PostView;
