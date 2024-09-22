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
];

function PostList() {
  return (
    <div className="flex flex-col gap-4 mx-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
export default PostList;
