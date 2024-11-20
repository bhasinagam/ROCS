import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const speakers = [
  {
    name: "Dr. Sudip Misra",
    role: "Professor, IIT Kharagpur",
    image: "/sudip.jpg",
    description: "",
    linkedin: "https://www.linkedin.com/in/sudip-misra-22b80610/?originalSubdomain=in",
    github: "#"
  },
  {
    name: "Dr. Arun Balaji Buduru",
    role: "Assosciate Professor, IIIT Delhi",
    image: "/arun.jpg",
    description: "",
    linkedin: "https://www.linkedin.com/in/arun-balaji-buduru-8802a824/?originalSubdomain=in",
    github: "#"
  },
  {
    name: "Dr. Avinash Sharma",
    role: "Assosciate Professor, IIT Jodhpur",
    image: "avinash.jpg",
    description: "",
    linkedin: "https://www.linkedin.com/in/avinash-sharma-8963027/?originalSubdomain=in",
    github: "#"
  },
  {
    name: "Dr. Rajiv Raman",
    role: "Assosciate Professor, IIIT Delhi",
    image: "rajiv.jpg",
    description: "",
    linkedin: "https://rajivraman.weebly.com/",
    github: "#"
  },
  {
    name: "Dr. Dip Sankar Banerjee",
    role: "Assosciate Professor, IIT Jodhpur",
    image: "dip.jpg",
    description: "",
    linkedin: "https://www.linkedin.com/in/dipsankar/?originalSubdomain=in",
    github: "#"
  }
];

export function Speakers() {
  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Distinguished Speakers</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn from industry experts and accomplished competitive programmers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {/* First three speakers */}
          {speakers.slice(0, 3).map((speaker, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group lg:col-span-2">
              <div className="relative h-72">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-contain bg-gray-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex space-x-4">
                    <a href={speaker.linkedin} className="text-white hover:text-blue-400 transition-colors">
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{speaker.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-2">{speaker.role}</p>
              </div>
            </div>
          ))}

          {/* Last two speakers */}
          {speakers.slice(3).map((speaker, index) => (
            <div key={index + 3} className={`bg-white rounded-lg shadow-lg overflow-hidden group lg:col-span-2 ${index === 0 ? 'lg:col-start-2' : 'lg:col-start-4'}`}>
              <div className="relative h-72">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-contain bg-gray-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex space-x-4">
                    <a href={speaker.linkedin} className="text-white hover:text-blue-400 transition-colors">
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{speaker.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-2">{speaker.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Speakers;
