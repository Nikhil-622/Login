import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import Home from "./Home";
import Registration from "./Registration";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export const url = "https://ttmg-backend.herokuapp.com/api/auth/staffRegister";
const App = () => {
	// useEffect(() => {
	// 	const getdata = async () => {
	// 		fetch(url).then((res) => {
	// 			console.log(res);
	// 		});
	// 	};
	// 	getdata();
	// });
	return (
		<main>
			<Router>
				<Navbar></Navbar>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route exact path="/login">
						<Login></Login>
					</Route>
					<Route exact path="/registration">
						<Registration></Registration>
					</Route>
				</Switch>
			</Router>
		</main>
	);
};

export default App;
