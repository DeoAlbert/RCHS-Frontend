import classNames from "classnames";
import { ReactNode } from "react";

export default function PageWrapper({ children, toggleCollapse }: { children: ReactNode, toggleCollapse: boolean }) {
  const pageStyle = classNames("bg-slate-50 flex-grow text-black p-2 mt-16",
  {
    ["pl-[20rem]"]:!toggleCollapse,
    ["pl-[5.6rem]"]:toggleCollapse,
  });
  return <div className={pageStyle}>{children}</div>;
}
