import { Panel } from "./Components/Panel";
import { Sidemenu } from "./Components/SideMenu";
import "./Styles/App.scss";
import "./Styles/colors.scss";

function App() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
      }}
    >
      <Sidemenu />
      <Panel></Panel>
    </div>
  );
}

export default App;
