import * as Yup from "yup";

const movieSchema = Yup.object().shape({
  title: Yup.string()
    .trim()
    .required("Title is required")
    .notOneOf([""], "Title is required"),
  year: Yup.number()
    .required("Year is required")
    .min(1900, "Year must be greater than or equal to 1900")
    .max(2099, "Year must be less than or equal to 2099"),
  format: Yup.string().required("Format is required"),
  actors: Yup.array()
    .of(
      Yup.string()
        .matches(
          /^[a-zA-Z\s'-]*$/,
          "Actor name must contain only letters, spaces, hyphen or apostrophe"
        )
        .trim()
        .required("Actor name is required")
    )
    .test("unique", "", (value) =>
      value ? value.length === new Set(value)?.size : true
    ),
});

export default movieSchema;
