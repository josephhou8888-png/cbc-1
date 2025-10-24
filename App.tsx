import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import BottomNav from './components/BottomNav';

// Define AppRouter as a standalone component outside of App.
// This prevents it from being recreated on every render of the App component,
// which is a React best practice for performance and stability.
const AppRouter: React.FC = () => {
  const path = window.location.pathname;

  let component;
  let showHeaderFooter = true;
  let showBottomNav = false;

  switch (path) {
    case '/login':
      component = <LoginPage />;
      showHeaderFooter = false;
      break;
    case '/signup':
      component = <SignupPage />;
      showHeaderFooter = false;
      break;
    case '/dashboard':
      component = (
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      );
      break;
    default:
      component = <HomePage />;
      showBottomNav = true;
  }

  return (
    <div className={`bg-gray-100 text-gray-800 font-sans antialiased ${showBottomNav ? "pb-16" : ""}`}>
      {showHeaderFooter && <Header />}
      <main>{component}</main>
      {showHeaderFooter && <Footer />}
      {showBottomNav && <BottomNav />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;