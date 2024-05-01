import React, { useRef } from "react";

interface FixedValuePointProps {
	pointValue: number;
	position: number;
}

const FixedValuePoint: React.FC<FixedValuePointProps> = ({
	pointValue,
	position,
}) => {
	return (
		<div className="range-point" style={{ left: `${position}%` }}>
			<label>{pointValue}</label>
		</div>
	);
};

export default FixedValuePoint;
