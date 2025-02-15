import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Heart, Phone } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          Welcome to <span className="text-red-600">HeartGuard AI</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Advanced heart disease prediction powered by artificial intelligence.
          Get instant health insights and connect with medical professionals.
        </p>
      </div>

      <div className="mt-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="relative p-6 bg-white rounded-lg shadow-lg">
            <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
              <Activity className="h-16 w-16 p-3 bg-red-600 text-white rounded-lg" />
            </div>
            <h3 className="mt-8 text-xl font-medium text-gray-900 text-center">Predict Risk</h3>
            <p className="mt-2 text-gray-500">
              Use our AI-powered tool to assess your heart disease risk based on various health parameters.
            </p>
            <Link
              to="/predict"
              className="mt-4 inline-block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              Start Prediction
            </Link>
          </div>

          <div className="relative p-6 bg-white rounded-lg shadow-lg">
            <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
              <Heart className="h-16 w-16 p-3 bg-red-600 text-white rounded-lg" />
            </div>
            <h3 className="mt-8 text-xl font-medium text-gray-900 text-center">Health Tips</h3>
            <p className="mt-2 text-gray-500">
              Discover personalized remedies and lifestyle changes to improve your heart health.
            </p>
            <Link
              to="/remedies"
              className="mt-4 inline-block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              View Remedies
            </Link>
          </div>

          <div className="relative p-6 bg-white rounded-lg shadow-lg">
            <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
              <Phone className="h-16 w-16 p-3 bg-red-600 text-white rounded-lg" />
            </div>
            <h3 className="mt-8 text-xl font-medium text-gray-900 text-center">Expert Consultation</h3>
            <p className="mt-2 text-gray-500">
              Connect with qualified healthcare professionals for personalized medical advice.
            </p>
            <Link
              to="/consultation"
              className="mt-4 inline-block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}