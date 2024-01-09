import Content from "../components/content";
import { useState } from "react";
import Header from "../components/header";
import SideBar from "../components/side-bar";

const Home = () => {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };
  return (
    <div>
      <Header onButtonClick={handleViewSidebar} />
      <SideBar isOpen={sidebarOpen} />
      <main className="sm:mt-6">
        <Content />
      </main>
    </div>
  );
};

export default Home;
