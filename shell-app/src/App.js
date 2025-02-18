import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const AuthApp = React.lazy(() => import('micro_frontend_auth/AuthApp'));
const DashboardApp = React.lazy(() => import('micro_frontend_dashboard/DashboardApp'));
const ProfileApp = React.lazy(() => import('micro_frontend_profile/ProfileApp'));

const App = () => {
  return (
    <Router>
      <div className="container mx-auto">
        <nav className="p-4 bg-gray-200">
          <ul className="flex space-x-4">
            <li><Link to="/auth">Auth</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>

        <Suspense fallback={<div className="p-4">Loading...</div>}>
          <Routes>
            <Route path="/auth" element={<AuthApp />} />
            <Route path="/dashboard" element={<DashboardApp />} />
            <Route path="/profile" element={<ProfileApp />} />
            <Route path="/" element={<div className="p-4">Welcome to the Shell App</div>} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
