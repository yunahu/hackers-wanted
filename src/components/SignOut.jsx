import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { useAuth } from '../context/AuthContext';

export default function SignOut() {
  const { user, setUser } = useAuth();

  const signOut = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/logout`, {
        method: 'GET',
        credentials: "include"
    });

    if (!response.ok) throw new Error('Unable to sign out.');

    setUser(null);

    } catch (err) {
      console.error(err);
      // TODO
    }
  };

  return (
    <div className="mt-4 mx-2 p-4 rounded-xl bg-green-200">
      <div className="flex flex-row gap-2 mb-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full">
          <img src={user.profile_picture || "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=200"} alt="profile picture"/>
        </div>
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
