/* eslint-disable react/prop-types */
import './ProductDetail.css';

const ProductDetail = ({img, title, description}) => {
  return (
    <div className="product-detail-container">
      <div className="product-image">
        <img
          src={img}
          alt="Organic Coffee"
        />
      </div>
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <div className="product-description">
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
