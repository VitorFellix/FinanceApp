import Navbar from "./components/Navbar";
import SimpleButton from "./components/SimpleButton";
import Transactions from "./components/Transactions";

function App() {
	return (
		<div className="app">
			<Navbar />
			<div className="content">
				<Transactions />
			</div>
		</div>
	);
}

export default App;
