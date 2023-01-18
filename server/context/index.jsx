import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // User State
  const [user, setUser] = useState({
    data: null,
    error: null,
    loading: true,
  });

  // Before fetching response from /auth/user, check for token in storage
  const token = localStorage.getItem("token");

  // If token exists, set all request headers to contain Bearer token.
  if (token) {
    axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
  }
};
// export default function index() {
//   return <div>index</div>;
