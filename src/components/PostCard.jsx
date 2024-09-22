import { useNavigate } from "react-router-dom";

function PostCard({ post }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/post/${post.id}`);
  };

  const tags = post.tags.split(",");

  return (
    <div className="hover:cursor-pointer" onClick={handleClick}>
      <div className="bg-[#d9d9d9] rounded-2xl">
        <div className="pl-[15px] pt-[13px] pr-[26px] pb-[17px]">
          <div className="rounded-full bg-white flex w-[66px] items-center mb-[15px]">
            <div
              className={`w-2.5 h-2.5 rounded-full m-1
                ${post.status ? "bg-green-500" : "bg-gray-300"}`}
            ></div>
            <span className="text-xs">{post.status ? "Active" : "Closed"}</span>
          </div>
          <h2 className="font-bold text-2xl mb-[8px]">{post.title}</h2>
          <div className="text-white ml-[3px]">
            <p>{post.description}</p>
          </div>
        </div>
        <div className="bg-[#f5f5f5] h-9 flex gap-[20px] items-center rounded-b-2xl px-[15px]">
          {tags.map((tag) => (
            <span
              className="bg-[#d9d9d9] px-[5px] rounded-full h-5 min-w-12	flex items-center text-xs justify-center"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-[8px] ml-[15px] mr-[15px] flex justify-between">
        <div className="flex gap-2">
          <div className="border w-4 h-4 rounded-full border-black"></div>
          <span className="text-xs">{post.name}</span>
        </div>
        <span className="text-xs">{post.created_at}</span>
      </div>
    </div>
  );
}
export default PostCard;
