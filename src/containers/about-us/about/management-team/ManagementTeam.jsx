import './ManagementTeam.css';
import ManagementTeamMember from './ManagementTeamMember';

const ManagementTeam = () => {
  return (
    <section className="management-team">
      <div className="container">
        <div className="section-title">
          <h2>Our Management Team</h2>
        </div>
        <div className="section-team">
          {/* ManagementTeamMember components */}
          <ManagementTeamMember name="John Doe" position="CEO" />
          <ManagementTeamMember name="Jane Smith" position="CTO" />
          <ManagementTeamMember name="Mike Johnson" position="CFO" />
          {/* Add more members here */}
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;
