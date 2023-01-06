import { Outlet, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Menu from "./Menu";

function App() {
  return (
    <>
      <ToastContainer position="top-right" hideProgressBar theme="colored" />
      <div className="container-fluid">
        <Menu />
        <div className="mt-2"></div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
