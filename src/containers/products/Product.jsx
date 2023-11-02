/* eslint-disable react/prop-types */
import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({path, icon, title, description}) => {
  return (
    <Link to={path} style={{textDecoration: 'none', color: "inherit"}} >
        <div className="product-item">
          {icon}
          <h2>{title}</h2>
          <h4>{description}</h4>
        </div>
    </Link>
  );
};

export default Product;
