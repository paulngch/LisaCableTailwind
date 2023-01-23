import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingOverlay from "./components/layout/LoadingOverlay";
import ProtectRoute from "./components/routes/ProtectRoute";
import About from "./pages/About";
import AdminDashboard from "./adminpages/AdminDashboard";
import Album from "./pages/Album";
import Charity from "./pages/Charity";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Request from "./pages/Request";
import SharedLayout from "./pages/SharedLayout";
import UploadCable from "./adminpages/UploadCable";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/pages/album" element={<Album />} />
            <Route path="/pages/request" element={<Request />} />
            <Route path="/pages/charity" element={<Charity />} />
            <Route path="/pages/about" element={<About />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/loading" element={<LoadingOverlay />} />
          </Route>
          <Route element={<ProtectRoute />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/uploadcable" element={<UploadCable />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
