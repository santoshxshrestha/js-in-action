import "./App.css";

function App() {
  return (
    <>
      <Component props={"fuck off "} />
      <AnotherComponent props={"true"} />
      <Button message={"hello there you clicked me "} />
    </>
  );
}

function Button({ message }) {
  return (
    <button
      className="button"
      onClick={() => {
        alert(message);
      }}
    >
      click-me
    </button>
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
