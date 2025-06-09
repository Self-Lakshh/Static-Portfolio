import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Mainpage from './views/Mainpage';
import { ProtectedRoute, PublicRoute } from './routes/ProtectedRoute';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import './index.css';

// =========================
// DescriptionWithClamp: Expandable/collapsible description with line clamp and 'See more/less'
// =========================
const DescriptionWithClamp = ({ text, className = '' }) => {
  const [expanded, setExpanded] = useState(false);
  // Show 'See more' if text likely wraps more than one line
  const charLimit = 80;
  const shouldClamp = text.length > charLimit;
  return (
    <div className={className + ' relative'}>
      {!expanded ? (
        <div className={shouldClamp ? 'line-clamp-1 text-gray-800' : 'text-gray-800'} style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}>
          {text}
          {shouldClamp && (
            <span
              className="absolute bottom-0 right-0 bg-white text-gray-500 text-sm pl-1 cursor-pointer hover:underline"
              onClick={() => setExpanded(true)}
            >
              See more
            </span>
          )}
        </div>
      ) : (
        <div className="text-gray-800" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}>
          <p>{text}</p>
          <button
            className="text-gray-600 hover:underline text-sm mt-2"
            onClick={() => setExpanded(false)}
          >
            See less
          </button>
        </div>
      )}
    </div>
  );
};

// =========================
// Main App Component
// =========================
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Simple auth state for demo

  // TEMP: Demo signup button for quick auth
  const tempSignup = () => setIsAuthenticated(true);

  // Initialize AOS (Animate On Scroll)
  useEffect(() => {
    AOS.init({ once: true, duration: 700, offset: 40 });
  }, []);

  // Secure route guard for Mainpage
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/login" element={<Auth mode="login" onAuth={() => setIsAuthenticated(true)} />} />
          <Route path="/signup" element={<Auth mode="signup" onAuth={() => setIsAuthenticated(true)} />} />
        </Route>
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Mainpage />} />
        </Route>
        <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} replace />} />
      </Routes>
      {/* TEMP: Remove this after real auth is in place */}
      {!isAuthenticated && (
        <button onClick={tempSignup} className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded shadow-lg z-50">Temp Signup</button>
      )}
    </Router>
  );
};

export default App;
