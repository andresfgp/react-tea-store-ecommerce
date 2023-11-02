import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-image">
        <img src="../src/assets/logo.png" />
      </div>
      <div className="about-us-content">
        <h1 className="about-us-heading">About Aussie Tea</h1>
        <p className="about-us-description">
          At Aussie Tea, we are passionate about delivering exceptional tea, coffee, and cookies. Our journey is driven by a commitment to quality, sustainability, and the joy of sharing extraordinary flavors.
        </p>
        <p className="about-us-description">
          We source the finest ingredients, handcraft exquisite blends, roast coffee to perfection, and bake delightful cookies. Our expert team is dedicated to providing you with an unparalleled experience, one cup and bite at a time.
        </p>
        <p className="about-us-description">
          We take pride in our commitment to ethical and sustainable practices, ensuring that every sip and bite you enjoy reflects our dedication to your satisfaction and the environment.
        </p>
        <p className="about-us-description">
          Join us on a journey of taste and tradition. Explore our collection, savor the moment, and experience the magic that is Aussie Tea.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
