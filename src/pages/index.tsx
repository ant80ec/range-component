import React from "react";
import Router from "next/router";
import "../app/global.css";
const onClick = (exerciseNumber) => {
	Router.push(`/Exercise${exerciseNumber}`);
};

const HomePage = () => {
	return (
		<div className="home-container">
			{" "}
			<button
				onClick={() => {
					onClick("1");
				}}>
				{" "}
				Exercise 1
			</button>
			<button
				onClick={() => {
					onClick("2");
				}}>
				{" "}
				Exercise 2
			</button>
		</div>
	);
};

export default HomePage;
