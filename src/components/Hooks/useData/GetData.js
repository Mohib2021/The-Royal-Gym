import { useContext } from "react";
import { DataContext } from "./DataProvider";
const GetData = () => {
	return useContext(DataContext);
};
export default GetData;
