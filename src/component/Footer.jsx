import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center py-6 bg-gradient-to-r from-[#1B3C53] to-[#122c3f] text-gray-300 border-t border-gray-700">
      <p className="text-sm">
        © {year} <span className="font-semibold text-white">TMov</span>. All rights reserved.
      </p>
      <p className="mt-1 text-xs text-gray-500">
        Built with by Tugu
      </p>
    </footer>
  );
};

export default Footer;
