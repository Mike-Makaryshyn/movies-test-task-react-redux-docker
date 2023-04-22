import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { loginValidationSchema } from "../../utils/validation/authSchemas";

import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import useAuth from "../../hooks/useAuth";
import { useSelector } from "react-redux";

const loginInputsData = [
  { placeholder: "Name", name: "name" },
  { placeholder: "E-mail", name: "email", type: "email" },
  { placeholder: "Password", name: "password", type: "password" },
];

const LoginPage = () => {
  const { submitHandler, logoutHadler, error } = useAuth("sessions");
  const { email: isLoggedIn } = useSelector((state) => state.user);

  return (
    <div className="flex flex-col items-center justify-center h-[82vh]">
      {isLoggedIn ? (
        <>
          <p className="pb-5">You are signed in already!</p>
          <div>
            <Button text="Log out" onClick={logoutHadler}></Button>
          </div>
        </>
      ) : (
        <>
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={loginValidationSchema}
            onSubmit={submitHandler}
          >
            <Form>
              <div className="min-w-[30vw]">
                {loginInputsData.map((props, idx) => (
                  <Input key={idx} {...props} />
                ))}
              </div>

              {error.length > 0 ? (
                <div className="text-sm text-red-500 mb-3">{error}</div>
              ) : null}

              <Button text="Log in" type="submit" />
            </Form>
          </Formik>

          <p>Not registrated yet?</p>
          <Link
            to="/registration"
            className="inline-flex items-center font-medium text-blue-500 hover:underline"
          >
            Create an account
          </Link>
        </>
      )}
    </div>
  );
};

export default LoginPage;
