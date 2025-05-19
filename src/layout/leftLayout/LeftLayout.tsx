import { ReactNode } from "react";

type LeftLayoutProps = {
  children: ReactNode;
};

const LeftLayout = ({ children }: LeftLayoutProps) => {
  return (
    <div className="bg-[#f1f5fd] w-full h-full mx-auto flex flex-col items-center justify-between gap-3 pb-20">
      {children}
    </div>
  );
};

export default LeftLayout;
