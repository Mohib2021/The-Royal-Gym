import { createContext } from "react";
import useFirebase from "./useFirebase";
// creating a context api to make available firebase for all component
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
	const allContext = useFirebase();
	return (
		<AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
	);
};
export default AuthProvider;
