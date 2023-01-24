import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import BottomFooter from "../components/layout/BottomFooter";
import NavbarTwo from "../components/layout/NavbarTwo";

export default function SharedLayout() {
    return (
        <>
          <div>
            <Navbar />
            <NavbarTwo />
            <div>
              <Outlet />
            </div>
            <div>
              <BottomFooter />
            </div>
          </div>
        </>
      );
    }
    
