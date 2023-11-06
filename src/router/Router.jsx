import { Routes, Route } from 'react-router-dom';
import Home from '../containers/home/Home';
import Products from '../containers/products/Products';
import Services from '../containers/services/Services';
import AboutUs from '../containers/about-us/AboutUs';
import ContactUs from '../containers/contact-us/ContactUs';
import OrganicCoffee from '../containers/products/products/organic-coffee/OrganicCoffee';
import PremiumTea from '../containers/products/products/premium-tea/PremiumTea';
import FancyCookies from '../containers/products/products/fancy-cookies/FancyCookies';
import AboutOurCompany from '../containers/about-us/about/about-our-company/AboutOurCompany';
import ManagementTeam from '../containers/about-us/about/management-team/ManagementTeam';
import Careers from '../containers/about-us/about/careers/Careers';
import Driver from '../containers/about-us/about/careers/career/driver/Driver';
import Cook from '../containers/about-us/about/careers/career/cook/Cook';
import Baker from '../containers/about-us/about/careers/career/baker/Baker';

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
        <Route path="/about/about-our-company" element={<AboutOurCompany />} />
        <Route path="/about/management-team" element={<ManagementTeam />} />
        <Route path="/about/careers" element={<Careers />}>
         <Route path="driver" element={<Driver />} />
         <Route path="cook" element={<Cook />} />
         <Route path="baker" element={<Baker />} />
        </Route>
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
  );
}

export default AppRouter;