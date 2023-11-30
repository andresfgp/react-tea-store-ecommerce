import './AboutOurCompany.css';

const AboutOurCompany = () => {
  return (
    <div className="about-ourCompany-container">
      <div className="about-ourCompany-image">
        <img src="../public/assets/logo.png" />
      </div>
      <div className="about-ourCompany-content">
        <h1 className="about-ourCompany-heading">About Aussie Tea</h1>
        <p className="about-ourCompany-description">
          At Aussie Tea, we are passionate about delivering exceptional tea, coffee, and cookies. Our journey is driven by a commitment to quality, sustainability, and the joy of sharing extraordinary flavors.
        </p>
        <p className="about-ourCompany-description">
          We source the finest ingredients, handcraft exquisite blends, roast coffee to perfection, and bake delightful cookies. Our expert team is dedicated to providing you with an unparalleled experience, one cup and bite at a time.
        </p>
        <p className="about-ourCompany-description">
          We take pride in our commitment to ethical and sustainable practices, ensuring that every sip and bite you enjoy reflects our dedication to your satisfaction and the environment.
        </p>
        <p className="about-ourCompany-description">
          Join us on a journey of taste and tradition. Explore our collection, savor the moment, and experience the magic that is Aussie Tea.
        </p>
      </div>
    </div>
  );
};

export default AboutOurCompany;
