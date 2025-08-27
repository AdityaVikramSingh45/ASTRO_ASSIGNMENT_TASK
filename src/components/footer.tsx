import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-16 relative overflow-hidden">
      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-repeat opacity-[0.03]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')" }}></div>
      
      {/* Main Footer Container */}
      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-16">
        
        {/* Column 1: About Company */}
        <div className="flex flex-col">
          <div className="flex items-center text-white font-bold text-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4.257a1 1 0 00.325.753l3.5 3.5a1 1 0 001.414-1.414L11 10.586V6z" clipRule="evenodd" />
            </svg>
            Pipepro
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Proin pretium sem libero, nec aliquet augue lobortis in. Phasellus nibh quam, molestie
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.588-1.333h2.412v-3h-3.419c-3.614 0-5.581 1.631-5.581 4.772v2.228z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2.5c-.276 0-.5-.224-.5-.5v-7c0-.276.224-.5.5-.5h2.5c.276 0 .5.224.5.5v7c0 .276-.224.5-.5.5zm4.5-2h-3v-2h3v2zm-3-4h3v-2h-3v2zm3-2h-3v-2h3v2zm.5 10c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm-5.5 0c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm-1.5-4h-1v-1h1v1zm2-1h-1v-1h1v1zm-2-2h-1v-1h1v1zm2-1h-1v-1h1v1zm2 0h-1v-1h1v1zm-2-2h-1v-1h1v1zm-2-1h1v1h-1v-1zm1 1h1v1h-1v-1z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.241 16h-2.226v-7h2.226v7zm-1.113-7c-.792 0-1.291-.51-1.291-1.272 0-.76.5-1.272 1.256-1.272.77 0 1.291.512 1.291 1.272-.001.762-.522 1.272-1.256 1.272zm9.114 7h-2.226v-3.791c0-.422-.019-.85-.038-1.282h.038c.026.042.479.851 1.583.851 1.768 0 3.094-1.127 3.094-3.593v-1.785h-2.227v1.78c0 .12-.008.238-.016.355-.178-.344-.658-.838-1.396-.838-1.144 0-2.083.882-2.083 2.083v3.714h-2.226v-7h2.227v.984c.319-.59.878-.984 1.838-.984 1.206 0 2.822.806 2.822 3.864v4.136z"/></svg>
            </a>
          </div>
        </div>
        
        {/* Column 2: Services */}
        <div>
          <h3 className="text-white text-lg font-bold mb-5">Services</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition-colors">Drip Detectives</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Leak Stop Specialists</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pipe Dream Team</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Rapid Repair Squad</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Clear Flow Plumbers</a></li>
          </ul>
        </div>
        
        {/* Column 3: Quick Links */}
        <div>
          <h3 className="text-white text-lg font-bold mb-5">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>
        
        {/* Column 4: Contact Info */}
        <div>
          <h3 className="text-white text-lg font-bold mb-5">Contact Info</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-800 text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20 22.628l-3.264-1.342c-.229-.092-.49-.124-.741-.092-1.921.235-4.577-.665-6.79-2.879-2.214-2.213-3.115-4.87-2.879-6.79.032-.251.0-.512-.092-.741l-1.342-3.264c-.114-.276-.239-.757.243-1.094l5.968-4.329c.478-.344 1.258-.239 1.625.263l3.664 5.257c.36.516.208 1.157-.311 1.493l-1.317.842c-.443.284-.698.816-.576 1.343.344 1.496 1.246 2.878 2.508 4.14s2.644 2.164 4.14 2.508c.527.122 1.059-.133 1.343-.576l.842-1.317c.336-.519.977-.671 1.493-.311l5.257 3.664c.502.367.607 1.147.263 1.625l-4.329 5.968c-.337.482-.818.607-1.094.243z"/></svg>
              </div>
              <div>
                <div className="text-sm text-gray-500">Call Now</div>
                <div className="text-lg text-white font-bold">+125 (895) 658 568</div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-800 text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-4.97 0-9 4.03-9 9 0 3.99 3.03 8.356 9 12.632 5.97-4.276 9-8.642 9-12.632 0-4.97-4.03-9-9-9zm0 12c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
              </div>
              <div>
                <div className="text-sm text-gray-500">Office Address</div>
                <div className="text-lg text-white font-bold">66 Brokiyant, New India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Separator */}
      <div className="border-t border-gray-700 mt-12 mx-auto max-w-7xl relative z-10"></div>
      
      {/* Bottom Copyright & Links */}
      <div className="container mx-auto px-4 relative z-10 mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <div className="mb-4 md:mb-0">
          &copy; Pipepro 2024 | All Rights Reserved
        </div>
        <div className="space-x-4">
          <a href="#" className="hover:text-white transition-colors">Privacy & Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;