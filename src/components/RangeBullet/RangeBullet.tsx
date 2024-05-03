import React, { useEffect, useRef, useState } from 'react';
import { RangeBulletProps } from './interface';
import './rangeBullet.css';

const RangeBullet: React.FC<RangeBulletProps> = ({ draggingBullet }) => {
  const bulletRef = useRef<HTMLDivElement>(null);
  const minValue = 0;
  const maxValue = 495;
  const [isSelected, setIsSelected] = useState(false);
  const [offsetX, setOffsetX] = useState(
    draggingBullet === 'left' ? minValue : maxValue
  );

  const onMouseDown = () => {
    setIsSelected(true);
  };

  const onMouseUp = () => {
    setIsSelected(false);
  };
  const calculateLimits = (newX) => {
    if (newX > minValue && newX < maxValue) {
      return newX;
    }
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isSelected) return;
    const rect = bulletRef.current?.getBoundingClientRect();
    if (rect) {
      const bulletTypeRect = draggingBullet === 'left' ? rect.left : rect.right;
      const newX = e.clientX - rect.x;

      console.log(newX);
      setOffsetX(calculateLimits(newX));
    }
  };

  useEffect(() => {
    if (isSelected) {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    } else {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [isSelected]);

  return (
    <div
      ref={bulletRef}
      onMouseDown={onMouseDown}
      //onMouseUp={onMouseUp}
      style={{ left: offsetX }}
      tabIndex={0}
      className={`range-bullet ${draggingBullet}  ${
        draggingBullet ? 'dragging' : ''
      }`}
    />
  );
};

export default RangeBullet;
