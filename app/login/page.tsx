const Page = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center max-w-7xl mx-auto gap-10">
      <h1 className="text-7xl font-bold text-blue-600">TodoList</h1>
      <div className="w-full flex items-center justify-center">
        <form
          className="flex flex-col gap-3 justify-center items-center"
          action=""
        >
          <div className="flex gap-3 items-center">
            <label className="w-[60px]" htmlFor="">
              이메일
            </label>
            <div className="w-[200px] px-3 py-1 border rounded-sm">
              <input className="w-full border-none outline-none" type="email" />
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <label className="w-[60px]" htmlFor="">
              비밀번호
            </label>
            <div className="w-[200px] px-3 py-1 border rounded-sm">
              <input
                className="w-full border-none outline-none"
                type="password"
              />
            </div>
          </div>
          <button className="w-full border-none rounded-lg bg-blue-600 px-10 py-3 text-white font-bold mt-5 hover:cursor-pointer">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
