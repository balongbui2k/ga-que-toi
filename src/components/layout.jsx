import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import SideBar from "./side-bar";
import Loader from "./loader";

const Layout = () => {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };
  return (
    <div className="px-4 md:px-0">
      <Header onButtonClick={handleViewSidebar} />
      <SideBar isOpen={sidebarOpen} />
      <main className="sm:mt-6">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
