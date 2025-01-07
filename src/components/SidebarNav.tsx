import { categories } from "@/data/netflix-codes";
import { useState, useEffect } from "react";
import MainLogo from "./MainLogo";

export default function SidebarNav() {
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
          aria-label={`Visit Netflix genre ${category}`}
          className="hover:font-semibold hover:text-foreground transition-colors w-full"
        >
          {category}
        </a>
      ))}
      <div
        className={`mt-auto border-t-outline pt-sm w-full ${isBottom && "border-t transition-all"}`}
      >
        <MainLogo />
      </div>
    </div>
  );
}
