import { useEffect, useState } from "react";

export default function Footer() {
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
    <footer
      className={`w-full flex justify-end gap-sm border-t-outline pt-sm ${isBottom && "border-t transition-colors"}`}
    >
      <a
        href="https://github.com/psyofrelief"
        className="hover:text-secondary transition-colors"
      >
        {"// GITHUB"}
      </a>
      <a
        href="https://www.linkedin.com/in/faried-idris"
        className="hover:text-secondary transition-colors"
      >
        {"// LINKEDIN"}
      </a>
    </footer>
  );
}
