import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthGuard from "./components/AuthGuard";
import Home from "./pages/Home";
import About from "./pages/About";
import Predict from "./pages/Predict";
import Remedies from "./pages/Remedies";
import Consultation from "./pages/Consultation";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/*"
            element={
              <AuthGuard>
                <>
                  <Navbar />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/predict" element={<Predict />} />
                    <Route path="/remedies" element={<Remedies />} />
                    <Route path="/consultation" element={<Consultation />} />
                  </Routes>
                </>
              </AuthGuard>
            }
          /> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="/remedies" element={<Remedies />} />
          <Route path="/consultation" element={<Consultation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;