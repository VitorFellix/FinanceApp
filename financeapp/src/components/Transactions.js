import { useState } from "react";

const Transactions = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      name: "Tranferencia",
      value: 1000,
      date: "11/11/2021",
      optional: "decimo terceiro",
    },
    {
      id: 2,
      name: "alguma coisa",
      value: 200,
      date: "12/12/2021",
      optional: "janeiro",
    },
  ]);
  return (
    <div className="transactions">
      {transactions.map((transaction) => (
        <div className="transactionHeader container" key={transaction.id}>
          <div>
            <h2>{transaction.name}</h2>
            <p className="transactionDate">{transaction.date}</p>
          </div>
          <div className="alignRight">
            <p >{"R$ " + transaction.value}</p>
            <p className="transactionOptional">{transaction.optional}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
