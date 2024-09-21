import PostList from "../components/PostList";
import NavBar from "../components/NavBar";
function Home() {
  return (
    <div className="grid grid-rows-[50px,1fr] grid-cols-3 gap-4 text-center">
      <NavBar className="col-start-1 col-end-4 row-start-1 row-end-2 bg-gray-400 text-black flex justify-around align-middle" />
      <p className="col-start-1 col-end-2 row-start-2 row-end-4">
        Tags go here
      </p>
      <PostList className="col-start-2 col-end-3 row-start-2 row-end-3" />
      <div className="col-start-3 col-end-4 row-start-2 row-end-3">
        <p>Profile</p>
        <p>About Us</p>
      </div>
    </div>
  );
}

export default Home;
