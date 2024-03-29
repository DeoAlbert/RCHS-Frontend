import { SIDENAV_ITEMS } from "@/SIDEBAR_CONSTANTS";
import Image from "next/image";
import { SideBarMenuItem } from "./sidebar-menu-item";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useSideBarToggle } from "@/hooks/use-sidebar-toggle";

export const SideBar = () => {
  const [mounted, setMounted] = useState(false);
  const { toggleCollapse } = useSideBarToggle();

  const asideStyle = classNames(
    "sidebar overflow-y-auto overflow-x-auto fixed bg-sidebar h-full shadow-sm shadow-slate-500/40 transition duration-300 ease-in-out z-[99999]",
    {
      ["w-[20rem]"]: !toggleCollapse,
      ["sm:w-[5.4rem] sm:left-0 left-[-100%]"]: toggleCollapse,
    }
  );

  useEffect(() => setMounted(true), []);

  return (
    <aside className={asideStyle}>
      <div className="flex relative items-center py-5 px-3.5">
        <Image
          alt="RCHS System"
          src="/logo.png"
          className="w-12 mx-3.5 min-h-fit"
          width={35}
          height={35}
        ></Image>
        {!toggleCollapse && (
          <h3 className="pl-2 font-bold text-2xl">RCHS System</h3>
        )}
      </div>
      <nav className="flex flex-col gap-2 transition duration-300">
        <div className="flex flex-col gap-2 px-4">
          {SIDENAV_ITEMS.map((item, index) => {
            return (
              <SideBarMenuItem
                key={index}
                item={item}
                toggleCollapse={toggleCollapse}
              />
            );
          })}
        </div>
      </nav>
    </aside>
  );
};
