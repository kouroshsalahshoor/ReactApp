import { observer } from "mobx-react-lite";
import { Link, NavLink } from "react-router-dom";
import { useStore } from "../stores/store";

export default observer(function Menu() {
  const { accountStore } = useStore();

  const logout = () => {
    accountStore.logout();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          React App
        </NavLink>

        {accountStore.user ? (
          <>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/employees"
                  >
                    Employees
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Adam Freeman
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-item" to="/todolist">
                        ToDo List
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/themeselector">
                        Theme Selector
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/editor">
                        Editor
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/loading">
                    Loading
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Errors
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/test-errors">
                        Test Errors
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/not-found">
                        Not Found
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/server-error">
                        Server Error
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/validation-error">
                        Validation Error
                      </Link>
                    </li>
                  </ul>
                </li>
                {accountStore.isInRole("Customers") ? (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      Customers
                    </NavLink>
                  </li>
                ) : null}
              </ul>

              <ul className="navbar-nav d-flex">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <>
                      Welcome{" "}
                      {accountStore.isInRole("Customers") ? "Customer" : null}
                      {accountStore.isInRole("Admins") ? "Admin" : null}
                      {accountStore.isInRole("Employees") ? "Employee" : null}
                      {accountStore.isInRole("Managers") ? "Manager" : null}
                      {": "}
                      {accountStore.user.userName}
                      <i className="fa-solid fa-user mx-1"></i>
                    </>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                    style={{ left: "auto", right: 0 }}
                  >
                    {/* <li>
                              <Link className="dropdown-item" to="/login">
                                <i className="fa-solid fa-right-to-bracket mx-1"></i>
                                Login
                              </Link>
                            </li> */}
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={logout}>
                        <i className="fa-solid fa-power-off mx-1"></i>
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </>
        ) : null}
      </div>
    </nav>
  );
});
