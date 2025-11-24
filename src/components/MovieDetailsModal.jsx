import React from "react";

const MovieDetailsModal = ({
  movie,
  onClose,
  isFavorite,
  onToggleFavorite,
}) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div className="modal modal-open">
      <div className="modal-box w-full max-w-2xl sm:max-w-3xl bg-base-100 shadow-xl">
        <h3 className="font-bold text-xl sm:text-2xl mb-4">{movie.title}</h3>
        {/* Poster */}
        <img
          src={posterUrl}
          alt={movie.title}
          className="rounded-lg mb-4 w-full object-contain max-h-96"
        />
        {/* Description */}
        <div className="text-left space-y-2">
          <p className="leading-relaxed">{movie.overview}</p>
          <p className="font-semibold">
            <span>Release Date</span> {movie.release_date || "N/A"}
          </p>
          <p className="font-semibold">
            <span>Rating</span> {movie.vote_average || "N/A"}
          </p>
          <p>
            <span>Genres:</span>{" "}
            {movie.genres ? movie.genres.map((g) => g.name).join(", ") : "N/A"}
          </p>
        </div>
        {/* Buttons */}
        <div className="flex flex-wrap gap-3 justify-end mt-6">
          <button
            onClick={onToggleFavorite}
            className={`btn ${isFavorite ? "btn-error" : "btn-secondary"}`}
          >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
      {/* Modal Backdrop */}
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
};

export default MovieDetailsModal;
