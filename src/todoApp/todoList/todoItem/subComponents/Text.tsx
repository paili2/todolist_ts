export type textProps = {
  isChecked: boolean;
  text: string;
};

const Text = ({ isChecked, text }: textProps) => {
  return (
    <span style={{ textDecoration: `${isChecked ? "line-through" : "none"}` }}>
      {text}
    </span>
  );
};

export default Text;
