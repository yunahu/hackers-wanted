import NavBar from "../components/NavBar";
import SignIn from "../components/SignIn";

export default function SignInPage() {
  return (
    <>
      <NavBar />
      <div className="w-[320px] mx-auto mt-28">
        <p className="text-center text-lg font-semibold">
          Please sign in to continue
        </p>
        <SignIn />
      </div>
    </>
  );
}
