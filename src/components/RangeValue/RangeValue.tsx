import React, { useState } from "react";

interface RangeValueProps {
	rangeValue: number;
}

const RangeValue: React.FC<RangeValueProps> = ({ rangeValue }) => {
	const [value, setValue] = useState<number | "">(rangeValue); // Assuming value can be empty initially

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		// Check if the input is a valid number or empty string
		if (newValue === "" || !isNaN(parseFloat(newValue))) {
			setValue(newValue === "" ? "" : parseFloat(newValue));
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
