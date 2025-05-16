import { FaCheck } from "react-icons/fa";

export type checkerProps = {
  isChecked: boolean;
  handleClick: () => void;
};

const Checker = ({ isChecked, handleClick }: checkerProps) => {
  return (
    <FaCheck
      onClick={handleClick}
      style={{
        color: `${isChecked ? "red" : "gray"}`,
      }}
    />
  );
};

export default Checker;
