import axios from "axios";
import { useEffect, useState } from "react";
import { Employee } from "../../app/models/employee";

export default function Details() {
  const [model, setModel] = useState<Employee>();

  useEffect(() => {
    axios
      .get<Employee>("https://localhost:7236/api/Employees/1")
      .then((response) => {
        // console.log(response);
        setModel(response.data);
      });
  }, []);

  return (
    <>
      <table className="table table-striped table-hover">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col"></th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">Id</th>
            <td>{model?.id}</td>
          </tr>
          <tr>
            <th scope="row">First Name</th>
            <td>{model?.firstName}</td>
          </tr>
          <tr>
            <th scope="row">last Name</th>
            <td>{model?.lastName}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
