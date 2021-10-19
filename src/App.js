import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import DataProvider from "./components/Hooks/useData/DataProvider";
import AuthProvider from "./components/Hooks/useFirebase/AuthProvider";
import About from "./components/Pages/About/About";
import Home from "./components/Pages/Home/Home";
import LogIn from "./components/Pages/LogIn/LogIn";
import SignUp from "./components/Pages/SignUp/SignUp";
import NotFound from "./components/Pages/NotFound/NotFound";
import Training from "./components/Pages/Training/Training";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import SingleService from "./components/Pages/Home/SingleService";
import PrivetRoute from "./components/Hooks/PrivetRoute/PrivetRoute";

function App() {
	return (
		<>
			<Router>
				<DataProvider>
					<AuthProvider>
						<Header />
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/home">
								<Home />
							</Route>
							<PrivetRoute path="/service/:serviceId">
								<SingleService />
							</PrivetRoute>
							<PrivetRoute path="/training">
								<Training />
							</PrivetRoute>
							<PrivetRoute path="/about">
								<About />
							</PrivetRoute>
							<Route path="/login">
								<LogIn />
							</Route>
							<Route path="/signup">
								<SignUp />
							</Route>
							<Route path="*">
								<NotFound />
							</Route>
						</Switch>
						<Footer />
					</AuthProvider>
				</DataProvider>
			</Router>
		</>
	);
}

export default App;
