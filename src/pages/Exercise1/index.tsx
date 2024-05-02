import React, { useState, useRef, useEffect, FC } from "react";
import RangeBar from "../../components/RangeBar/RangeBar";
import RangeBullet from "../../components/RangeBullet/RangeBullet";
import RangeValue from "../../components/RangeValue/RangeValue";
import "../../app/global.css";

const getMinMaxValues = async () => {
	const res = await fetch("http://demo6526235.mockable.io/getExercise1Ranges");
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
};

const RangeSlider: FC = () => {
	const [min, setMin] = useState<number>(1);
	const [max, setMax] = useState<number>(100);
	const [originalMin, setOriginalMin] = useState<number>(0);
	const [originalMax, setOriginalMax] = useState<number>(0);

	const sliderRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { min, max } = await getMinMaxValues();
				setMin(min);
				setMax(max);
				setOriginalMin(min);
				setOriginalMax(max);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchData();
	}, []);

	return (
		<div className="range-container">
			<RangeValue
				rangeValue={min}
				min={min}
				max={max}
				originalMin={originalMin}
				originalMax={originalMax}
			/>
			<div className="range-bar-container" ref={sliderRef}>
				<RangeBullet draggingBullet={"left"} />
				<RangeBar min={min} max={max} />
				<RangeBullet draggingBullet={"right"} />
			</div>
			<RangeValue
				rangeValue={max}
				min={min}
				max={max}
				originalMin={originalMin}
				originalMax={originalMax}
			/>
		</div>
	);
};

export default RangeSlider;
