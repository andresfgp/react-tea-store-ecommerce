import { Routes, Route } from 'react-router-dom';
import Home from './containers/home/Home';
import Products from './containers/products/Products';
import Services from './containers/Services';
import AboutUs from './containers/about-us/AboutUs';
import ContactUs from './containers/contact-us/ContactUs';

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
  );
}

export default AppRouter;