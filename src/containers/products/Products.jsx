import './Products.css';
import CoffeeIcon from '@mui/icons-material/Coffee';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import CookieIcon from '@mui/icons-material/Cookie';
import LinkTo from '../../components/link-to/LinkTo';

const Products = () => {
  
  return (
    <div className="products-container">
      <section className="products">
        <LinkTo 
          path="/products/organic-coffee" 
          icon={<CoffeeIcon sx={{ fontSize: '100px' }} />}
          title="Organic Coffee"
          description="Start your day with our premium, organic coffee."
        />
        <LinkTo 
          path="/products/premium-tea" 
          icon={<EmojiFoodBeverageIcon sx={{ fontSize: '100px' }} />}
          title="Premium Tea"
          description="Relax with our premium selection of teas."
        />
        <LinkTo 
          path="/products/fancy-cookies" 
          icon={<CookieIcon sx={{ fontSize: '100px' }} />}
          title="Fancy Cookies"
          description="Delight in our delicious selection of fancy cookies."
        />
      </section>
    </div>
  );
};

export default Products;
