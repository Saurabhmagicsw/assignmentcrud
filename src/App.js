import "./App.css";
import NavBar from "./pages/NavBar";
import NotFound from "./pages/NotFound";
import Dashboard from "./components/Dashboard";
import AddStock from "./components/AddStock";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/add" component={AddStock} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
