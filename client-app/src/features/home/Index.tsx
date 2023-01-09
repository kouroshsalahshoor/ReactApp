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

      {accountStore.isLoggedIn ? (
        <h3>Welcome</h3>
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
