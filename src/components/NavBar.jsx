import { PlusIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Logo from "../images/hackers-wanted-logo.png";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

function NavBar() {
  const navigate = useNavigate();
  const { user } = useApp();

  const handleCreatePost = () => {
    if (user) {
      navigate("/newpost");
    } else {
      navigate("/signin");
    }
  };

  return (
    <nav className="h-[80px] bg-gray-900 border-b-4 border-green-500 text-white">
      <div className="h-full max-w-7xl flex justify-between items-center mx-auto">
        <div
          className="my-auto h-[30px] text-xl flex font-bold hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={Logo} alt="Hackers Wanted Logo" className="mr-2" />
          Hackers Wanted
        </div>

        <div className="flex items-center border rounded-xl h-10 my-auto w-[300px] py-1 pr-2">
          <input
            className="border-none outline-none w-full pl-2 mx-1 my-1 rounded-lg h-full text-black"
            type="text"
            placeholder="Search for topic"
          />
          <button>
            <MagnifyingGlassIcon className="h-6 w-6" />
          </button>
        </div>

        <button
          className="h-8 ml-4 px-2 py-1 flex my-auto bg-white rounded-lg text-green-600"
          onClick={handleCreatePost}
        >
          <PlusIcon className="h-6 w-6" />
          create new post
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
