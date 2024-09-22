import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";

export default function SignIn() {
  const signInWithGoogle = () => {
    window.open(`${import.meta.env.VITE_BACKEND_URL}/auth/google`, "_self");
  };

  return (
    <div className="gap-4 mt-4 mx-2 p-4 rounded-xl bg-gray-200">
      <h2 className="text-2xl font-semibold mb-2 text-center">
        Share your ideas,
        <br />
        Find your teammates
      </h2>
      <button
        className="bg-green-500 text-white w-full px-4 py-2 rounded-lg flex flex-row items-center justify-center gap-2 hover:bg-green-700"
        onClick={signInWithGoogle}
      >
        <ArrowLeftEndOnRectangleIcon className="h-6 w-6" />
        Sign In with Google
      </button>
    </div>
  );
}
