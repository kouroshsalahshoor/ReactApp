// import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import agent from "../../app/api/agent";
import Loading from "../../app/layout/Loading";
import { Employee } from "../../app/models/employee";

export default function Index() {
  const [models, setModels] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  let row = 1;
  const navigate = useNavigate();

  useEffect(() => {
    load();

    // axios
    //   .get<Employee[]>("https://localhost:7236/api/Employees")
    //   .then((response) => {
    //     // console.log(response);
    //     setList(response.data);
    //   });
  }, []);

  const load = () => {
    setLoading(true);

    agent.Employees.list().then((response) => {
      setModels(response);
      setLoading(false);
    });
  };

  const onDelete = (id: number) => {
    const resp = window.confirm("Are you sure deleting this item?");
    if (resp) {
      agent.Employees.delete(id.toString()).then((response) => {
        toast.success("delete succeeded");
        load();
      });
    }
  };

  if (loading) return <Loading />;
  return (
    <>
      <h3>Index</h3>
      <Link className="btn btn-primary" to="/employees/create">
        Create
      </Link>
      <hr />
      <table className="table table-striped table-hover table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col" className="fit"></th>
          </tr>
        </thead>
        <tbody>
          {models.map((x) => (
            <tr key={x.id}>
              <th scope="row">{row++}</th>
              <td>{x.id}</td>
              <td>{x.firstName}</td>
              <td>{x.lastName}</td>
              <td className="fit">
                <button
                  className="btn btn-info mx-1"
                  onClick={() => navigate(`/employees/details/${x.id}`)}
                >
                  Details
                </button>
                <button
                  className="btn btn-warning mx-1"
                  onClick={() => navigate(`/employees/edit/${x.id}`)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger mx-1"
                  onClick={() => onDelete(x.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
