import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../app/stores/store";
import Login from "../account/Login";
import Regsiter from "../account/Regsiter";

export default observer(function Index() {
  const { accountStore, modalStore } = useStore();
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <h3>Index</h3>

      <p>
        {accountStore.isInRole("Customers")
          ? "is a customer"
          : "is not a customer"}
      </p>
      <p>
        {accountStore.isInRole("Admins") ? "is an admin" : "is not an admin"}
      </p>

      <p>{accountStore.user ? accountStore.user.roles : null}</p>

      {accountStore.isLoggedIn ? (
        <>
          <h3>Welcome</h3>
          <div>
            <button className="btn btn-primary" onClick={accountStore.logout}>
              log out
            </button>
          </div>
        </>
      ) : (
        <div>
          <button
            className="btn btn-primary mx-1"
            onClick={() => modalStore.open(<Login />)}
          >
            login
          </button>
          <button
            className="btn btn-primary mx-1"
            onClick={() => modalStore.open(<Regsiter />)}
          >
            register
          </button>

          {/* <button className="btn btn-primary" onClick={() => navigate("login")}>
            login
          </button> */}
        </div>
      )}
    </div>
  );
});
