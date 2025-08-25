import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikYupForm() {
  const initialValues = {
    username: "",
    email: "",
    password: ""
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required")
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);
    resetForm(); // Optional: clears form after submission
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form noValidate>
        <div>
          <label htmlFor="username">Username</label>
          <Field
            type="text"
            id="username"
            name="username"
            placeholder="Enter username"
          />
          <ErrorMessage name="username" component="div" role="alert" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
          />
          <ErrorMessage name="email" component="div" role="alert" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
          />
          <ErrorMessage name="password" component="div" role="alert" />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}

export default FormikYupForm;
