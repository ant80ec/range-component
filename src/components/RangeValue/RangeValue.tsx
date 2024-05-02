import React, { useState, ChangeEvent, FC } from "react";
import "./rangeValue.css";

const RangeValue: FC<RangeValueProps> = ({
	rangeValue,
	min,
	max,
	originalMin,
	originalMax,
}) => {
	const [value, setValue] = useState<number | "">(rangeValue);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newValue = parseFloat(e.target.value);
		if (!isNaN(newValue)) {
			if (newValue <= originalMax && newValue >= originalMin) {
				if (
					(newValue <= max && newValue >= min) ||
					(newValue >= max && newValue >= min)
				) {
					setValue(newValue);
				} else {
					setValue(max < min ? max : min);
				}
			}
		}
	};
	return (
		<>
			<input type="number" value={value} onChange={handleChange} />
			<span>€</span>
		</>
	);
};

export default RangeValue;
