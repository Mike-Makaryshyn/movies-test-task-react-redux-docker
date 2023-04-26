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
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("Movie added successfully!");

  const handleSubmit = async (values, { resetForm }) => {
    const {
      status,
      error: dataErr,
      code: requestError,
    } = await addMovie(values);

    let dataErrMsg = dataErr?.code?.toLowerCase().replace("_", " ");
    let requestErrorMsg = requestError?.toLowerCase().replace("_", " ");

    if (status) {
      resetForm();
      setIsSuccess(true);
      setIsError(false);
      setTimeout(() => {
        setSuccessMsg("");
      }, 2000);
    } else {
      setIsSuccess(false);
      setIsError(true);
      setErrorMsg(requestErrorMsg || dataErrMsg);
    }
  };

  const isDuplicate = (arr) => {
    return new Set(arr).size !== arr.length;
  };

  return (
    <Formik
      initialValues={{ title: "", year: "", format: "", actors: [""] }}
      onSubmit={handleSubmit}
      validationSchema={movieSchema}
    >
      {({ values, errors }) => (
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
            <option value="Blu-Ray">Blu-ray</option>
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

                {isDuplicate(values.actors) && (
                  <div className="text-sm text-red-500 mb-3">
                    Actors should be unique!
                  </div>
                )}

                <div
                  className="cursor-pointer my-link"
                  onClick={() => arrayHelpers.push("")}
                >
                  Add one more actor
                </div>
              </div>
            )}
          </FieldArray>

          <Button text="Add Movie" type="submit" />
          {isSuccess && <div className="text-green-500 mt-5">{successMsg}</div>}

          {isError && (
            <div className="text-red-500 mt-5">Seems like {errorMsg}!</div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default AddMovieForm;
