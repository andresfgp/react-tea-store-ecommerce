/* eslint-disable react/no-unescaped-entities */
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import '../Career.css';

const Driver = () => {
  return (
  <div className="career">
    <div className="header-icon">
      {<LocalShippingIcon />}
      <h1>Driver</h1>
    </div>
    <p className='career-description'>As a driver, you'll be responsible for delivering our products to customers safely and on time.</p>
    <button className='career-button'>Apply Here</button>
  </div>
  );
};

export default Driver;
