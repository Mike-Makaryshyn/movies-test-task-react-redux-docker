import React from "react";
import Modal from "react-modal";

const MovieDetailsModal = ({ clickedMovie, isDialogOpen, handleCloseDialog }) => {
  const handleAfterOpen = () => {
    document.body.classList.add("modal-open");
    document.documentElement.classList.add("modal-open");
  };

  const handleAfterClose = () => {
    document.body.classList.remove("modal-open");
    document.documentElement.classList.remove("modal-open");
  };

  return (
    <Modal
      isOpen={isDialogOpen}
      onRequestClose={handleCloseDialog}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      className="bg-white text-lg rounded-md shadow-lg w-[90%] h-[85%] m-auto translate-y-[10%] overflow-y-auto outline-none"
      onAfterOpen={handleAfterOpen}
      onAfterClose={handleAfterClose}
    >
      <div className="py-4 px-6">
        <h2 className="text-center text-xl font-bold text-3xl mt-10 mb-3">
          {clickedMovie.title}
        </h2>
        <p className="text-gray-700 text-base mb-3">
          {clickedMovie.description}
        </p>
        <div className="my-2">
          <span className="font-medium">Year:</span> {clickedMovie.year}
        </div>
        <div className="my-2">
          <span className="font-medium">Format:</span> {clickedMovie.format}
        </div>
        <div className="my-2">
          <span className="font-medium">Actors:</span>
          {clickedMovie.actors ? (
            <div className="pl-2">
              {clickedMovie.actors.map((actor, index) => (
                <div key={index}>- {actor.name}</div>
              ))}
            </div>
          ) : (
            <div className="pl-2">No actors listed</div>
          )}
        </div>
        <button
          className="text-gray-600 absolute top-5 right-7 hover:text-black transition-colors duration-200"
          onClick={handleCloseDialog}
        >
          X
        </button>
      </div>
    </Modal>
  );
};

export default MovieDetailsModal;
