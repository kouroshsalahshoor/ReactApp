import { Form, Formik, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import agent from "../../app/api/agent";
import Loading from "../../app/layout/Loading";
import { Employee } from "../../app/models/employee";
import * as Yup from "yup";
import TextInput from "../../app/common/form/TextInput";
import TextAreaInput from "../../app/common/form/TextAreaInput";
import SelectInput from "../../app/common/form/SelectInput";
import DateInput from "../../app/common/form/DateInput";
import { toast } from "react-toastify";

export default function CreateEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [model, setModel] = useState<Employee>({
    id: 0,
    firstName: "",
    lastName: "",
  });
  const [loading, setLoading] = useState(true);

  // const options = [
  //   { text: "Drinks", value: "drinks" },
  //   { text: "Culture", value: "culture" },
  //   { text: "Film", value: "film" },
  //   { text: "Food", value: "food" },
  //   { text: "Music", value: "music" },
  //   { text: "Travel", value: "travel" },
  // ];

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Please fill first name"),
    lastName: Yup.string().required("Please fill last name"),
  });

  useEffect(() => {
    setLoading(true);

    if (id) {
      agent.Employees.details(id).then((response) => {
        setModel(response);
      });
    }

    setLoading(false);
  }, []);

  function submit(model: Employee) {
    if (model.id > 0) {
      agent.Employees.update(model).then(() => {
        toast.success("edit succeeded");
        navigate("/employees");
      });
    } else {
      agent.Employees.create(model).then(() => {
        toast.success("create succeeded");
        navigate("/employees");
      });
    }
  }

  if (loading) return <Loading />;

  return (
    <div className="mt-5">
      <h3>{id ? "Edit" : "Create"}</h3>
      <hr />

      <Formik
        enableReinitialize
        initialValues={model}
        onSubmit={(values) => submit(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <TextInput name="firstName" placeholder="First Name" />
            <TextInput name="lastName" placeholder="Last Name" />

            {/* <DateInput name="xxx" /> */}

            {/* <SelectInput name="xxx" placeholder="xxx" options={options} /> */}
            {/* <select
              className="form-select"
              value="film"
              onChange={(e) => console.log(e.target.value)}
            >
              {options.map((x) => (
                <option value={x.value} key={x.value}>
                  {x.text}
                </option>
              ))}
            </select> */}

            <div className="mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <Link className="btn btn-light" to="/employees">
                Cancel
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
