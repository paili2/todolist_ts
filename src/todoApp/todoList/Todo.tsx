"use client";

import { useState } from "react";
import TodoItem from "./todoItem/TodoItem";

type todoProps = { todoList: string[] };

const Todo = ({ todoList }: todoProps) => {
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
    <div className="w-full flex flex-col justify-start items-start gap-3 px-15">
      {todoList.map((v, i) => {
        return (
          <TodoItem
            key={i}
            isChecked={isChecked[i]}
            handleClick={() => handleClick(i)}
            text={v}
          ></TodoItem>
        );
      })}
    </div>
  );
};

export default Todo;
