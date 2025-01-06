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
      className={`w-full flex justify-between lg:justify-end gap-sm border-t-outline pt-sm ${isBottom && "border-t transition-colors"}`}
    >
      <a href="#navbar" className="block lg:hidden font-semibold">
        BACK TO TOP ^
      </a>
      <div className="flex gap-sm items-center">
        <a
          href="https://github.com/psyofrelief/nfxc"
          aria-label="View Github source code"
          className="hover:text-primary transition-colors"
        >
          {"// GITHUB"}
        </a>
        <a
          href="https://www.linkedin.com/in/faried-idris"
          aria-label="View Faried Idris' LinkedIn profile"
          className="hover:text-primary transition-colors"
        >
          {"// LINKEDIN"}
        </a>
      </div>
    </footer>
  );
}
