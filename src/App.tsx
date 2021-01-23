import "./Styles/App.scss";
import "./Styles/colors.scss";
import NoteView from "./Views/NoteView";
import Signin from "./Views/SignIn";

function App() {
  return (
    <div
      style={{
        height: "100%",
        minHeight: "100vh",
      }}
    >
      {/* <NoteView /> */}
      <Signin />
    </div>
  );
}

export default App;
