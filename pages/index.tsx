import React from "react";
import Router from "next/router";
const onClick = () => {
	Router.push("/Exercise1");
};

const HomePage = () => {
	return <button onClick={onClick}> Exercise 1</button>;
};

export default HomePage;
