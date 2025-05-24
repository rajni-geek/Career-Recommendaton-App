import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import AssessmentPage from './pages/AssessmentPage';
import CareersPage from './pages/CareersPage';
import CareerDetailPage from './pages/CareerDetailPage';
import DashboardPage from './pages/DashboardPage';
import { AssessmentProvider } from './context/AssessmentContext';
import './index.css';

function App() {
  return (
    <AssessmentProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
          <Route path="/assessment" element={<AssessmentPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/:id" element={<CareerDetailPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Router>
    </AssessmentProvider>
  );
}

export default App;