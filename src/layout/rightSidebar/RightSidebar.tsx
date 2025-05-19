import { ReactNode } from "react";

type RightSidebarProps = {
  children: ReactNode;
};

const RightSidebar = ({ children }: RightSidebarProps) => {
  return (
    <div className="w-full h-screen mx-auto flex- flex-col items-center justify-center gap-3">
      {children}
    </div>
  );
};

export default RightSidebar;
