import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Research } from './pages/Research';
import { Publications } from './pages/Publications';
import { People } from './pages/People';
import { News } from './pages/News';
import { Join } from './pages/Join';
import { Resources } from './pages/Resources';
import { Admin } from './pages/Admin';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/research" element={<Layout><Research /></Layout>} />
        <Route path="/publications" element={<Layout><Publications /></Layout>} />
        <Route path="/people" element={<Layout><People /></Layout>} />
        <Route path="/news" element={<Layout><News /></Layout>} />
        <Route path="/join" element={<Layout><Join /></Layout>} />
        <Route path="/resources" element={<Layout><Resources /></Layout>} />
        <Route path="/admin" element={<Layout><Admin /></Layout>} />
      </Routes>
    </HashRouter>
  );
};

export default App;
