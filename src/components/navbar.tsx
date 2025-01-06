import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-sm border-b border-b-outline ">
      <Logo />
      <DarkModeToggle />
    </nav>
  );
}
