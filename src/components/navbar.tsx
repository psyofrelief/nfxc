import Logo from "./logo";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-sm border-b border-b-secondary">
      <Logo />
    </nav>
  );
}
