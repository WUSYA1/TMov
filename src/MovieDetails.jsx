import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import movies from './component/Body'; // Body.jsx-д байгаа movies array-г экспортлоно гэж төсөөлье

const MovieDetails = () => {
  const { id } = useParams(); // URL-аас ID авах
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <p className="text-center text-white mt-10">Movie not found!</p>;

  return (
    <main className="p-8 min-h-screen bg-[#234C6A] text-white flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-6">{movie.title}</h2>
      <img src={movie.img} alt={movie.title} className="w-2/5 rounded shadow-lg mb-6" />
      <p className="text-center max-w-2xl mb-6">
        {/* Жишээ тайлбар, дэлгэрэнгүй мэдээлэл: */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="bg-[#154d77] hover:bg-[#5c5754] px-6 py-2 rounded text-white transition"
      >
        Back
      </button>
    </main>
  );
};

export default MovieDetails;
