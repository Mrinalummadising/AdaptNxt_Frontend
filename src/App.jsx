import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import Inventory from "./pages/Inventory";
import Orders from "./pages/Orders";
import Returns from "./pages/Returns";
import Customers from "./pages/Customers";
import Shipping from "./pages/Shipping";
import Channel from "./pages/Channel";
import "./index.css";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="flex h-screen bg-[#F9F9F9]">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex flex-col flex-1">
          <Header toggleSidebar={toggleSidebar} />
          <main className="flex-1 p-4 overflow-y-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Inventory" element={<Inventory />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/returns" element={<Returns />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/shippings" element={<Shipping />} />
              <Route path="/channel" element={<Channel />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
