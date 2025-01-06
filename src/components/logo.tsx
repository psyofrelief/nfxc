import Link from "next/link";

interface Params {
  className?: string;
}
export default function Logo({ className = "" }: Params) {
  return (
    <Link
      href={"/"}
      className={`font-semibold hover:text-primary transition-colors ${className}`}
    >
      NFXC_
    </Link>
  );
}
