import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontPage from "./Pages/FrontPage";
import Timetable from "./Pages/Timetable";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/timetable" element={<Timetable />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
