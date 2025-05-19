"use client";

import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import Todo from "./todoList/Todo";
import TodoInput from "./todoInput/TodoInput";
import Layout from "../layout/Layout";
import LeftLayout from "../layout/leftLayout/LeftLayout";
import RightSidebar from "../layout/rightSidebar/RightSidebar";
import Title from "./title/Title";
import Dashboard from "../dashboard";

const TodoApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = () => {
    if (!inputValue.trim()) {
      return;
    }
    setTodoList((prev) => [...prev, inputValue]);
    setInputValue("");
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <Layout>
      <LeftLayout>
        <Title />
        <Todo todoList={todoList} />
        <TodoInput
          inputValue={inputValue}
          handleChange={handleChange}
          handleClick={handleClick}
        ></TodoInput>
      </LeftLayout>
      <RightSidebar>
        <Dashboard></Dashboard>
      </RightSidebar>
    </Layout>
  );
};

export default TodoApp;
