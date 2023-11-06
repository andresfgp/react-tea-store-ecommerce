/* eslint-disable react/prop-types */
import { Twitter, Facebook, LinkedIn, Instagram } from '@mui/icons-material'; // Import Material-UI icons
import PersonIcon from '@mui/icons-material/Person';
const ManagementTeamMember = ({ name, position }) => {
  return (
    <div className="member">
      <PersonIcon sx={{fontSize:'100px', color: "white", backgroundColor: "rgba(0,0,0,0.2)", borderRadius:"20px"}} />
      <h4>{name}</h4>
      <span>{position}</span>
      <div className="social">
        <a href="#!" className="social-icon">
          <Twitter fontSize="small" />
        </a>
        <a href="#!" className="social-icon">
          <Facebook fontSize="small" />
        </a>
        <a href="#!" className="social-icon">
          <LinkedIn fontSize="small" />
        </a>
        <a href="#!" className="social-icon">
          <Instagram fontSize="small" />
        </a>
      </div>
    </div>
  );
};

export default ManagementTeamMember;
