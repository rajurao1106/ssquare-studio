import React from 'react';
import { Facebook, Linkedin, Youtube, Twitter } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#fcfcfc] text-gray-600 py-12 px-6 md:px-16 font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="space-y-6">
          <div className="brightness-0"> {/* This filter makes a colored logo black for a clean light look if needed */}
            <Image
              src="https://www.ssquarestudio.com/img/logo.png"
              alt="SSquare Studio Logo"
              width={200}
              height={80}
              priority
            />
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum is simply dummy text.
          </p>
          <div className="space-y-3">
            <p className="text-xs font-semibold text-gray-900 uppercase tracking-wider">Follow us on</p>
            <div className="flex gap-3">
              {[Facebook, Linkedin, Youtube, Twitter].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="p-2 bg-gray-100 text-gray-600 hover:bg-[#c5a37d] hover:text-white transition-all duration-300 rounded-md"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-gray-900 font-serif text-xl mb-6">Company</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-[#c5a37d] transition-colors">Our Clients</a></li>
            <li><a href="#" className="hover:text-[#c5a37d] transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-[#c5a37d] transition-colors">Blog</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-gray-900 font-serif text-xl mb-6">Quick Links</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-[#c5a37d] transition-colors">Projects</a></li>
            <li><a href="#" className="hover:text-[#c5a37d] transition-colors">Assets</a></li>
            <li><a href="#" className="hover:text-[#c5a37d] transition-colors">Login</a></li>
            <li><a href="#" className="hover:text-[#c5a37d] transition-colors">Sign Up</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-gray-900 font-serif text-xl mb-6">Contact</h3>
          <div className="space-y-6">
            <div>
              <p className="text-[#c5a37d] text-xs uppercase font-bold mb-1">Address</p>
              <p className="text-gray-800 font-serif text-lg leading-snug">
                Lorem Ipsum is dummy, <br /> text of the printing.
              </p>
            </div>
            <div>
              <p className="text-[#c5a37d] text-xs uppercase font-bold mb-1">Call</p>
              <p className="text-gray-800 font-serif text-lg">+12 123 456 8989</p>
            </div>
            <div>
              <p className="text-[#c5a37d] text-xs uppercase font-bold mb-1">Email</p>
              <p className="text-gray-800 font-serif text-lg">info@companymail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase text-gray-500">
        <p>© 2026 SSQUARE STUDIO. All Rights Reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-900 transition-colors">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;