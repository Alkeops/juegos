import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";
import {useContext} from 'react';
import { ThemeContext } from "../../App";

export const UserLayout = () => {
  
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
