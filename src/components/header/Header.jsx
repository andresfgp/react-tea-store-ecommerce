import { Link, useLocation } from "react-router-dom";
import './Header.css';
import HomeIcon from '@mui/icons-material/Home';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import CoffeeIcon from '@mui/icons-material/Coffee';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import CookieIcon from '@mui/icons-material/Cookie';
import GroupsIcon from '@mui/icons-material/Groups';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import WorkIcon from '@mui/icons-material/Work';

const Header = () => {
    const location = useLocation();
    const { pathname } = location;
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
            <Link to="/products/organic-coffee" className="dropdown-link">
              <CoffeeIcon sx={{ fontSize: 24 }} />
              <span className="link-text">Organic Coffee</span>
            </Link>
            <Link to="/products/premium-tea" className="dropdown-link">
              <EmojiFoodBeverageIcon sx={{ fontSize: 24 }} />
              <span className="link-text">Premium Tea</span>
            </Link>
            <Link to="/products/fancy-cookies" className="dropdown-link">
              <CookieIcon sx={{ fontSize: 24 }} />
              <span className="link-text">Fancy Cookies</span>
            </Link>
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
    <div className="dropdown-content">
      <Link to="/about/about-our-company" className="dropdown-link">
        <GroupsIcon sx={{ fontSize: 24 }} />
        <span className="link-text">Our Company</span>
      </Link>
      <Link to="/about/management-team" className="dropdown-link">
        <AssignmentIndIcon sx={{ fontSize: 24 }} />
        <span className="link-text">Team</span>
      </Link>
      <div className="nav-dropdown sub-sub-dropdown">
        <Link to="/about/careers/driver" className="dropdown-link">
          <WorkIcon sx={{ fontSize: 24 }} />
          <span className="link-text">Careers</span>
        </Link>
        {/* Add the new sub-sub menu options for Careers here */}
        <div className="sub-sub-menu">
          <Link to="/about/careers/driver" className="sub-sub-link">
            Driver
          </Link>
          <Link to="/about/careers/cook" className="sub-sub-link">
            Cook
          </Link>
          <Link to="/about/careers/baker" className="sub-sub-link">
            Baker
          </Link>
        </div>
      </div>
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