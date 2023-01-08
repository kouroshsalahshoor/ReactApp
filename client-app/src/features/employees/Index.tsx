import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import agent from "../../app/api/agent";
import Loading from "../../app/common/Loading";
import { useStore } from "../../app/stores/store";

export default observer(function Index() {
  const { employeesStore } = useStore();

  let row = 1;
  const navigate = useNavigate();

  useEffect(() => {
    employeesStore.load();
  }, [employeesStore]);

  const onDelete = (id: number) => {
    const resp = window.confirm("Are you sure deleting this item?");
    if (resp) {
      employeesStore.delete(id);
    }
  };

  if (employeesStore.isLoading) return <Loading />;
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
          {employeesStore.list.map((x) => (
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
});
