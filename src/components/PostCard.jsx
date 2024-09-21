function PostCard({ post }) {
  return (
    <div className="p-2 bg-gray-100 rounded-lg">
      PostCard
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div>
        {post.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <button>Read more</button>
    </div>
  );
}
export default PostCard;
