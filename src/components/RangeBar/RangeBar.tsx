import React, { useRef, useEffect } from "react";
import FixedValuePoint from "./components/FixedValuePoint/FixedValuePoint";
import { calculatePosition } from "./infrastructure";
import "./rangeBar.css";

interface RangeBarProps {
	min: number;
	max: number;
	fixedValues?: number[] | null;
}

const RangeBar: React.FC<RangeBarProps> = ({ min, max, fixedValues }) => {
	const barRef = useRef<HTMLDivElement>(null);

	return (
		<div ref={barRef} className="range-slider">
			{fixedValues?.map((value, index) => (
				<FixedValuePoint
					key={index}
					pointValue={value}
					/*The calculation of the fixed values positioning has been carried out in this way
                    in the event that if the values we obtain in the future are percentages, and are not indicated as values within the range. Otherwise, 
                    in case of they are only values within the range, it would be enough to calculate it directly as: (value/valueMaximum)*100.*/
					position={calculatePosition(value, min, max)}
				/>
			))}
		</div>
	);
};

export default RangeBar;
