import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, "Name must contain at least 2 character")
     .max(60)
     .required("This field is required"),
   email: Yup.string()
     .matches(
       // regular expression for RFC 2822 email validation
       /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/g,
       "Please enter a valid email address"
     )
     .required("This field is required"),
     password: Yup.string()
     .min(5, 'Must contain at least 5 characters')
     .required('This field is required')
 });
 
export const registrationValidationSchema = loginValidationSchema.shape({
   confirmPassword: Yup.string()
    .required('This field is required')
    .oneOf([Yup.ref('password'), null], 'Passwords do not match, check you Caps Lock'),
});

