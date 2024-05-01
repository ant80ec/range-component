import React from "react";
import Router from "next/router";
const onClick = (exerciseNumber) => {
	Router.push(`/Exercise${exerciseNumber}`);
};

const HomePage = () => {
	return (
		<>
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
		</>
	);
};

export default HomePage;
