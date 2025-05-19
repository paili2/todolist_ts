import { GiHamburgerMenu } from "react-icons/gi";

const Title = () => {
  return (
    <div className="w-full flex items-center gap-10 bg-blue-300 px-15 py-5">
      <GiHamburgerMenu />
      <h1>Website todo</h1>
    </div>
  );
};

export default Title;
