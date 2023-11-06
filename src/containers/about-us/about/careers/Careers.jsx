import { Link, Outlet, useLocation } from 'react-router-dom';
import './Careers.css';

const Careers = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="careers">
      <div className="tabs">
        <Link to="driver" className={`${pathname.includes("driver") ? 'tab-active' : 'tab'}`}>
          Driver
        </Link>
        <Link to="cook" className={`${pathname.includes("cook") ? 'tab-active' : 'tab'}`}>
          Cook
        </Link>
        <Link to="baker" className={`${pathname.includes("baker") ? 'tab-active' : 'tab'}`}>
          Baker
        </Link>
      </div>

      <hr />

      <Outlet />
    </div>
  );
};

export default Careers;
