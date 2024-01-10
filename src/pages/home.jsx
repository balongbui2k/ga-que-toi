import Content from "../components/content";
import { useState } from "react";
import Header from "../components/header";
import SideBar from "../components/side-bar";
import Footer from "../components/footer";

const Home = () => {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };
  return (
    <div className="px-4 md:px-0">
      <Header onButtonClick={handleViewSidebar} />
      <SideBar isOpen={sidebarOpen} />
      <main className="sm:mt-6">
        <Content />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
