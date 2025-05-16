import { GiHamburgerMenu } from "react-icons/gi";

const Title = () => {
  return (
    <div className="w-[500px] flex items-center gap-10 bg-blue-300 px-20 py-3">
      <GiHamburgerMenu />
      <h1>Website todo</h1>
    </div>
  );
};

export default Title;
