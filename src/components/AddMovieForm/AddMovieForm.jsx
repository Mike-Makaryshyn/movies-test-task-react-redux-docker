import { useState } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import useAddMovie from "../../services/useAddMovie";
import movieSchema from "../../utils/validation/addMovieSchema";

import Button from "../UI/Button";
import Input from "../UI/Input";

const AddMovieForm = () => {
  const addMovie = useAddMovie();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    const { status } = await addMovie(values);
    if (status) {
      resetForm();
      setIsSuccess(true);
      setIsError(false);
    } else {
      setIsSuccess(false);
      setIsError(true);
    }
  };

  return (
    <Formik
      initialValues={{ title: "", year: "", format: "", actors: [""] }}
      onSubmit={handleSubmit}
      validationSchema={movieSchema}
    >
      {({ values }) => (
        <Form className="mx-auto w-[30vw]">
          <Field name="title" placeholder="Title" required as={Input} />
          <Field
            name="year"
            placeholder="Year"
            required
            type="number"
            as={Input}
          />
          <Field className="p-3 shadow-md rounded" name="format" as="select">
            <option value="">Select Format</option>
            <option value="VHS">VHS</option>
            <option value="DVD">DVD</option>
            <option value="Blu-ray">Blu-ray</option>
          </Field>

          <ErrorMessage name="format">
            {(msg) => <div className="text-red-500 mt-5">{msg}</div>}
          </ErrorMessage>
          <FieldArray name="actors">
            {(arrayHelpers) => (
              <div className="mb-5 mt-5">
                {values.actors.map((actor, index) => (
                  <div key={index} className="flex items-center">
                    <Field
                      name={`actors.${index}`}
                      placeholder="Actor"
                      as={Input}
                    />
                  </div>
                ))}
                <div
                  className="ml-3 cursor-pointer"
                  onClick={() => arrayHelpers.push("")}
                >
                  Add one more actor
                </div>
              </div>
            )}
          </FieldArray>
          <Button text="Add Movie" type="submit" />
          {isSuccess && (
            <div className="text-green-500 mt-5">Movie added successfully!</div>
          )}
          {isError && (
            <div className="text-red-500 mt-5">Something went wrong. Please try again.</div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default AddMovieForm;
