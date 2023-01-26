import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingOverlay from "./components/layout/LoadingOverlay";
import ProtectRoute from "./components/routes/ProtectRoute";
import About from "./pages/About";
import AdminHome from "./adminpages/AdminHome";
import Album from "./pages/Album";
import Charity from "./pages/Charity";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Request from "./pages/Request";
import SharedLayout from "./pages/SharedLayout";
import UploadCable from "./adminpages/UploadCable";
import AdminLayout from "./adminpages/AdminLayout";
import Contact from "./pages/Contact";
import AdminContact from "./adminpages/AdminContact";
import ContactIds from "./adminpages/ContactIds";
import AdminCableAlbum from "./adminpages/AdminCableAlbum";
import AdminRequest from "./adminpages/AdminRequest";
import RequestIds from "./adminpages/RequestIds";

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
            <Route path="/pages/contact" element={<Contact />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/loading" element={<LoadingOverlay />} />
          </Route>
          <Route element={<ProtectRoute />}>
            <Route path="/admin" element={<AdminLayout />}>
              {/* <Route path="/admin" element={<AdminHome />} /> */}
              <Route index element={<AdminHome />} />
              <Route path="/admin/uploadcable" element={<UploadCable />} />
              <Route path="/admin/cablealbum" element={<AdminCableAlbum />} />
              <Route path="/admin/contact/" element={<AdminContact />} />
              <Route path="/admin/contact/:id" element={<ContactIds />} />
              <Route path="/admin/request/" element={<AdminRequest />} />
              <Route path="/admin/request/:id" element={<RequestIds />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
