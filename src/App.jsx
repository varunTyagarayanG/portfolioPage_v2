import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import ResearchPapers from './components/ResearchPapers';
import Footer from './components/Footer';
import Blog from './components/Blog';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <ProjectsSection />
              <ResearchPapers />
            </main>
          } />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

