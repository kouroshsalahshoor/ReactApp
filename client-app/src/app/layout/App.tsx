import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Index from "../../features/home/Index";
import Menu from "./Menu";

function App() {
  const location = useLocation();

  return (
    <>
      <ToastContainer position="top-right" hideProgressBar theme="colored" />

      <>
        <div className="container-fluid">
          <Menu />
          <div className="mt-3">
            {location.pathname === "/" ? <Index /> : <Outlet />}
          </div>
        </div>
      </>
    </>
  );
}

export default App;
