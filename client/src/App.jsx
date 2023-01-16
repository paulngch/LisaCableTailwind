import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Album from "./pages/Album";
import Charity from "./pages/Charity";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Request from "./pages/Request";
import SharedLayout from "./pages/SharedLayout";


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/album" element={<Album />} />
            <Route path="/request" element={<Request />} />
            <Route path="/charity" element={<Charity />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}