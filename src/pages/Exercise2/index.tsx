import { useEffect, useState } from 'react';
import '../../app/global.css';
import RangeBar from '../../components/RangeBar/RangeBar';
import RangeBullet from '../../components/RangeBullet/RangeBullet';

async function getFixedValues() {
  const res = await fetch('http://demo6526235.mockable.io/getExercise2Ranges');

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const FixedValuesRange = () => {
  const [fixedValues, setFixedValues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { rangeValues } = await getFixedValues();
        setFixedValues(rangeValues);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="range-container">
      <label>1€</label>
      <div className="range-bar-container">
        <RangeBullet draggingBullet={'left'} />
        <RangeBar min={1} max={100} fixedValues={fixedValues} />
        <RangeBullet draggingBullet={'right'} />
      </div>
      <label>100€</label>
    </div>
  );
};

export default FixedValuesRange;
