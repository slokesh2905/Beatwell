import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import { Activity } from 'lucide-react';

export default function Predict() {
  const [model, setModel] = useState<tf.LayersModel | null>(null);
  const [prediction, setPrediction] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    age: '',
    sex: '1',
    cp: '0',
    trestbps: '',
    chol: '',
    fbs: '0',
    restecg: '0',
    thalach: '',
    exang: '0',
    oldpeak: '',
    slope: '0',
    ca: '0',
    thal: '0'
  });

  useEffect(() => {
    loadModel();
  }, []);

  const loadModel = async () => {
    try {
      const loadedModel = await tf.loadLayersModel('/model/heart_disease_model.json');
      setModel(loadedModel);
    } catch (error) {
      console.error('Error loading model:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!model) return;

    setLoading(true);
    try {
      const inputData = tf.tensor2d([[
        parseInt(formData.age),
        parseInt(formData.sex),
        parseInt(formData.cp),
        parseInt(formData.trestbps),
        parseInt(formData.chol),
        parseInt(formData.fbs),
        parseInt(formData.restecg),
        parseInt(formData.thalach),
        parseInt(formData.exang),
        parseFloat(formData.oldpeak),
        parseInt(formData.slope),
        parseInt(formData.ca),
        parseInt(formData.thal)
      ]]);

      const result = model.predict(inputData) as tf.Tensor;
      const predictionValue = await result.data();
      setPrediction(predictionValue[0]);
      inputData.dispose();
      result.dispose();
    } catch (error) {
      console.error('Error making prediction:', error);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Activity className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900">Heart Disease Risk Prediction</h1>
        <p className="mt-2 text-gray-600">Enter your health parameters for an AI-powered risk assessment</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Sex</label>
            <select
              name="sex"
              value={formData.sex}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            >
              <option value="1">Male</option>
              <option value="0">Female</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Chest Pain Type</label>
            <select
              name="cp"
              value={formData.cp}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            >
              <option value="0">Typical Angina</option>
              <option value="1">Atypical Angina</option>
              <option value="2">Non-anginal Pain</option>
              <option value="3">Asymptomatic</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Resting Blood Pressure</label>
            <input
              type="number"
              name="trestbps"
              value={formData.trestbps}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Cholesterol</label>
            <input
              type="number"
              name="chol"
              value={formData.chol}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Fasting Blood Sugar</label>
            <select
              name="fbs"
              value={formData.fbs}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            >
              <option value="0">Less than or equal to 120 mg/dl</option>
              <option value="1">Greater than 120 mg/dl</option>
            </select>
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            disabled={loading || !model}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
          >
            {loading ? 'Analyzing...' : 'Predict Risk'}
          </button>
        </div>

        {prediction !== null && (
          <div className="mt-6 p-4 bg-gray-50 rounded-md">
            <h3 className="text-lg font-medium text-gray-900">Prediction Result</h3>
            <p className="mt-2 text-gray-600">
              Risk Level: <span className="font-bold">{(prediction * 100).toFixed(2)}%</span>
            </p>
            <p className="mt-1 text-sm text-gray-500">
              {prediction > 0.5 
                ? 'Higher risk detected. Please consult with a healthcare professional.'
                : 'Lower risk detected. Continue maintaining a healthy lifestyle.'}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}