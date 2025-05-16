"use client";
import { FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Checker from "./Checker";
import TodoText from "./TodoText";

const Todo = () => {
  const [isChecked, setIsChecked] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleClick = (num: number) => {
    setIsChecked((prev) => {
      const newPrev = [...prev];
      newPrev[num] = !newPrev[num];
      return newPrev;
    });
  };

  return (
    <div className="w-[500px] flex flex-col justify-start items-start gap-3 ">
      <div className="flex items-center justify-center gap-3 group">
        <Checker isChecked={isChecked[0]} handleClick={() => handleClick(0)} />
        <TodoText isChecked={isChecked[0]} text={"유튜브 보기"} />
        <FaRegTrashAlt className="invisible group-hover:visible hover:cursor-pointer" />
      </div>
      <div className="flex items-center justify-center gap-3 group">
        <Checker isChecked={isChecked[1]} handleClick={() => handleClick(1)} />
        <TodoText isChecked={isChecked[1]} text={"맛있는 거 먹기"} />
        <FaRegTrashAlt className="invisible group-hover:visible hover:cursor-pointer" />
      </div>
      <div className="flex items-center justify-center gap-3 group">
        <Checker isChecked={isChecked[2]} handleClick={() => handleClick(2)} />
        <TodoText isChecked={isChecked[2]} text={"강아지랑 놀아주기"} />
        <FaRegTrashAlt className="invisible group-hover:visible hover:cursor-pointer" />
      </div>
      <div className="flex items-center justify-center gap-3 group">
        <Checker isChecked={isChecked[3]} handleClick={() => handleClick(3)} />
        <TodoText isChecked={isChecked[3]} text={"운동하기"} />
        <FaRegTrashAlt className="invisible group-hover:visible hover:cursor-pointer" />
      </div>
      <div className="flex items-center justify-center gap-3 group">
        <Checker isChecked={isChecked[4]} handleClick={() => handleClick(4)} />
        <TodoText isChecked={isChecked[4]} text={"공부하기"} />
        <FaRegTrashAlt className="invisible group-hover:visible hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default Todo;
