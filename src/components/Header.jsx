import { FaBars } from "react-icons/fa";

const Header = ({ toggleSidebar }) => (
  <header className="flex items-center justify-between p-4 bg-white ">
    <h1 className="bg-slate-500 p-3 text-white rounded-lg hover:bg-blue-700">
      Dashboard
    </h1>
    <FaBars
      className="block cursor-pointer md:hidden"
      onClick={toggleSidebar}
    />
  </header>
);

export default Header;
