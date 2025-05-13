"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarData } from "@/static-data/navbar-data";
import clsx from "clsx";

const NavBar = () => {
  const pathname = usePathname();
  const isActive = (url: string) => url === pathname;

  return (
    <nav >
      <ul className="flex gap-[22px] items-center list-none ">
        {/* Mapping navbar-data */}
        {navbarData.map((item) => (
          <li key={item.id}>
            <Link
              href={item.path}
              className={clsx(
                "text-[#1C1C1C] hover:border-b-2 hover:border-[#7874FF] leading-[25.2px] text-lg font-sofia-pro-regular text-center",
                isActive(item.path) ? "text-[#7874FF] border-b-2 border-[#7874FF] font-sofia-pro-semibold" : null
              )}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
