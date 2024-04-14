import { Outlet } from "react-router-dom";
import "./styles.scss";

import Header from "../components/Header"

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout