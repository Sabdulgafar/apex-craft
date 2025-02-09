import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AboutUsPage from './pages/AboutUs';


function App() {
  return (
    <body>
      <Router>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/blog" element={<BlogPage />}/>
                <Route path="/AboutUs" element={<AboutUsPage />}/>
            </Routes>
      </Router>
    </body>
  );
}

export default App;
