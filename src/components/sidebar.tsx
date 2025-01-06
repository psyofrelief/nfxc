import { categories } from "@/data/netflix-codes";
import Logo from "./Logo";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const [isBottom, setIsBottom] = useState(false);

  const checkIfBottom = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight
    ) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkIfBottom);

    return () => {
      window.removeEventListener("scroll", checkIfBottom);
    };
  }, []);

  return (
    <div className="flex flex-col uppercase text-secondary gap-xs top-0 py-sm h-screen sticky justify-start items-start">
      {categories.map((category) => (
        <a
          href={`#${category.toLowerCase()}`}
          key={category}
          className="hover:font-semibold hover:text-foreground transition-colors w-full"
        >
          {category}
        </a>
      ))}
      <div
        className={`mt-auto border-t-outline pt-sm w-full ${isBottom && "border-t transition-all"}`}
      >
        <Logo />
      </div>
    </div>
  );
}
