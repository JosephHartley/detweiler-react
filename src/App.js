import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Gigs from "./views/Gigs";
import News from "./views/News";
import Releases from "./views/Releases";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<BrowserRouter>
      <div className="noise">
        <div className="sticky top-0 max-w-full backdrop-opacity-10 backdrop-invert bg-blue-300/10 shadow-lg z-10">
          <Header />
        </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gigs" element={<Gigs />} />
            <Route path="/news" element={<News />} />
            <Route path="/releases" element={<Releases />} />
          </Routes>
        <div className="max-w-full">
          <Footer />
        </div>
      </div>
		</BrowserRouter>
	);
}

export default App;
