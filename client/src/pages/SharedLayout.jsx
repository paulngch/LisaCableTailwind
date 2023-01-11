import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import BottomFooter from "../components/BottomFooter";

export default function SharedLayout() {
    return (
        <>
          <div>
            <Navbar />
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
    
