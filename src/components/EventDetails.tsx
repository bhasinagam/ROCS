import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

export function EventDetails() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Event Details</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-slate-50 rounded-lg">
            <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Date & Time</h3>
            <p className="text-gray-600">23rd November, 2024</p>
            <p className="text-gray-600">9:00 AM - 5:00 PM</p>
          </div>

          <div className="text-center p-8 bg-slate-50 rounded-lg">
            <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Venue</h3>
            <p className="text-gray-600">Manipal University Jaipur</p>
            <p className="text-gray-600">Dehmi Kalan, Jaipur</p>
          </div>

          <div className="text-center p-8 bg-slate-50 rounded-lg">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Participants</h3>
            <p className="text-gray-600">Open to all college students</p>
            {/* <p className="text-gray-600"></p> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventDetails;