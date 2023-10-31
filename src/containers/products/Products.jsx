import './Products.css';
import CoffeeIcon from '@mui/icons-material/Coffee';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import CookieIcon from '@mui/icons-material/Cookie';

const Products = () => {
  return (
    <div className="products-container">
      <section className="products">
        <div className="product-item">
          <CookieIcon sx={{ fontSize: '100px' }} />
          <h2>Fancy Cookies</h2>
          <h4>Delight in our delicious selection of fancy cookies.</h4>
        </div>
        <div className="product-item">
          <CoffeeIcon sx={{ fontSize: '100px' }} />
          <h2>Organic Coffee</h2>
          <h4>Start your day with our premium, organic coffee.</h4>
        </div>
        <div className="product-item">
          <EmojiFoodBeverageIcon sx={{ fontSize: '100px' }} />
          <h2>Premium Tea</h2>
          <h4>Relax with our premium selection of teas from around the world.</h4>
        </div>
      </section>
    </div>
  );
};

export default Products;
