import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext';
import LoadingOverlay from '../layout/LoadingOverlay';


export default function ProtectRoute() {
  const [user] = UserAuth();

  if (user.loading) {
    return (
      <LoadingOverlay />
    );
  }
  return user.data ? <Outlet /> : <Navigate to="/login" />;
};