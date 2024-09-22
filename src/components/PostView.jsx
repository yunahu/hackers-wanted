import { ArrowLeftCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PostView() {
  const navigate = useNavigate();
  const { id } = useParams();
  // TODO: fetch post by id

  // mock data
  const post = {
    id: 1,
    title:
      "Consequat primis consectetur at consectetur, tincidunt lacinia quis sit.",
    content:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Curae congue quam natoque non metus; elit senectus platea. Ad tempor integer, eget nulla tristique posuere pretium curae? Dapibus eleifend montes dolor; lorem nostra condimentum fermentum. Laoreet curae cubilia posuere vivamus fames netus urna.",
    tags: ["tag1", "tag2"],
    createdBy: "user1",
    email: "user1@gmail.com",
    createdAt: "2021-09-12T12:00:00Z",
    status: "active",
  };

  const [interested, setInterested] = useState(false);

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
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        {/* User Info */}
        <div>
          <div className="font-semibold">{post.createdBy}</div>
          <div className="text-sm text-gray-400">{post.createdAt}</div>
        </div>
      </div>
      <div className="mt-8 ">
        <h1 className="text-4xl font-bold flex items-center gap-2">
          {post.title}
        </h1>
        {/* Tags */}
        <div className="flex flex-row gap-1 mt-2">
          {post.status === "active" ? (
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
        <p className="mt-2">{post.content}</p>
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
              Contact {post.createdBy} through email
            </h3>
            <p className="mt-2">
              <a
                href={`mailto:${post.email}`}
                className="text-green-500 hover:underline"
              >
                {post.email}
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default PostView;
