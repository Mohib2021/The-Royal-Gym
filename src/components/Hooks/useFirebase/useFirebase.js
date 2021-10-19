import {
	signOut,
	getAuth,
	updateProfile,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";

import firebaseInitialization from "../../Firebase/Firebase.init";
firebaseInitialization();
const useFirebase = () => {
	const [user, setUser] = useState({});
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
			.catch((err) => setError(err.message));
	};
	const signUpUsingGoogle = () => {
		const googleProvider = new GoogleAuthProvider();
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				setError("");
				setUser(result.user);
				history.push(redirectURL);
			})
			.catch((err) => setError(err.message));
	};
	const logOut = () => {
		signOut(auth)
			.then(() => {
				setUser({});
				setError("");
			})
			.catch((err) => setError(err.message));
	};
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) setUser(user);
		});
	}, []);
	return {
		user,
		error,
		logOut,
		settingUserName,
		settingUserEmail,
		signUpUsingGoogle,
		settingUserPassword,
		settingConfirmPassword,
		signUpWithEmailAndPassword,
		signInUsingEmailAndPassword,
	};
};
export default useFirebase;
