import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div className="w-[320px] mx-auto mt-28">
        <p className="text-center text-lg font-semibold">
          Oops! Page not found😢
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 mx-auto w-full text-sm text-green-500 hover:text-green-700 underline"
        >
          &lt; Back to Home
        </button>
      </div>
    </>
  );
}
