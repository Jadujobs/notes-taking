import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login/index";
import Signup from "./Signup/index";
import NotFound from "./404/index";
import Notes from "./Notes/index";
import Note from "./Note/index";

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
        <Route path="/Note/:id">
          <Note />
        </Route>
        <Route path="/Note">
          <Note />
        </Route>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
