import React from 'react';
import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const scheduleDay = [
  {
    time: "09:00 AM - 09:20 AM",
    title: "Registrations",
    description: "",
  },
  {
    time: "09:20 AM - 09:30 AM",
    title: "Opening Remarks",
    description: "Dr Akhilesh Sharma, MU-Jaipur",
  },
  {
    time: "09:30 AM - 09:45 AM",
    title: "Dr Sudip Misra, IIT Kharagpur",
    description: "ROCS and ACM India RFC activities",
  },
  {
    time: "09:45 AM - 10:30 AM",
    title: "Dr. Arun Balaji Buduru, IIIT Delhi",
    description: "Usable Security and Affective AI",
  },
  {
    time: "10:30 AM - 11:00 AM",
    title: "Coffee Break",
    description: "",
  },
  {
    time: "11:00 AM - 11:45 AM",
    title: "Dr. Rajiv Raman, IIIT Delhi",
    description: "Theory Research in India",
  },
  {
    time: "11:45 AM - 12:30 PM",
    title: "Dr. Dip Sankar Banerjee, IIT Jodhpur",
    description: "Opportunities and future directions in data-driven computational systems",
  },
  {
    time: "12:30 PM - 01:45 PM",
    title: "Lunch Break",
    description: "",
  },
  {
    time: "01:45 PM - 02:30 PM",
    title: "Dr. Avinash Sharma, IIT Jodhpur",
    description: "Digitizing Humans for Gaming & AR/VR Applications",
  },
  {
    time: "02:30 PM - 03:00 PM",
    title: "Break",
    description: "",
  },
  {
    time: "03:00 PM - 04:00 PM",
    title: "AMA (Ask me anything) session",
    description: "Interactive session with the speakers",
  },
];


const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Schedule() {
  return (
    <section className="py-24 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Event Schedule</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="bg-white rounded-lg shadow-lg p-8 border border-gray-100"
        >
          <h3 className="text-2xl font-bold mb-10 text-slate-900 flex items-center justify-center">
            <Clock className="mr-2 text-blue-500" />
            November 23rd
          </h3>

          <div className="space-y-12">
            {scheduleDay.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 border-l-2 border-blue-500"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500"></div>
                <time className="text-sm font-semibold text-blue-600 mb-1 block">{item.time}</time>
                <h4 className="text-xl font-semibold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Schedule;
