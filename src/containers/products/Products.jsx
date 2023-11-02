import './Products.css';
import CoffeeIcon from '@mui/icons-material/Coffee';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import CookieIcon from '@mui/icons-material/Cookie';
import Product from './Product';

const Products = () => {
  
  return (
    <div className="products-container">
      <section className="products">
      <Product 
        path="/products/fancy-cookies" 
        icon={<CookieIcon sx={{ fontSize: '100px' }} />}
        title="Fancy Cookies"
        description="Delight in our delicious selection of fancy cookies."
      />
      <Product 
        path="/products/organic-coffee" 
        icon={<CoffeeIcon sx={{ fontSize: '100px' }} />}
        title="Organic Coffee"
        description="Start your day with our premium, organic coffee."
      />
      <Product 
        path="/products/premium-tea" 
        icon={<EmojiFoodBeverageIcon sx={{ fontSize: '100px' }} />}
        title="Premium Tea"
        description="Relax with our premium selection of teas from around the world."
      />
      </section>
    </div>
  );
};

export default Products;
