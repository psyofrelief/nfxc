import Link from "next/link";

interface Params {
  className?: string;
}
export default function MainLogo({ className = "" }: Params) {
  return (
    <Link
      href={"/"}
      aria-label="Visit home page"
      className={`font-semibold text-foreground hover:text-primary transition-colors ${className}`}
    >
      NFXC_
    </Link>
  );
}
