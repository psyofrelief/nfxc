import { useEffect, useState } from "react";

export default function Footer() {
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
    <footer
      className={`w-full text-xs sm:text-sm flex justify-between lg:justify-end gap-sm border-t-outline pt-sm ${isBottom && "border-t transition-colors"}`}
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
          {"GITHUB_"}
        </a>
        <a
          href="https://www.linkedin.com/in/faried-idris"
          aria-label="View Faried Idris' LinkedIn profile"
          className="hover:text-primary transition-colors"
        >
          {"LINKEDIN_"}
        </a>
      </div>
    </footer>
  );
}
