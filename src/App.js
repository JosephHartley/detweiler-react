import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// views
import Home from "./views/Home";
import Gigs from "./views/Gigs";
import Posts from "./views/Posts";
import Releases from "./views/Releases";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<BrowserRouter>
      <div className="background">
        <div className="max-w-full backdrop-opacity-20 backdrop-invert bg-green-500/10 shadow-lg">
          <Header />
        </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gigs" element={<Gigs />} />
            <Route path="/posts" element={<Posts />} />
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
