import { useApp } from '../context/AppContext';

import PostList from "../components/PostList";
import NavBar from "../components/NavBar";
import SignIn from "../components/SignIn";
import SignOut from "../components/SignOut";

function Home() {
  const { user } = useApp();

  return (
    <div className="bg-gray-50">
      <NavBar />
      <div className="grid grid-cols-[1fr,2fr,1fr] max-w-7xl mx-auto">
        <div>Tags go here</div>
        <PostList />
        <div>
          {user ? <SignOut /> : <SignIn />}
          <p>About Us</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
