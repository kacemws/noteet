import "./Styles/App.scss";
import "./Styles/colors.scss";
import NoteView from "./Views/NoteView";
import Signin from "./Views/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./Views/Signup";

function App() {
  return (
    <Router>
      <div
        style={{
          height: "100%",
          minHeight: "100vh",
        }}
      >
        <Switch>
          <Route exact path="/">
            <Signin />
          </Route>
          <Route exact path="/sign-up">
            <Signup />
          </Route>
          <Route path="/notes">
            <NoteView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
