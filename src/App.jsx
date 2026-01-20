import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import CollectionPage from "./pages/CollectionPage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Contact from "./pages/Contact";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (!isAuthenticated) {
    return <Navigate to="/signup" replace />;
  }
  return children;
};

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen text-white w-full bg-transparent overflow-x-hidden relative flex flex-col">
      {isAuthenticated && <Navbar toggleSidebar={() => setIsSidebarOpen(true)} />}
      {isAuthenticated && <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />}

      <div className="flex-1">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/collection" element={
            <ProtectedRoute>
              <CollectionPage />
            </ProtectedRoute>
          } />

          <Route path="/privacy-policy" element={<ProtectedRoute><PrivacyPolicy /></ProtectedRoute>} />
          <Route path="/terms-of-service" element={<ProtectedRoute><TermsOfService /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />

        </Routes>
      </div>

      {isAuthenticated && <Footer />}

      <ToastContainer theme="dark" position="bottom-right" />
    </div>
  );
};

export default App;
