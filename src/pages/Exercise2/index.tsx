import React, { useState, useRef, useEffect } from "react";
import "./range.css";
import RangeBar from "../../components/RangeBar/RangeBar";
import RangeBullet from "../../components/RangeBullet/RangeBullet";
import RangeValue from "../../components/RangeValue/RangeValue";

async function getFixedValues() {
	const res = await fetch("http://demo6526235.mockable.io/getExercise2Ranges");

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

const FixedValuesRange = () => {
	const [fixedValues, setFixedValues] = useState([]);
	const [draggingBullet, setDraggingBullet] = useState(null);

	const sliderRef = useRef(null);
	const bulletRefLeft = useRef(null);
	const bulletRefRight = useRef(null);

	const onMouseDown = (bullet) => {
		setDraggingBullet(bullet);
	};
	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getFixedValues();
				setFixedValues(data.ranges);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="range-container">
			<label>1€</label>
			<RangeBullet /* onMouseDown={} */ draggingBullet={"left"} />
			<RangeBar min={1} max={100} fixedValues={fixedValues} />
			<RangeBullet /* onMouseDown={} */ draggingBullet={"right"} />
			<label>100€</label>
		</div>
	);
};

export default FixedValuesRange;
