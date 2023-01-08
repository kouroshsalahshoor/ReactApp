import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <h3>Index</h3>
      <button className="btn btn-primary" onClick={() => navigate("login")}>
        login
      </button>
    </div>
  );
}
