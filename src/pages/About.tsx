import React from 'react';
import { Heart, Award, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          About HeartGuard AI
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          Empowering you with AI-driven heart health insights
        </p>
      </div>

      <div className="mt-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="flex justify-center">
              <Heart className="h-12 w-12 text-red-500" />
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900">Our Mission</h3>
            <p className="mt-2 text-gray-500">
              To make heart health prediction accessible and accurate using advanced AI technology.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <Award className="h-12 w-12 text-red-500" />
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900">Expertise</h3>
            <p className="mt-2 text-gray-500">
              Backed by leading cardiologists and AI researchers with years of experience.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <Shield className="h-12 w-12 text-red-500" />
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900">Technology</h3>
            <p className="mt-2 text-gray-500">
              Using state-of-the-art machine learning models trained on extensive medical data.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <h3 className="text-2xl font-bold text-gray-900">How It Works</h3>
            <div className="mt-4 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-500 text-white">
                    1
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Input Your Data</h4>
                  <p className="mt-1 text-gray-500">
                    Provide your health parameters and medical history through our secure interface.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-500 text-white">
                    2
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">AI Analysis</h4>
                  <p className="mt-1 text-gray-500">
                    Our AI model analyzes your data using advanced algorithms to assess heart disease risk.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-500 text-white">
                    3
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Get Results</h4>
                  <p className="mt-1 text-gray-500">
                    Receive detailed insights and recommendations based on your risk assessment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}