import TransactionsList from "./TransactionsList";
import useFetch from "../hooks/useFetch";

const Transactions = () => {
	const {
		data: transactions,
		isPending,
		error,
	} = useFetch("https://jsonplaceholder.typicode.com/posts");

	return (
		<div>
			{(isPending && <div className="Loading">Loading...</div>) ||
				(error && <div>{error}</div>)}
			{transactions && <TransactionsList transactions={transactions} />}
		</div>
	);
};

export default Transactions;
