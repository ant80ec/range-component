import React, { useRef } from "react";

interface RangeBulletProps {
	//onMouseDown: (bullet: string) => void;
	draggingBullet: string | null;
}

const RangeBullet: React.FC<RangeBulletProps> = ({
	//onMouseDown,
	draggingBullet,
}) => {
	const bulletRef = useRef<HTMLDivElement>(null);

	return (
		<div
			ref={bulletRef}
			//onMouseDown={() => onMouseDown()}
			tabIndex={0}
			className={`range-bullet ${draggingBullet}  ${
				draggingBullet ? "dragging" : ""
			}`}
		/>
	);
};

export default RangeBullet;
