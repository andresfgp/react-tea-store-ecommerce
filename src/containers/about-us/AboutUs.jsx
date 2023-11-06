import './AboutUs.css';
import LinkTo from '../../components/link-to/LinkTo';
import GroupsIcon from '@mui/icons-material/Groups';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import WorkIcon from '@mui/icons-material/Work';

const AboutUs = () => {
  
  return (
    <div className="about-us-container">
      <section className="about-us">
        <LinkTo 
          path="/about/about-our-company" 
          icon={<AssignmentIndIcon sx={{ fontSize: '100px' }} />}
          title="About Our Company"
        />
        <LinkTo 
          path="/about/management-team" 
          icon={<GroupsIcon sx={{ fontSize: '100px' }} />}
          title="Management Team"
        />
        <LinkTo 
          path="/about/careers/driver" 
          icon={<WorkIcon sx={{ fontSize: '100px' }} />}
          title="Careers"
        />
      </section>
    </div>
  );
};

export default AboutUs;
