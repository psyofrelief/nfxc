"use client";
import { netflixCodes } from "@/data/netflix-codes";
import SearchInput from "./SearchInput";
import { useEffect, useState } from "react";

export interface Subcategory {
  name: string;
  code: number;
}

export interface NetflixCategory {
  category: string;
  code: number;
  subcategories: Subcategory[];
}

export default function CodesPanel() {
  const [codes, setCodes] = useState(netflixCodes);
  return (
    <div className="flex-1 flex flex-col gap-md">
      {netflixCodes.map((code) => (
        <div key={Math.random()} className="flex justify-end gap-md ">
          <p className="text-md font-semibold uppercase">
            {code.category}{" "}
            <span className="text-primary font-normal ">{code.code}</span>
          </p>
          <ul className="flex flex-col flex-1 max-w-[400px]">
            {code.subcategories.map((item) => (
              <li
                key={Math.random()}
                className="flex justify-between items-center"
              >
                {item.name}
                <span className="text-primary">{item.code}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
