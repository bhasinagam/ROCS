import React from 'react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-6">
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="text-gray-400">Email: <a href="mailto:acm@muj.manipal.edu" className="hover:text-white transition-colors">acm@muj.manipal.edu</a></p>
            <p className="text-gray-400">Phone: <a href="tel:+911234567890" className="hover:text-white transition-colors">+91 1234567890</a></p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="https://in.explara.com/e/research-opportunities-in-computer-science-at-manipal-university-jaipur" className="text-gray-400 hover:text-white transition-colors">Register</a></li>
              <li><a href="#schedule" className="text-gray-400 hover:text-white transition-colors">Schedule</a></li>
              <li><a href="#speakers" className="text-gray-400 hover:text-white transition-colors">Speakers</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-6 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 ACM Student Chapter - Manipal University Jaipur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
