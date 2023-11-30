/* eslint-disable react/no-unescaped-entities */
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import '../Career.css';

const Baker = () => {
  return (
  <div className="career">
    <div className="header-icon">
      {<BakeryDiningIcon />}
      <h1>Baker</h1>
    </div>
    <p className='career-description'>As a baker, you'll create a variety of freshly baked goods, from bread to pastries, to delight our customers with your culinary creations.</p>
    <button className='career-button'>Apply Here</button>
  </div>
  );
};

export default Baker;
