import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./Auth";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import Hospital from "./containers/Hospital/Hospital";
import Register from "./containers/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import AdminLogin from "./containers/AdminLogin/AdminLogin";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/admin/hospital">
              <Hospital />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <PrivateRoute exact path="/admin" component={Hospital} />
            <Route exact path="/admin/login">
              <AdminLogin />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
