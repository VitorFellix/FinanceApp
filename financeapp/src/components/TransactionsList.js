const TransactionsList = ({ transactions }) => {
	//   const TransactionsList = (props) => { Aceita todos os parametros que vc passar, ou vc pode especificar qual vc quer
	//   const transactionsasd = props.transactions;
	//   console.log(props);

	return (
		<div className="transactionsList">
			{transactions.map((transaction) => (
				<div className="transactionHeader container" key={transaction.id}>
					<div>
						<h2>{transaction.title}</h2>
						<p className="transactionDate"></p>
					</div>
					<div className="alignRight">
						<p>{"R$ " + transaction.id}</p>
						<p className="transactionOptional">
							{transaction.id} {transaction.body}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default TransactionsList;