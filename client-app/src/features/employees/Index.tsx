// import axios from "axios";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import Loading from "../../app/layout/Loading";
import { Employee } from "../../app/models/employee";

export default function Index() {
  const [list, setList] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  let row = 1;

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
      setList(response);
      setLoading(false);
    });
  };

  const onDelete = (id: number) => {
    const resp = window.confirm("Are you sure deleting this item?");
    if (resp) {
      agent.Employees.delete(id.toString()).then((response) => load());
    }
  };

  if (loading) return <Loading />;
  return (
    <>
      <table className="table table-striped table-hover table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {list.map((x) => (
            <tr key={x.id}>
              <th scope="row">{row++}</th>
              <td>{x.id}</td>
              <td>{x.firstName}</td>
              <td>{x.lastName}</td>
              <td>
                <button
                  className="btn btn-danger"
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
