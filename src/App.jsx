import "./App.css";
import IdentifyEadible from "./components/IdentifyEadible";
function App() {
  return (
    <>
      <IdentifyEadible
        style={{ height: "100vh", width: "100vw" }}
        title="External HTML File"
        src="/games/identify-edible/index.html"
      />
    </>
  );
}

export default App;
