import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Transactions from "./components/Transactions";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Home />
        <Transactions />
      </div>
    </div>
  );
}

export default App;
