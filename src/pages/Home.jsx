import { useApp } from "../context/AppContext";

import PostList from "../components/PostList";
import NavBar from "../components/NavBar";
import SignIn from "../components/SignIn";
import SignOut from "../components/SignOut";
import AboutUs from "../components/AboutUs";
import TagList from '../components/TagList';

function Home() {
  const { user } = useApp();

  return (
    <div className="bg-gray-50">
      <NavBar />
      <div className="grid grid-cols-[1fr,2fr,1fr] max-w-7xl mx-auto">
        <TagList/>
        <PostList />
        <div>
          {user ? <SignOut /> : <SignIn />}
          <AboutUs />
        </div>
      </div>
    </div>
  );
}

export default Home;
