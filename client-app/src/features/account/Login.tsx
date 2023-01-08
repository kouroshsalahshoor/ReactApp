import { ErrorMessage, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import agent from "../../app/api/agent";
import TextInput from "../../app/common/form/TextInput";

export default function Login() {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ userName: "", password: "", error: null }}
      onSubmit={async (values, { setErrors }) => {
        try {
          console.log(values);
          const user = await agent.Account.login(values);
          console.log(user);
          window.localStorage.setItem("jwt", user.token);
          navigate("/");
        } catch (error) {
          setErrors({ error: "Invalid user or password" });
        }
      }}
    >
      {({ handleSubmit, isSubmitting, errors }) => (
        <Form onSubmit={handleSubmit} autoComplete="off">
          <h2 className="text-center text-info">Login</h2>
          <TextInput placeholder="User Name" name="userName" />
          <TextInput placeholder="Password" name="password" type="password" />

          <div className="d-grid">
            <button
              className="btn btn-primary mt-3"
              disabled={isSubmitting}
              type="submit"
            >
              Login
            </button>
          </div>

          <ErrorMessage
            name="error"
            render={() => (
              <div className="my-2 text-center">
                <span className="text-danger" style={{ marginBottom: 10 }}>
                  {/* {errors.error} */}
                </span>
              </div>
            )}
          />
        </Form>
      )}
    </Formik>
  );
}
