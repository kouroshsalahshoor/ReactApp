import { Form, Formik, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import agent from "../../app/api/agent";
import Loading from "../../app/common/Loading";
import { Employee } from "../../app/models/employee";
import * as Yup from "yup";
import TextInput from "../../app/common/form/TextInput";
import TextAreaInput from "../../app/common/form/TextAreaInput";
import SelectInput from "../../app/common/form/SelectInput";
import DateInput from "../../app/common/form/DateInput";
import { toast } from "react-toastify";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function CreateEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { employeesStore } = useStore();

  const [model, setModel] = useState<Employee>({
    id: 0,
    firstName: "",
    lastName: "",
  });

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
    employeesStore.setLoading(true);

    if (id) {
      employeesStore.setSelectedItem(id);
      setModel(employeesStore.selectedItem);
    }

    employeesStore.setLoading(false);
  }, []);

  const submit = (values) => {
    employeesStore.createEdit(values);
    navigate("/employees");
  };

  if (employeesStore.isLoading) return <Loading />;

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
});
