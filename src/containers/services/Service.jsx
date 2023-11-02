/* eslint-disable react/prop-types */
import './Service.css';

const Service = ({img, title, text, price}) => {
  return (
    <div className="service">
    <img src={img} alt={title} />
    <h2>{title}</h2>
    <p>{text}</p>
    <p><strong>{price}</strong></p>
    </div>
  );
}

export default Service;
