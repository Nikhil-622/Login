import React, { useState } from "react";
import { url } from "./app";
import axios from "axios";

const Registration = () => {
	const [email, setEmail] = useState("");
	const [password, setpassword] = useState("");
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		let data = { email, password, name, mobile: number };
		console.log(JSON.stringify(data));
		// fetch(url, {
		// 	method: "POST",
		// 	headers: {
		// 		Accept: "application/json, text/plain, */*",
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify(data),
		// });
		axios
			.post(url, JSON.stringify(data))
			.then((resp) => console.log(resp))
			.catch((err) => console.log(err));
		setEmail("");
		setpassword("");
		setNumber("");
		setName("");
	};
	return (
		<div className="section-center">
			<div className="heading">Register</div>

			<form onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="">Email</label>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="">Password</label>
					<input
						type="text"
						value={password}
						onChange={(e) => setpassword(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="">Name</label>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="">Number</label>
					<input
						type="text"
						value={number}
						onChange={(e) => setNumber(e.target.value)}
					/>
				</div>
				<div className="submit">
					<button type="submit" onSubmit={handleSubmit}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Registration;
