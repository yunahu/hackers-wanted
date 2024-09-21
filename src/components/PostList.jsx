import PostCard from "./PostCard";

// mock data
const posts = [
  {
    id: 1,
    title: "Post 1",
    content: "Post 1 content",
    tags: ["tag1", "tag2"],
  },
  {
    id: 2,
    title: "Post 2",
    content: "Post 2 content",
    tags: ["tag2", "tag3"],
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
  {
    id: 9,
    title: "Post 9",
    content: "Post 9 content",
    tags: ["tag2", "tag3"],
  },
  {
    id: 10,
    title: "Post 10",
    content: "Post 10 content",
    tags: ["tag2", "tag3"],
  },
  {
    id: 11,
    title: "Post 11",
    content: "Post 11 content",
    tags: ["tag2", "tag3"],
  },
  {
    id: 12,
    title: "Post 12",
    content: "Post 12 content",
    tags: ["tag2", "tag3"],
  },
  {
    id: 13,
    title: "Post 13",
    content: "Post 13 content",
    tags: ["tag2", "tag3"],
  },
  {
    id: 14,
    title: "Post 14",
    content: "Post 14 content",
    tags: ["tag2", "tag3"],
  },
  {
    id: 15,
    title: "Post 15",
    content: "Post 15 content",
    tags: ["tag2", "tag3"],
  },
  {
    id: 16,
    title: "Post 16",
    content: "Post 16 content",
    tags: ["tag2", "tag3"],
  },
  {
    id: 17,
    title: "Post 17",
    content: "Post 17 content",
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
