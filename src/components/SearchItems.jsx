import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchItems( {searchTerm} ) {
    const navigate = useNavigate();
    const [ postList, setPostList ] = useState([]);

    useEffect(() => {
        const searchPosts = async () => {
            if (!searchTerm) {
                setPostList([]);
                return;
            }

            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/posts/search?search=${searchTerm}`);
                const postData = await response.json();
                setPostList(postData.posts)
            } catch (err) {
                console.error(err);
            }
        }
        searchPosts();
    }, [searchTerm]);

  return (
    <>
        {
            searchTerm ? 
            <div className="text-black absolute top-[60px] w-[300px] z-2 mt-2 w-28 origin-top-right rounded-lg bg-white shadow-lg">
                {
                    postList.map((post, index) => (
                        <a
                            key={post.id}
                            className={`cursor-pointer block px-2 py-1 rounded-b-lg hover:bg-green-300  ${index !== postList.length - 1 ? 'border-b border-gray-300' : ''}`}
                            onClick={() => {navigate(`/post/${post.id}`);}}
                            >
                            {post.title}
                        </a>
                    ))
                }
            </div>
            :
            <></>
        }
    </>
  );
}
