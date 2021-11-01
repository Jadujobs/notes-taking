import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./Login/index";
import Signup from "./Signup/index";
import Home from "./Home/index";
import NotFound from "./404/index";
import Notes from "./Notes/index";
function App() {
  return (
    <div className="App">
      <h1>Notes Taking Application</h1>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/Notes">
          <Notes />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
