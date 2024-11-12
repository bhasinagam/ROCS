import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const organizers = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Faculty Advisor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    description: "Professor, Department of Computer Science",
    linkedin: "#",
    email: "mailto:rajesh.kumar@muj.manipal.edu"
  },
  {
    name: "Aaditya Sharma",
    role: "Student Chair",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80",
    description: "Final Year, Computer Science",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Priya Patel",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    description: "Third Year, Computer Science",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Rahul Verma",
    role: "Event Coordinator",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    description: "Final Year, Computer Science",
    linkedin: "#",
    github: "#"
  }
];

export function Organizers() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The dedicated team behind ACM ROCS 2024
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {organizers.map((organizer, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="aspect-w-1 aspect-h-1 relative">
                <img
                  src={organizer.image}
                  alt={organizer.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex space-x-4">
                    {organizer.linkedin && (
                      <a href={organizer.linkedin} className="text-white hover:text-blue-400 transition-colors">
                        <Linkedin className="h-6 w-6" />
                      </a>
                    )}
                    {organizer.github && (
                      <a href={organizer.github} className="text-white hover:text-blue-400 transition-colors">
                        <Github className="h-6 w-6" />
                      </a>
                    )}
                    {organizer.email && (
                      <a href={organizer.email} className="text-white hover:text-blue-400 transition-colors">
                        <Mail className="h-6 w-6" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{organizer.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-2">{organizer.role}</p>
                <p className="text-gray-600 text-sm">{organizer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Organizers;