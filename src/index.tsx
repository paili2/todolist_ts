"use client";

import { ChangeEvent, useEffect, useState } from "react";
import Title from "./list/subComponent/title/Title";
import Todo from "./list/subComponent/Todo";

const TodoApp = () => {
  const [inputValue, setInputValue] = useState("할 일을 추가하세요");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {}, [inputValue]);

  return (
    <div className="w-full h-screen mx-auto flex flex-col items-center justify-center gap-3">
      <Title />
      <Todo />
      <div className="flex gap-3">
        <div className="w-[500px] border rounded-2xl px-3 py-1 ">
          <input
            defaultValue={inputValue}
            onChange={handleChange}
            className="border-none w-full appearance-none outline-none"
            type="text"
          />
        </div>
        <button className="bg-blue-400 px-3 rounded-4xl">+</button>
      </div>
    </div>
  );
};

export default TodoApp;
