import { Outlet } from "react-router";
import Navbar from "../components/ui/Navbar";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
