import { FaRegTrashAlt } from "react-icons/fa";
import Checker, { checkerProps } from "./subComponents/Checker";
import Text, { textProps } from "./subComponents/Text";

const TodoItem = ({
  isChecked,
  handleClick,
  text,
}: textProps & checkerProps) => {
  return (
    <div className="w-full flex justify-between group">
      <div className="flex gap-3 items-center">
        <Checker isChecked={isChecked} handleClick={handleClick} />
        <Text isChecked={isChecked} text={text} />
      </div>
      <FaRegTrashAlt className="invisible group-hover:visible hover:cursor-pointer" />
    </div>
  );
};

export default TodoItem;
