/* eslint-disable react/prop-types */
import './Career.css';

const Career = ({ name, description, icon }) => {
  return (
    <div className="career">
      <div className="header-icon">
        {icon}
        <h1>{name}</h1>
      </div>
      <p className='career-description'>{description}</p>
      <button className='career-button'>Apply Here</button>
    </div>
  );
};

export default Career;