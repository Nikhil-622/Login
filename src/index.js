import React from "react";
import ReactDom from "react-dom";
import App from "./app";

const Homepage = () => {
	return <App></App>;
};

ReactDom.render(<Homepage />, document.getElementById("root"));
