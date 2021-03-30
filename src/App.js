import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./default.scss";
import { checkUserSession } from "./redux/User/user.actions";
import { useDispatch } from "react-redux";

// Components
import AdminToolbar from "./components/AdminToolbar";

// Layouts
import MainLayout from "./layouts/MainLayout";
import HomepageLayout from "./layouts/HomepageLayout";
import AdminLayout from "./layouts/AdminLayout";
import DashboardLayout from "./layouts/DashBoardLayout";

// Pages
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Recovery from "./pages/Recovery";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";

// HoC
import WithAuth from "./hoc/WithAuth";
import WithAdminAuth from "./hoc/WithAdminAuth";

function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className="App">
      <AdminToolbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )}
        />
        <Route
          path="/registration"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
        <Route
          path="/login"
          render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )}
        />
        <Route
          path="/recovery"
          render={() => (
            <MainLayout>
              <Recovery />
            </MainLayout>
          )}
        />
        <Route
          path="/dashboard"
          render={() => (
            <WithAuth>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </WithAuth>
          )}
        />
        <Route
          path="/admin"
          render={() => (
            <AdminLayout>
              <WithAdminAuth>
                <Admin />
              </WithAdminAuth>
            </AdminLayout>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
