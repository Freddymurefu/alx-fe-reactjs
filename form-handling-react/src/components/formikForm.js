import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string()
    .trim()
    .required("Username is required"),
  email: Yup.string()
    .trim()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .trim()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Formik + Yup submit:", values);
        // TODO: send to API
      }}
    >
      {({ errors, touched, isValid, dirty }) => (
        <Form noValidate>
          <label htmlFor="username">User Name</label>
          <Field
            id="username"
            name="username"
            type="text"
            aria-invalid={touched.username && !!errors.username}
            aria-describedby={
              touched.username && errors.username ? "username-error" : undefined
            }
          />
          <ErrorMessage
            name="username"
            component="div"
            id="username-error"
            role="alert"
          />

          <label htmlFor="email">Email Address</label>
          <Field
            id="email"
            name="email"
            type="email"
            aria-invalid={touched.email && !!errors.email}
            aria-describedby={
              touched.email && errors.email ? "email-error" : undefined
            }
          />
          <ErrorMessage
            name="email"
            component="div"
            id="email-error"
            role="alert"
          />

          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            type="password"
            aria-invalid={touched.password && !!errors.password}
            aria-describedby={
              touched.password && errors.password ? "password-error" : undefined
            }
          />
          <ErrorMessage
            name="password"
            component="div"
            id="password-error"
            role="alert"
          />

          <button type="submit" disabled={!(isValid && dirty)}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
