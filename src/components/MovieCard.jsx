import React from "react";

const MovieCard = ({ movie, onToggleFavorite, isFavorite, onViewDetails, onWatchTrailer }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-lg">
      {/* Poster */}
      <img
        className="w-full h-96 object-cover group-hover:scale-110 duration-300"
        src={posterUrl}
        alt={movie.title}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 duration-300 flex flex-col justify-center items-center text-center p-4">
        <h2 className="text-xl font-bold text-white mb-2">{movie.title}</h2>
        <p className="text-gray-300 mb-4">
          {movie.release_date ? movie.release_date.substring(0, 4) : "N/A"}
        </p>
        <div className="flex gap-2 flex-wrap justify-center">
          <button
            className="btn btn-sm btn-primary"
            onClick={() => onViewDetails(movie.id)}
          >
            Details
          </button>
          <button
            onClick={() => onToggleFavorite(movie)}
            className={`btn btn-sm ${isFavorite ? "btn-error" : "btn-secondary"}`}
          >
            {isFavorite ? "Remove" : "Favorite"}
          </button>
          <button
            onClick={() => onWatchTrailer(movie.id)}
            className="btn btn-sm btn-accent"
          >
            Watch Trailer
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
