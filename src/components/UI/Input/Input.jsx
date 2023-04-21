import React from "react";
import { Field, useField } from "formik";

const Input = ({ placeholder, name, type = "text" }) => {
  const [, meta] = useField(name);

  return (
    <div className="block mb-2">
      <Field
        name={name}
        placeholder={placeholder}
        type={type}
        className={`h-8 bg-gray-50 border ${
          meta.touched && meta.error ? "border-red-500" : "border-gray-300"
        } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-6 mb-4 shadow-md`}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500 mb-3">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Input;
