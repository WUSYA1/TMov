import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; 

const movies = [
  { id: 1, title: "Fight Club", img: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg" },
  { id: 2, title: "The Lord of the Rings: The Return of the King", img: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg" },
  { id: 3, title: "Spider-Man: Across the Spider-Verse", img: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg" },
  { id: 4, title: "Kingdom of the Planet of the Apes", img: "https://image.tmdb.org/t/p/w500/gKkl37BQuKTanygYQG1pyYgLVgf.jpg" },
  { id: 5, title: "The Shawshank Redemption", img: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg" },
  { id: 6, title: "Avatar: The Way of Water", img: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" },
  { id: 7, title: "Jurassic World: Dominion", img: "https://image.tmdb.org/t/p/w500/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg" },
  { id: 8, title: "Blade Runner 2049", img: "https://image.tmdb.org/t/p/w500/aMpyrCizvSdc0UIMblJ1srVgAEF.jpg" },
  { id: 9, title: "How to Train Your Dragon: The Hidden World", img: "https://image.tmdb.org/t/p/w500/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg" },
  { id: 10, title: "The Dark Knight", img: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
];

const Body = () => {
  const navigate = useNavigate();

  return (
    <main className="p-8 min-h-screen bg-[#234C6A] text-white">
      <h2 className="text-4xl font-bold mb-10 text-center">🎥 Trending Movies</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {movies.map((movie, index) => (
          <motion.div
            key={movie.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }} // stagger effect
            className="bg-[#1e293b] rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img src={movie.img} alt={movie.title} className="w-full h-64 object-cover" />
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-center text-lg font-semibold mb-2">{movie.title}</h3>
              <button
                onClick={() => navigate(`/movie/${movie.id}`)}
                className="border border-amber-100 bg-[#154d77] hover:bg-[#5c5754] px-4 py-2 rounded-lg font-semibold text-white hover:text-[#99a1a8] transition text-sm"
              >
                Watch Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Body;
