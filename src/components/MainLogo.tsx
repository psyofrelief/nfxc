import Link from "next/link";

interface Props {
  className?: string;
}

export default function MainLogo({ className = "" }: Props) {
  return (
    <Link
      href={"/"}
      aria-label="Visit home page"
      className={`font-semibold h-fit text-foreground hover:text-primary transition-colors ${className}`}
    >
      NFXC_
    </Link>
  );
}
