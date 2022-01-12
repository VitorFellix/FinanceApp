import { useState } from "react";
import TransactionsList from "./TransactionsList";

const Transactions = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      name: "Title",
      value: 1000,
      date: "11/11/2021",
      optional: "decimo terceiro",
    },
    {
      id: 2,
      name: "Title",
      value: 200,
      date: "12/12/2021",
      optional: "janeiro",
    },
  ]);
  return (
    <TransactionsList transactions={transactions}/>
  );
};

export default Transactions;
