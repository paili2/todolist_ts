export type TodoProps = {
  isChecked: boolean;
  text: string;
};

const TodoText = ({ isChecked, text }: TodoProps) => {
  return (
    <span style={{ textDecoration: `${isChecked ? "line-through" : "none"}` }}>
      {text}
    </span>
  );
};

export default TodoText;
