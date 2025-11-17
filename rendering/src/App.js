import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <Component props={"fuck off "} />
      <AnotherComponent props={"true"} />
    </>
  );
}
function AnotherComponent({ props }) {
  return (
    <>
      <div>{!(props === "false") && " ❤️ "}</div>
    </>
  );
}

function Component({ props }) {
  return (
    <>
      <div className="component">
        hi this is component and the messsage is {props}
      </div>
    </>
  );
}

export default App;
