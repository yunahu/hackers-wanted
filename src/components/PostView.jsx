import {
  ArrowLeftCircleIcon,
  XMarkIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PostView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [interested, setInterested] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [post, setPost] = useState(null);

  const handleEdit = async () => {
    navigate(`/post/edit/${id}`);
  };

  const handleDelete = async () => {
    const response = await axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}/posts/${id}`,
      {
        withCredentials: true,
      }
    );

    navigate(`/`);
  };

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
  }, []);

  console.log("tt->", post);

  return (
    <div>
      {post && (
        <div className="PostView w-full max-w-2xl mx-auto flex flex-col my-8">
          <div className="flex justify-between">
            <div className="flex flex-row gap-2 items-center">
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
            {/* Dropdown */}
            <div className="relative">
              <button
                className="justify-center items-center"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <EllipsisVerticalIcon className="h-8 w-8" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 z-2 mt-2 w-28 origin-top-right rounded-lg bg-white shadow-lg">
                  <a
                    onClick={handleEdit}
                    className="block px-2 py-1.5 rounded-t-lg hover:bg-green-300"
                  >
                    Edit
                  </a>
                  <a
                    onClick={handleDelete}
                    className="block px-2 py-1 rounded-b-lg hover:bg-green-300"
                  >
                    Delete
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="mt-8 ">
            <h1 className="text-4xl font-bold flex items-center gap-2">
              {post.title}
            </h1>
            {/* Tags */}
            <div className="flex flex-row gap-1 mt-2">
              {post.status == 1 ? (
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                  Active
                </span>
              ) : (
                <span className="bg-gray-300 text-gray-800 px-2 py-1 rounded-full text-sm font-bold">
                  Closed
                </span>
              )}
              {post.tags.map((tag) => (
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
      )}
    </div>
  );
}
export default PostView;
