import { Link, useLocation } from "react-router-dom";
import './Header.css';
import HomeIcon from '@mui/icons-material/Home';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';

const Header = () => {
    const location = useLocation();
    const { pathname } = location;
    console.log(pathname);
    return (
      <header className="header">
      <nav className="nav">
        <Link to="/" className={`${pathname === "/" ? 'nav-link-selected' : 'nav-link'}`}>
          <HomeIcon sx={{ fontSize: 24 }} />
          <span className="link-text">Home</span>
        </Link>
        <div className="nav-dropdown">
          <Link to="/products"  className={`${pathname.includes("products") ? 'nav-link-selected' : 'nav-link'}`}>
            <LocalCafeIcon sx={{ fontSize: 24 }} />
            <span className="link-text">Products</span>
          </Link>
          {/* Add other navigation options with icons and text as needed */}
          <div className="dropdown-content">
            <Link to="/products/organic-coffee" className="dropdown-link">Organic Coffee</Link>
            <Link to="/products/premium-tea" className="dropdown-link">Premium Tea</Link>
            <Link to="/products/fancy-cookies" className="dropdown-link">Fancy Cookies</Link>
          </div>
        </div>
        <Link to="/services" className={`${pathname.includes("services") ? 'nav-link-selected' : 'nav-link'}`}>
          <RestaurantIcon sx={{ fontSize: 24 }} />
          <span className="link-text">Services</span>
        </Link>
        <div className="nav-dropdown">
          <Link to="/about" className={`${pathname.includes("about") ? 'nav-link-selected' : 'nav-link'}`}>
            <BusinessIcon sx={{ fontSize: 24 }} />
            <span className="link-text">About Us</span>
          </Link>
          {/* Add other navigation options with icons and text as needed */}
          <div className="dropdown-content">
            <Link to="/about/about-our-company" className="dropdown-link">About Our Company</Link>
            <Link to="/about/management-team" className="dropdown-link">Management Team</Link>
            <Link to="/about/careers" className="dropdown-link">Careers</Link>
          </div>
        </div>
        <Link to="/contact" className={`${pathname.includes("contact") ? 'nav-link-selected' : 'nav-link'}`}>
          <PhoneIcon sx={{ fontSize: 24 }} />
          <span className="link-text">Contact Us</span>
        </Link>
      </nav>
      <div className="logo">
        <img src="../src/assets/logo.png" />
        <h3 className="logo-text">Aussie Tea</h3>
      </div>
    </header>
    );
  }
  
  export default Header;