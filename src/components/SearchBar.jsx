import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-2 justify-center mb-4">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search movies..."
        className="input input-success"
      />
      <button type="submit" className="btn btn-success">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
