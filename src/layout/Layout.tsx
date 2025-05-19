import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-screen grid grid-cols-[2fr_1fr]">{children}</div>
  );
};

export default Layout;
