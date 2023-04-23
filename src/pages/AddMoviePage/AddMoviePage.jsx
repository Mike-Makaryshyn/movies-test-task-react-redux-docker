import { Link } from "react-router-dom";
import AddMovieForm from "../../components/AddMovieForm";

const AddMoviePage = () => {
  return (
    <div className="my-10">
      <div className="text-right">
        <Link
          to="/movies"
          className="mr-10 capitalize bg-gray-700 text-white px-4 pl-3 py-2 rounded-md text-sm font-bold cursor-pointer transition-all duration-100 hover:bg-gray-600 hover:text-white-200"
        >
          Return Back
        </Link>
      </div>

      <AddMovieForm />
    </div>
  );
};

export default AddMoviePage;
