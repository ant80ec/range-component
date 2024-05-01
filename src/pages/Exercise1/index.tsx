import React, { useState, useRef, useEffect } from "react";
import "./range.css";
import RangeBar from "../../components/RangeBar/RangeBar";

async function getMinMaxValues() {
	const res = await fetch("http://demo6526235.mockable.io/getExercise1Ranges");

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

const RangeSlider = () => {
	const [min, setMin] = useState(1);
	const [max, setMax] = useState(100);
	const [leftPosition, setLeftPosition] = useState(0);
	const [rightPosition, setRightPosition] = useState(0);
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
				const data = await getMinMaxValues();
				setMin(data.min);
				setMax(data.max);
				console.log(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);
	const onMouseMove = (e) => {
		if (draggingBullet) {
			const bulletRef =
				draggingBullet === "left" ? bulletRefLeft : bulletRefRight;
			const otherBulletRef =
				draggingBullet === "left" ? bulletRefRight : bulletRefLeft;
			const bullet = bulletRef.current;
			const otherBullet = otherBulletRef.current;
			const slider = sliderRef.current;
			const sliderRect = slider.getBoundingClientRect();
			const mouseX = e.clientX - sliderRect.left;
			const newPosition = Math.max(0, Math.min(mouseX, sliderRect.width));
			const otherPosition =
				draggingBullet === "left" ? rightPosition : leftPosition;

			// Check if the bullets collide
			if (
				(draggingBullet === "left" && newPosition < otherPosition) ||
				(draggingBullet === "right" && newPosition > otherPosition)
			) {
				bullet.style.left = newPosition - bullet.offsetWidth / 2 + "px";
				if (draggingBullet === "left") {
					setLeftPosition(newPosition);
					const value = Math.round(
						(newPosition / sliderRect.width) * (max - min) + min
					);
					setMin(value);
				} else {
					setRightPosition(newPosition);
					const value = Math.round(
						(newPosition / sliderRect.width) * (max - min) + min
					);
					setMax(value);
				}
			}
		}
	};

	const onMouseUp = () => {
		setDraggingBullet(null);
	};

	useEffect(() => {
		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("mouseup", onMouseUp);
		return () => {
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("mouseup", onMouseUp);
		};
	}, [draggingBullet]);

	return (
		<div className="range-container">
			<input
				type="number"
				value={min}
				onChange={(e) => setMin(parseInt(e.target.value))}
			/>
			<span>€</span>
			<div ref={sliderRef} className="range-slider">
				<div
					ref={bulletRefLeft}
					onMouseDown={() => onMouseDown("left")}
					tabIndex={0}
					className={`range-bullet left ${draggingBullet ? "dragging" : ""}`}
				/>
				<div
					ref={bulletRefRight}
					onMouseDown={() => onMouseDown("right")}
					tabIndex={0}
					className={`range-bullet right ${draggingBullet ? "dragging" : ""}`}
				/>
			</div>
			<input
				type="number"
				value={max}
				onChange={(e) => setMax(parseInt(e.target.value))}
			/>
			<span>€</span>
			<RangeBar />
		</div>
	);
};

export default RangeSlider;
