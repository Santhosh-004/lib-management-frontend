import { Outlet } from "react-router";
import Header from "./header";
import Footer from "./footer";

const Layout = () => {
  return (
    <div className="flex flex-col bg-library-golden-brown h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
