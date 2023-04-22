import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

import { CgDetailsMore } from "react-icons/cg";

const MovieItem = ({ movie, idx }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDelete = () => {
    // handle delete action
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-300">
      <div className="flex items-center space-x-2">
        <span className="text-gray-500">{idx + 1}.</span>
        <span className="font-medium">{movie.title}</span>
      </div>
      <div className="flex items-center space-x-2">
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={() => setShowDetails((prev) => !prev)}
        >
          <CgDetailsMore className="mr-5"/>
        </button>
        <button
          className="text-gray-500 hover:text-red-500"
          onClick={handleDelete}
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
};

export default MovieItem;
