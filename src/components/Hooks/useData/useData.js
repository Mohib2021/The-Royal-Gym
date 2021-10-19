import { useEffect, useState } from "react";

const useData = () => {
	const [allData, setAllData] = useState([]);
	useEffect(() => {
		fetch("/data.json")
			.then((res) => res.json())
			.then((data) => setAllData(data));
	}, []);
	return allData;
};
export default useData;
