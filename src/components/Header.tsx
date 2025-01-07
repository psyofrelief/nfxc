import DarkModeToggle from "./DarkModeToggle";
import MainLogo from "./MainLogo";

export default function Header() {
  return (
    <nav
      id="navbar"
      className="flex items-center justify-between py-sm border-b border-b-outline"
    >
      <MainLogo />
      <DarkModeToggle />
    </nav>
  );
}
