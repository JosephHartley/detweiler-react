import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import Gigs from './views/Gigs';
import Releases from './views/Releases';
import News from './views/News';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gigs" element={<Gigs />} />
      <Route path="/news" element={<News />} />
      <Route path="/releases" element={<Releases />} />
    </Routes>
  );
};

export default Router;
