import { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";

const Transactions = () => {
  const [transactions, setTransactions] = useState([
    // this is a HOOK
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

  const [name, setName] = useState("Bekke");

  const handleDelete = (id) => {
    const newTransactions = transactions.filter(
      (transaction) => transaction.id != id
    );
    setTransactions(newTransactions);
  };

  useEffect(() => {
    // this is also a HOOK
    // This function will run on every render
    // console.log(transactions);
    // if you change something inside the useState from here, you will end in a infinite loop
    // good for fetching data
    console.log("I ran");
  }, [name]); // this a dependency array, if empty it will run effect only the first time
  // effect look for the values inside this array and if they change he will run useEffect

  return (
    <div>
      <p>{name}</p>
      <button onClick={() => setName("Kato")}>Change name</button>
      <TransactionsList
        transactions={transactions}
        handleDelete={handleDelete}
      />
      <TransactionsList
        transactions={transactions.filter(
          (transaction) => transaction.id === 1
        )}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Transactions;
