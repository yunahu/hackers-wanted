import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";

export default function SignOut() {
  // mock user and sign out
  const user = {
    name: "John Doe",
    email: "johndoe@gmail.com",
  };

  const signOut = () => {
    console.log("Signing out");
  };

  return (
    <div className="mt-4 mx-2 p-4 rounded-xl bg-green-200">
      <div className="flex flex-row gap-2 mb-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full" />
        <div>
          <div className="font-semibold">{user.name}</div>
          <div className="text-sm text-green-700">{user.email}</div>
        </div>
      </div>
      <button
        className="bg-green-100 text-green-700 rounded-lg w-full px-4 py-2 flex flex-row items-center justify-center gap-2 hover:text-black"
        onClick={signOut}
      >
        <ArrowLeftStartOnRectangleIcon className="h-6 w-6" />
        Sign out
      </button>
    </div>
  );
}
