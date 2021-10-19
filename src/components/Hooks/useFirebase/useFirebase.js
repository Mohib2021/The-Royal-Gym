// importing everything from firebase
import {
	signOut,
	getAuth,
	updateProfile,
	signInWithPopup,
	GithubAuthProvider,
	GoogleAuthProvider,
	FacebookAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import firebaseInitialization from "../../Firebase/Firebase.init";
// firebase initialization by calling
firebaseInitialization();
const useFirebase = () => {
	const [user, setUser] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const location = useLocation();
	const redirectURL = location.state?.from || "/home";
	const auth = getAuth();
	const history = useHistory();
	const settingUserName = (value) => {
		setName(value);
	};
	const settingUserEmail = (value) => {
		setEmail(value);
	};
	const settingUserPassword = (value) => {
		setPassword(value);
	};
	const settingConfirmPassword = (value) => {
		setConfirmPassword(value);
	};
	const updateUserName = () => {
		updateProfile(auth.currentUser, {
			displayName: name,
		})
			.then(() => {
				//profile is updated
			})
			.catch((err) => setError(err.message));
	};
	const signUpWithEmailAndPassword = (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			createUserWithEmailAndPassword(auth, email, password)
				.then((result) => {
					setError("");
					updateUserName();
					history.push("/login");
				})
				.catch((err) => setError(err.message));
		} else setError("Sorry password isn't matched");
	};
	const signInUsingEmailAndPassword = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				setError("");
				setUser(result.user);
				history.push(redirectURL);
			})
			.catch((err) => setError(err.message))
			.finally(setIsLoading(false));
	};
	const signUpUsingGoogle = () => {
		const googleProvider = new GoogleAuthProvider();
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				setError("");
				setUser(result.user);
				history.push(redirectURL);
			})
			.catch((err) => setError(err.message))
			.finally(setIsLoading(false));
	};
	const signUpUsingGitHub = () => {
		const gitHubProvider = new GithubAuthProvider();
		signInWithPopup(auth, gitHubProvider)
			.then((result) => {
				setError("");
				setUser(result.user);
				history.push(redirectURL);
			})
			.catch((err) => setError(err.message))
			.finally(setIsLoading(false));
	};
	const signUpUsingFacebook = () => {
		const facebookProvider = new FacebookAuthProvider();
		signInWithPopup(auth, facebookProvider)
			.then((result) => {
				setError("");
				setUser(result.user);
				history.push(redirectURL);
			})
			.catch((err) => setError(err))
			.finally(setIsLoading(false));
	};
	const logOut = () => {
		signOut(auth)
			.then(() => {
				setUser({});
				setError("");
			})
			.catch((err) => setError(err.message))
			.finally(setIsLoading(false));
	};
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) setUser(user);
			setIsLoading(false);
		});
	}, []);
	// returning function and variable
	return {
		user,
		error,
		logOut,
		setError,
		isLoading,
		settingUserName,
		settingUserEmail,
		signUpUsingGoogle,
		signUpUsingGitHub,
		signUpUsingFacebook,
		settingUserPassword,
		settingConfirmPassword,
		signUpWithEmailAndPassword,
		signInUsingEmailAndPassword,
	};
};
export default useFirebase;
