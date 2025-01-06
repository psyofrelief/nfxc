import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-sm border-b border-b-secondary fixed top-0 right-0 left-0 bg-background z-[1] mx-lg">
      <Logo />
      <DarkModeToggle />
    </nav>
  );
}
