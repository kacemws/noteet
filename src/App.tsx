import { useState } from "react";
import { Panel } from "./Components/Panel";
import { Sidemenu } from "./Components/SideMenu";
import "./Styles/App.scss";
import "./Styles/colors.scss";

function App() {
  const [selected, setselected] = useState<
    React.SetStateAction<number | null | undefined>
  >(null);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
      }}
    >
      <Sidemenu
        setSelected={(index: number | null | undefined) => {
          setselected(index);
        }}
      />
      <Panel></Panel>
    </div>
  );
}

export default App;
