import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Home, User, Info, Activity, Phone } from 'lucide-react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-red-500" />
              <span className="font-bold text-xl">HeartGuard AI</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-red-500">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1 text-gray-700 hover:text-red-500">
              <Info className="h-5 w-5" />
              <span>About</span>
            </Link>
            <Link to="/predict" className="flex items-center space-x-1 text-gray-700 hover:text-red-500">
              <Activity className="h-5 w-5" />
              <span>Predict</span>
            </Link>
            <Link to="/remedies" className="flex items-center space-x-1 text-gray-700 hover:text-red-500">
              <Heart className="h-5 w-5" />
              <span>Remedies</span>
            </Link>
            <Link to="/consultation" className="flex items-center space-x-1 text-gray-700 hover:text-red-500">
              <Phone className="h-5 w-5" />
              <span>Consultation</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-1 text-gray-700 hover:text-red-500"
            >
              <User className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}