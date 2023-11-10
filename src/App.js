import React from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Home from "./views/Home";
import Gigs from "./views/Gigs";
import News from "./views/News";
import Releases from "./views/Releases";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	return (
    <HelmetProvider>
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
        <div className="md:sticky bottom-0 max-w-full backdrop-opacity-10 backdrop-invert bg-blue-300/10 shadow-lg z-10">
          <Footer />
        </div>
        <ScrollToTop />
      </div>
    </HelmetProvider>
	);
}

export default App;
