import { useState } from "react";
import { Link } from "react-router-dom";

function SignupPage() {
  const [fullname, setFullname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center bg-brown-100">
      <div className="bg-brown-200 rounded-3xl p-16 w-full max-w-[640px] flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-headline-2 text-brown-600">Sign up</h1>
        </div>
        <form action="#" method="post" className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="input_name" className="text-body-2 text-brown-500">
              Name
            </label>
            <input
              type="text"
              id="input_name"
              placeholder="Full name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="p-4 rounded-xl border border-transparent bg-white w-full text-body-1 focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="input_username"
              className="text-body-2 text-brown-500"
            >
              Username
            </label>
            <input
              type="text"
              id="input_username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-4 rounded-xl border border-transparent bg-white w-full text-body-1 focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="input_email" className="text-body-2 text-brown-500">
              Email
            </label>
            <input
              type="email"
              id="input_email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-4 rounded-xl border border-transparent bg-white w-full text-body-1 focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="input_password"
              className="text-body-2 text-brown-500"
            >
              Password
            </label>
            <input
              type="password"
              id="input_password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-4 rounded-xl border border-transparent bg-white w-full text-body-1 focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
          </div>
          <div className="flex justify-center mt-4 ">
            <button
              type="submit"
              className="bg-brown-600 text-white text-body-1 font-semibold rounded-full py-3 px-12 hover:bg-brown-500 transition-colors cursor-pointer w-[144px] max-w-[144px]"
            >
              Sign up
            </button>
          </div>
          <div className="flex flex-row justify-center items-center text-center  gap-2">
            <p className="text-body-1 text-brown-500">
              Already have an account?
            </p>
            <Link
              to="/login"
              className="text-body-2 text-brown-600 font-bold underline decoration-1 underline-offset-4"
            >
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
