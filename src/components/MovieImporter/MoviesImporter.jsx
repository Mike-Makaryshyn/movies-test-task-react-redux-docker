import React, { useState } from "react";
import useImportMovies from "../../services/useImport";
import Button from "../UI/Button";

function MoviesImporter() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    if (event.target.files) {
      const file = event.target.files[0];
      if (file) setFile(file);
      if (file.name) setFileName(file.name);
    }
  };

  const importMovies = useImportMovies();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) return;

    const { status } = await importMovies(file);
    setStatus(status);

    if (status) {
      setStatusMessage("The file has been sent!");
      window.location.reload();
    } else {
      setStatusMessage(
        "Something went wrong! Maybe your file does not contain needed info."
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex-col">
        <label
          htmlFor="file-upload"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Import your movies from a file:
        </label>
        <div className="flex items-center justify-start items-center">
          <label
            htmlFor="file-upload"
            className="bg-gray-700 text-white px-4 py-1.5 rounded-md cursor-pointer hover:bg-gray-800 whitespace-nowrap"
          >
            Choose File
            <input
              type="file"
              id="file-upload"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          <div className="w-full md:w-[10vw] ml-5">
            <Button text="IMPORT" type="submit" />
          </div>
          {fileName && <div className="ml-3">{fileName}</div>}
        </div>
      </form>

      <div className={status ? "text-green-500 mt-5" : "text-red-400 mt-5"}>
        {statusMessage}
      </div>
    </div>
  );
}

export default MoviesImporter;
