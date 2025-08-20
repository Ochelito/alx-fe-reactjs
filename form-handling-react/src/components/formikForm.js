import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  return React.createElement(Formik, {
    initialValues: { username: "", email: "", password: "" },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Formik form submitted:", values);
      alert("Registration successful with Formik!");
    },
    children: (formik) =>
      React.createElement(
        "form",
        { onSubmit: formik.handleSubmit },
        <>
          <h2>User Registration (Formik)</h2>

          <div>
            <label>Username:</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="p" style={{ color: "red" }} />
          </div>

          <div>
            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="p" style={{ color: "red" }} />
          </div>

          <div>
            <label>Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="p" style={{ color: "red" }} />
          </div>

          <button type="submit">Register</button>
        </>
      ),
  });
}

export default FormikForm;
