import PlusIcon from "../images/plus_icon.svg";
import SearchIcon from "../images/search_icon.svg";
import Logo from "../images/hackers-wanted-logo.png";
function NavBar(props) {
  return (
    <nav className={props.className}>
      <div className="my-auto h-[30px] text-xl flex">
        <img src={Logo} alt="Hackers Wanted Logo" className="mr-2" />
        Hackers Wanted
      </div>

      <div className="flex items-center border rounded-lg h-[30px] my-auto w-[300px]">
        <input
          className="border-none outline-none w-full pl-2 mx-1 rounded-lg"
          type="text"
          placeholder="Search for topic"
        />
        <button>
          <img src={SearchIcon} alt="Search Icon" className="mr-2" />
        </button>
      </div>

      <button className="ml-4 pr-2 flex my-auto bg-white rounded-lg">
        <img src={PlusIcon} alt="Plus Icon" className="h-5 w-5 ml-2" />
        create new post
      </button>
    </nav>
  );
}

export default NavBar;
