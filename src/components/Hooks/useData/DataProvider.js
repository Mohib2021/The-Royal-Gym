import { createContext } from "react";
import useData from "./useData";
// to make available data for all children using context api
export const DataContext = createContext();
const DataProvider = ({ children }) => {
	const entireData = useData();
	return (
		<DataContext.Provider value={entireData}>{children}</DataContext.Provider>
	);
};
export default DataProvider;
