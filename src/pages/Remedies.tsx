import React from 'react';
import { Heart, Utensils, Dumbbell, Brain, Moon, Cigarette, Wine } from 'lucide-react';

export default function Remedies() {
  const remedies = [
    {
      icon: <Utensils className="h-8 w-8 text-red-500" />,
      title: "Healthy Diet",
      description: "Follow a heart-healthy diet rich in fruits, vegetables, whole grains, and lean proteins.",
      tips: [
        "Increase intake of fruits and vegetables",
        "Choose whole grains over refined grains",
        "Limit saturated and trans fats",
        "Reduce sodium intake to less than 2,300mg daily",
        "Include omega-3 rich foods like fish"
      ]
    },
    {
      icon: <Dumbbell className="h-8 w-8 text-red-500" />,
      title: "Regular Exercise",
      description: "Engage in regular physical activity to strengthen your heart and improve circulation.",
      tips: [
        "Aim for 150 minutes of moderate exercise weekly",
        "Include both cardio and strength training",
        "Start slowly and gradually increase intensity",
        "Take regular walking breaks during the day",
        "Find activities you enjoy to stay motivated"
      ]
    },
    {
      icon: <Brain className="h-8 w-8 text-red-500" />,
      title: "Stress Management",
      description: "Practice stress-reduction techniques to maintain heart health and overall well-being.",
      tips: [
        "Practice daily meditation or deep breathing",
        "Engage in regular yoga sessions",
        "Maintain a healthy work-life balance",
        "Seek professional help when needed",
        "Connect with friends and family regularly"
      ]
    },
    {
      icon: <Moon className="h-8 w-8 text-red-500" />,
      title: "Quality Sleep",
      description: "Ensure adequate sleep to allow your heart and body to rest and recover.",
      tips: [
        "Aim for 7-9 hours of sleep nightly",
        "Maintain a consistent sleep schedule",
        "Create a relaxing bedtime routine",
        "Optimize your sleep environment",
        "Limit screen time before bed"
      ]
    },
    {
      icon: <Cigarette className="h-8 w-8 text-red-500" />,
      title: "Quit Smoking",
      description: "Stopping smoking is one of the best things you can do for your heart health.",
      tips: [
        "Set a quit date and stick to it",
        "Use nicotine replacement therapy if needed",
        "Join a support group",
        "Avoid triggers and temptations",
        "Celebrate milestones in your journey"
      ]
    },
    {
      icon: <Wine className="h-8 w-8 text-red-500" />,
      title: "Limit Alcohol",
      description: "Moderate your alcohol consumption to maintain healthy blood pressure and heart function.",
      tips: [
        "Limit to 1-2 drinks per day maximum",
        "Choose red wine if drinking alcohol",
        "Stay hydrated while drinking",
        "Never binge drink",
        "Consider alcohol-free alternatives"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900">Heart Health Remedies</h1>
        <p className="mt-2 text-gray-600">Lifestyle changes and remedies to improve your heart health</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {remedies.map((remedy, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mx-auto mb-4">
                {remedy.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">{remedy.title}</h3>
              <p className="text-gray-600 text-center mb-4">{remedy.description}</p>
              <ul className="space-y-2">
                {remedy.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-red-500">•</span>
                    <span className="text-gray-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}