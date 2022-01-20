import { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";

const Transactions = () => {
  const [isPending, setIsPending] = useState(true);
  const [transactions, setTransactions] = useState(null);
  const loadingTime = 1;
  // useState([
  //   // this is a HOOK
  //   {
  //     id: 1,
  //     name: "Title",
  //     value: 1000,
  //     date: "11/11/2021",
  //     optional: "decimo terceiro",
  //   },
  //   {
  //     id: 2,
  //     name: "Title",
  //     value: 200,
  //     date: "12/12/2021",
  //     optional: "janeiro",
  //   },
  // ]);

  useEffect(() => {
    // this is also a HOOK
    // This function will run on every render
    // console.log(transactions);
    // if you change something inside the useState from here, you will end in a infinite loop
    // good for fetching data
    setIsPending(true);
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setTransactions(data);
          setIsPending(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }, loadingTime);
  }, []); // this a dependency array, if empty it will run effect only the first time
  // effect look for the values inside this array and if they change he will run useEffect

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {transactions && <TransactionsList transactions={transactions} />}
    </div>
  );
};

export default Transactions;
