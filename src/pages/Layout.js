import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="background">
      <Outlet />
    </div>
  );
}

export default Layout;
