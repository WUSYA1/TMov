import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "CINEMA", path: "/cinema" },
    { label: "ANIME", path: "/anime" },
    { label: "CARTOON", path: "/cartoon" },
    { label: "CONTENT", path: "/content" },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" }); // дээрээс эхлэх
  };

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-gradient-to-r from-[#456882] to-[#5680a0] shadow-lg">
      <h1
        onClick={() => {
          navigate("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="text-4xl font-extrabold text-white tracking-wide cursor-pointer"
      >
        🎬 TMov
      </h1>

      <nav className="flex items-center space-x-6 text-base">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => handleNavigate(item.path)}
            className={`font-bold mt-2 px-4 py-2 rounded text-sm transition ${
              location.pathname === item.path
                ? "bg-[#154d77] text-white"
                : "bg-[#154d77] active:bg-[#5c5754] text-white hover:text-[#99a1a8] focus:outline-1"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
