import logo from "./logo.svg";
import "./App.css";
import Blue from "./Components/Blue";
import Red from "./Components/Red";
import BlankBox from "./Components/BlankBox";

function App() {
  return (
    <div className="App-Content">
      <div className="App">
        <div id="main">
          <div className="main-content">
            <Blue />
            <Red />
          </div>
          <div>
            <BlankBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
