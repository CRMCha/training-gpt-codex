import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full">
      <div className="flex gap-12 h-32 items-center justify-center font-bold text-3xl">
        <Link to="/">
          Home
        </Link>
        <Link to="/todo">
          Todo
        </Link>
      </div>
    </nav>
  );
}
