/* eslint-disable react/no-unescaped-entities */
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import '../Career.css';

const Cook = () => {
  return (
  <div className="career">
    <div className="header-icon">
      {<RamenDiningIcon />}
      <h1>Cook</h1>
    </div>
    <p className='career-description'>As a cook, you'll prepare delicious and high-quality dishes for our customers, ensuring a memorable dining experience.</p>
    <button className='career-button'>Apply Here</button>
  </div>
  );
};

export default Cook;