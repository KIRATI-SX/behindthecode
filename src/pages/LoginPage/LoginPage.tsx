const LoginPage = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center bg-brown-100">
      <div className="bg-brown-200 rounded-3xl p-16 w-full max-w-[640px] flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-brand-orange text-headline-4 tracking-wider">
            Admin panel
          </h3>
          <h1 className="text-headline-2 text-brown-600">Log in</h1>
        </div>
        <form action="#" method="post" className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="input_email" className="text-body-2 text-brown-500">
              Email
            </label>
            <input
              type="email"
              id="input_email"
              placeholder="Email"
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
              className="p-4 rounded-xl border border-transparent bg-white w-full text-body-1 focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-brown-600 text-white text-body-1 font-semibold rounded-full py-3 px-12 hover:bg-brown-500 transition-colors cursor-pointer"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
