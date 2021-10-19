import { useEffect, useState } from "react";

const useData = () => {
	const [allData, setAllData] = useState([]);
	// loading data
	useEffect(() => {
		fetch("/data.json")
			.then((res) => res.json())
			.then((data) => setAllData(data));
	}, []);
	return allData;
};
export default useData;
