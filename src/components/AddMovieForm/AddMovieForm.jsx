import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";

const AddMovieForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { title, year, format, actors } = values;
    const movie = { title, year, format, actors };
    // reset form fields
    resetForm();
  };

  return (
    <Formik initialValues={{ title: "", year: "", format: "", actors: "" }} onSubmit={handleSubmit}>
      {() => (
        <Form className="max-w-md mx-auto">
          <div className="flex flex-col mb-4">
            <label htmlFor="title" className="mb-1 font-bold text-gray-700">
              Title
            </label>
            <Field
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              required
              className="px-3 py-2 border border-gray-400 rounded-md"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="year" className="mb-1 font-bold text-gray-700">
              Year
            </label>
            <Field
              type="number"
              name="year"
              id="year"
              placeholder="Year"
              min="1900"
              max="2099"
              required
              className="px-3 py-2 border border-gray-400 rounded-md"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="format" className="mb-1 font-bold text-gray-700">
              Format
            </label>
            <Field
              as="select"
              name="format"
              id="format"
              required
              className="px-3 py-2 border border-gray-400 rounded-md"
            >
              <option value="">Select Format</option>
              <option value="VHS">VHS</option>
              <option value="DVD">DVD</option>
              <option value="Blu-ray">Blu-ray</option>
            </Field>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="actors" className="mb-1 font-bold text-gray-700">
              Actors (comma separated)
            </label>
            <Field
              type="text"
              name="actors"
              id="actors"
              placeholder="Actors (comma separated)"
              required
              className="px-3 py-2 border border-gray-400 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Add Movie
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddMovieForm;
