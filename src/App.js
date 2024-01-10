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

const NotFound = () => {
  return (
    <>
      <div className="min-h-screen flex flex-grow items-center justify-center text-center px-5">
        <div className="p-5 border-8 border-payeRed rounded-xl">
          <h1 className="text-4xl text-payeYellow">404</h1>
          <h3 className="text-payeBlue my-4">Hot dang, the page you were looking for could not be found.</h3>
          <button className="bg-payeYellow border border-payeYellow text-white font-bold py-2 px-4 rounded">
            <a href="/">
              Go back home
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

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
            <Route path="*" element={<NotFound />} />
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
