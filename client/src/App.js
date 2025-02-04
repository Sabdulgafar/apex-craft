import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <body>
      <Router>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/blog" element={<BlogPage />}/>
            </Routes>
      </Router>
    </body>
  );
}

export default App;
