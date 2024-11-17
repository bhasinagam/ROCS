import React from 'react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-6">
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="text-gray-400">
              Email: <a href="mailto:acm@muj.manipal.edu" className="hover:text-white transition-colors">acm@muj.manipal.edu</a>
            </p>
          
          </div>

          {/* Organizers Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Organizers</h3>
            <p className="text-gray-400">
              Dr. Akhilesh Kumar Sharma: <a href="tel:+917737674426" className="hover:text-white transition-colors">+917737674426</a>
            </p>
            <p className="text-gray-400">
              Dr. Kumar Gaurav: <a href="tel:+919672789881" className="hover:text-white transition-colors">+919672789881</a>
            </p>
            <p className="text-gray-400">
              Mr. Deevesh Choudhary: <a href="tel:+919983364567" className="hover:text-white transition-colors">+919983364567</a>
            </p>
          </div>

          {/* Student Organizer Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Student Organizer</h3>
            <p className="text-gray-400">
              Kuljeet Singh Shekhawat: <a href="tel:+919330168199" className="hover:text-white transition-colors">+919330168199</a>
            </p>
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
