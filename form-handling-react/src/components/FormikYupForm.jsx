import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  username: Yup.string().trim().required("Username is required"),
  email: Yup.string().trim().email("Invalid email address").required("Email is required"),
  password: Yup.string().trim().min(6, "Minimum 6 characters").required("Password is required"),
});

function FormikYupForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log("Formik (Yup) submit:", values);
        // TODO: send to API
      }}
      validateOnBlur
      validateOnChange
    >
      {({ isValid, dirty }) => (
        <Form noValidate>
          <label htmlFor="username">User Name</label>
          <Field id="username" name="username" type="text" />
          <ErrorMessage name="username" component="div" role="alert" />

          <label htmlFor="email">Email Address</label>
          <Field id="email" name="email" type="email" />
          <ErrorMessage name="email" component="div" role="alert" />

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" type="password" />
          <ErrorMessage name="password" component="div" role="alert" />

          <button type="submit" disabled={!(isValid && dirty)}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikYupForm;
