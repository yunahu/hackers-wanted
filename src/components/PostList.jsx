import PostCard from "./PostCard";

// mock data
const posts = [
  {
    id: 1,
    title: "Post 1 title",
    content: "Post 1 content",
    tags: ["tag1", "tag2"],
    date: "2024-09-21",
    author: "Username",
    open: true,
  },
  {
    id: 2,
    title: "Post 2 title",
    content: "Post 2 content",
    tags: ["tag2", "tag3"],
    date: "2024-09-21",
    author: "author2",
    open: false,
  },
  {
    id: 3,
    title: "Post 3",
    content: "Post 3 content",
    tags: ["tag2", "tag3"],
  },
  {
    id: 4,
    title: "Post 4",
    content: "Post 4 content",
    tags: ["tag2", "tag3"],
  },
  {
    id: 5,
    title: "Post 5",
    content: "Post 5 content",
    tags: ["tag2", "tag3"],
  },
  {
    id: 6,
    title: "Post 6",
    content: "Post 6 content",
    tags: ["tag2", "tag3"],
  },
  {
    id: 7,
    title: "Post 7",
    content: "Post 7 content",
    tags: ["tag2", "tag3"],
  },
  {
    id: 8,
    title: "Post 8",
    content: "Post 8 content",
    tags: ["tag2", "tag3"],
  },
];

function PostList() {
  return (
    <div className="flex flex-col gap-4 px-4 pt-4 bg-white">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
export default PostList;
