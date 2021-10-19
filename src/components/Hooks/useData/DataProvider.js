import { createContext } from "react";
import useData from "./useData";

export const DataContext = createContext();
const DataProvider = ({ children }) => {
	const entireData = useData();
	return (
		<DataContext.Provider value={entireData}>{children}</DataContext.Provider>
	);
};
export default DataProvider;
