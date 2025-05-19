import { ChangeEvent, MouseEvent } from "react";

type todoInputProps = {
  inputValue: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
};

const TodoInput = ({
  inputValue,
  handleChange,
  handleClick,
}: todoInputProps) => {
  return (
    <div className="w-full flex gap-3 px-15">
      <div className="w-full border rounded-3xl px-3 py-2">
        <input
          placeholder="할 일을 추가하세요"
          value={inputValue}
          onChange={handleChange}
          className="border-none w-full appearance-none outline-none"
          type="text"
        />
      </div>
      <button onClick={handleClick} className="bg-blue-400 px-4 rounded-4xl">
        +
      </button>
    </div>
  );
};

export default TodoInput;
