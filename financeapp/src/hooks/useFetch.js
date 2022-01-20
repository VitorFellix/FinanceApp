import { useEffect, useState } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);
	const loadingTime = 1000;

	useEffect(() => {
		// this is also a HOOK
		// This function will run on every render
		// console.log(transactions);
		// if you change something inside the useState from here, you will end in a infinite loop
		// good for fetching data
		setIsPending(true);
		setTimeout(() => {
			fetch(url)
				.then((res) => {
					if (!res.ok) {
						throw Error("Could not get data");
					}
					return res.json();
				})
				.then((data) => {
					setData(data);
					setIsPending(false);
					setError(null);
				})
				.catch((err) => {
					setIsPending(false);
					setError(err.message);
				});
		}, loadingTime);
	}, [url]); // this a dependency array, if empty it will run effect only the first time
	// effect look for the values inside this array and if they change he will run useEffect

	return { data, isPending, error };
};

export default useFetch;
