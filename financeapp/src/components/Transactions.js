import { useState } from "react";

const Transactions = () => {
  const [transactions, setTransactions] = useState(
    [
      {id: 1, name: "salario", value: 1000, date: "11/11/2021", optional: "Décimo terceiro"},
      {id: 2, name: "salario", value: 200, date: "12/12/2021", optional: "Janeiro"}
    ]
  )
  return (
    <div className="transactions">
      {transactions.map((transaction) => (
        <div className="transaction" key={transaction.id}>
          <h2>{transaction.name}</h2>
          <p>R${transaction.value} at {transaction.date}</p>
          <p>{transaction.optional}</p>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
