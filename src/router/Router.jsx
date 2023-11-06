import { Routes, Route } from 'react-router-dom';
import Home from '../containers/home/Home';
import Products from '../containers/products/Products';
import Services from '../containers/services/Services';
import AboutUs from '../containers/about-us/AboutUs';
import ContactUs from '../containers/contact-us/ContactUs';
import OrganicCoffee from '../containers/products/products/organic-coffee/OrganicCoffee';
import PremiumTea from '../containers/products/products/premium-tea/PremiumTea';
import FancyCookies from '../containers/products/products/fancy-cookies/FancyCookies';

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/organic-coffee" element={<OrganicCoffee />} />
        <Route path="/products/premium-tea" element={<PremiumTea />} />
        <Route path="/products/fancy-cookies" element={<FancyCookies />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
  );
}

export default AppRouter;