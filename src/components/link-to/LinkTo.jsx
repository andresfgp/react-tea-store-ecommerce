/* eslint-disable react/prop-types */
import './LinkTo.css';
import { Link } from 'react-router-dom';

const LinkTo = ({path, icon, title, description}) => {
  return (
    <Link to={path} style={{textDecoration: 'none', color: "inherit"}} >
        <div className="link-to-item">
          {icon}
          <h2>{title}</h2>
          <h4>{description}</h4>
        </div>
    </Link>
  );
};

export default LinkTo;
