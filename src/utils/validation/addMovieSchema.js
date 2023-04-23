import * as Yup from "yup";

const movieSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  year: Yup.number()
    .required("Year is required")
    .min(1900, "Year must be greater than or equal to 1900")
    .max(2099, "Year must be less than or equal to 2099"),
  format: Yup.string().required("Format is required"),
  actors: Yup.array()
    .of(Yup.string().required("Actor is required"))
});

export default movieSchema;
