import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { registrationValidationSchema } from "../../utils/validation/authSchemas";

import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import useAuth from "../../services/useAuth";

const loginInputsData = [
  { placeholder: "Name", name: "name" },
  { placeholder: "E-mail", name: "email", type: "email" },
  { placeholder: "Password", name: "password", type: "password" },
  { placeholder: "Repeat password", name: "confirmPassword", type: "password" },
];

const RegistarationPage = () => {
  const {submitHandler, error} = useAuth('users');

  return (
    <div className="flex flex-col items-center justify-center h-[85vh]">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: ""
        }}
        validationSchema={registrationValidationSchema}
        onSubmit={submitHandler}
      >
        <Form>
          <div className="min-w-[30vw]">
            {loginInputsData.map((props, idx) => (
              <Input key={idx} {...props} />
            ))}
          </div>

          {error.length > 0 ? <div className="text-sm text-red-500 mb-3">{error}</div> : null}

          <Button text="Register" type="submit" />
        </Form>
      </Formik>

      <p>Already have an account?</p>
      <Link
        to="/login"
        className="inline-flex items-center font-medium text-blue-500 hover:underline"
      >
        Return to Login page
      </Link>
    </div>
  );
};

export default RegistarationPage;
