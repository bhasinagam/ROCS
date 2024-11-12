import React from 'react';
import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const scheduleDay = [
  {
    time: "09:00 AM",
    title: "Opening Ceremony",
    description: "Welcome address and competition guidelines",
  },
  {
    time: "10:00 AM",
    title: "Round 1: Algorithm Sprint",
    description: "Fast-paced algorithmic problem-solving challenge",
  },
  {
    time: "02:00 PM",
    title: "Technical Workshop",
    description: "Advanced Data Structures and Algorithms Workshop",
  },
  {
    time: "04:00 PM",
    title: "Round 2: Code Marathon",
    description: "Extended competitive programming round",
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
            March 15
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
