import PostCard from "./PostCard";
import { useState, useEffect, useRef } from "react";
import { useApp } from "../context/AppContext";

function PostList() {
  const [loading, setLoading] = useState(false);
  const ref = useRef();
  const LIMIT = 5;
  const {
    scrollPosition,
    setScrollPosition,
    postList,
    setPostList,
    offset,
    setOffset,
    selectedTags,
		endReached,
		setEndReached
  } = useApp();

  useEffect(() => {
    if (ref.current && scrollPosition !== 0) {
      ref.current.scrollTop = scrollPosition;
    }
  }, [scrollPosition]);

	const fetchPosts = async () => {
		if (loading) return;
		setLoading(true);

		if (endReached) return;

		try {
			let query = `${
				import.meta.env.VITE_BACKEND_URL
			}/posts?offset=${offset}`;

			if (selectedTags.length > 0) {
				const tagsQuery = selectedTags.join(",");
				query += `&tags=${tagsQuery}`;
			}

			const response = await fetch(query);

			if (!response.ok) throw new Error("Unable to fetch posts.");

			const fetchedPosts = await response.json();
			
			if (fetchedPosts.posts.length < 5) {
				setEndReached(true);
			}

			setPostList((prevPostList) => [...prevPostList, ...fetchedPosts.posts]);
			setOffset((prevOffset) => prevOffset + LIMIT);
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	};

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollableDiv = ref.current;
      setScrollPosition(scrollableDiv.scrollTop);

      if (
        scrollableDiv.scrollTop + scrollableDiv.clientHeight >=
          scrollableDiv.scrollHeight - 100 &&
        !loading
      ) {
				fetchPosts();
      }
    }, 200);

    const scrollableDiv = ref.current;
    if (scrollableDiv) {
      scrollableDiv.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollableDiv) {
        scrollableDiv.removeEventListener("scroll", handleScroll);
      }
    };
  }, [loading]);

  function debounce(fn, delay) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, args), delay);
    };
  }

	useEffect(() => {
		fetchPosts();
	}, []);
	
  return (
    <div
      ref={ref}
      className="flex flex-col gap-4 px-4 pt-4 bg-white max-h-screen overflow-auto"
    >
      {postList.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
export default PostList;
