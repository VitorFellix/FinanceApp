const TransactionsList = ({ transactions, handleDelete }) => {
  //   const TransactionsList = (props) => { Aceita todos os parametros que vc passar, ou vc pode especificar qual vc quer
  //   const transactionsasd = props.transactions;
  //   console.log(props);

  return (
    <div className="transactionsList">
      {transactions.map((transaction) => (
        <div className="transactionHeader container" key={transaction.id}>
          <div>
            <h2>{transaction.name}</h2>
            <p className="transactionDate">{transaction.date}</p>
            <button onClick={() => handleDelete(transaction.id)}>Delete</button>
          </div>
          <div className="alignRight">
            <p>{"R$ " + transaction.value}</p>
            <p className="transactionOptional">{transaction.optional}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionsList;