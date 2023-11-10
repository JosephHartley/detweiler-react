import React from "react";
import { HelmetProvider } from "react-helmet-async";
import Router from "./Router";

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
          <Router />
        <div className="md:sticky bottom-0 max-w-full backdrop-opacity-10 backdrop-invert bg-blue-300/10 shadow-lg z-10">
          <Footer />
        </div>
        <ScrollToTop />
      </div>
    </HelmetProvider>
	);
}

export default App;
