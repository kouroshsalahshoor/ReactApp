import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../app/stores/store";

export default observer(function Details() {
  const { employeesStore } = useStore();

  const { id } = useParams();

  useEffect(() => {
    employeesStore.setSelectedItem(id!);
  }, []);

  if (!employeesStore.selectedItem) {
    return <h3>no item</h3>;
  }

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
            <td>{employeesStore.selectedItem?.id}</td>
          </tr>
          <tr>
            <th scope="row">First Name</th>
            <td>{employeesStore.selectedItem?.firstName}</td>
          </tr>
          <tr>
            <th scope="row">last Name</th>
            <td>{employeesStore.selectedItem?.lastName}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
});
