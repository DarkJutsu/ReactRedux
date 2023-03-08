import { ErrorMessage, Field, Form, Formik } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  passwd: Yup.string().required("Password is required"),
});

export const LoginForm = ({ loged, fetching, onLogin }) => {
  const initialCredentials = {
    email: "",
    passwd: "",
  };

  return (
    <div className="w-1/2 p-3">
      <h2>Login Formik</h2>
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          onLogin(values.email, values.passwd);
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form className="grid grid-rows-1 gap-1">
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" placeholder="Email" />
            {errors.email && touched.email && (
              <ErrorMessage
                className="text-red-500"
                component="span"
                name="email"
              />
            )}
            <br />
            <label htmlFor="passwd">Password</label>
            <Field
              id="passwd"
              name="passwd"
              type="password"
              placeholder="Password"
            />
            {errors.passwd && touched.passwd && (
              <ErrorMessage
                className="text-red-500"
                component="span"
                name="passwd"
              />
            )}
            <br />
            <button className="bg-green-500 mt-3 p-2 rounded-md" type="submit">
              Login
            </button>
            {fetching ? <span>LOADING...</span> : null}
            {isSubmitting ? <span>Login your credentials...</span> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

LoginForm.propTypes = {
  loged: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
};
