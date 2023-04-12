import "./App.css";
import GlobalEvent from "./components/GlobalEvent";
import Header from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <GlobalEvent />
      </div>
    </div>
  );
}

export default App;
