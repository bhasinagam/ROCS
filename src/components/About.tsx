import React from 'react';
import { Code2, Users, Trophy, BookOpen } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: "Research Opportunities",
    description: "Gain awareness about various research opportunities in the field of Computer Science"
  },
  {
    icon: Users,
    title: "Networking",
    description: "Connect with fellow programmers and industry experts"
  },
  {
    icon: BookOpen,
    title: "Learning",
    description: "Gain insights from workshops and sessions"
  }
];

export function About() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About ACM ROCS</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
          The ACM ROCS workshop aims to provide students and researchers with a comprehensive understanding of the current and emerging research opportunities within the field of computer science. This workshop is designed to inspire participants to explore various research domains, understand the methodologies involved, and equip them with the necessary tools to embark on their research journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
