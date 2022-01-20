import Navbar from "./components/Navbar";
import SimpleButton from "./components/SimpleButton";
import Transactions from "./components/Transactions";

function App() {
  const title = "👌Okeydokey"
	return (
		<div className="app">
			<Navbar title={title}/>
			<div className="content">
				<Transactions />
			</div>
		</div>
	);
}

export default App;
