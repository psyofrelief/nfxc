import { categories } from "@/data/netflix-codes";
import { useState, useEffect } from "react";
import MainLogo from "./MainLogo";

export default function SidebarNav() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const checkIfBottom = () => {
      setIsBottom(
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight,
      );
    };

    window.addEventListener("scroll", checkIfBottom);
    return () => window.removeEventListener("scroll", checkIfBottom);
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
      <MainLogo
        className={`mt-auto border-t-outline pt-xs w-full ${isBottom && "border-t transition-all"}`}
      />
    </div>
  );
}
