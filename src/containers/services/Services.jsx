import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="service">
        <h2>Tea Selection</h2>
        <p>Explore our extensive range of premium teas from around the world. We offer a diverse selection of loose-leaf teas and tea blends to cater to every palate.</p>
        <p><strong>Price: $15 - $30 per 100g</strong></p>
      </div>
      <div className="service">
        <h2>Coffee Blends</h2>
        <p>Discover our expertly crafted organic coffee blends to start your day right. We source beans from sustainable farms and roast them to perfection.</p>
        <p><strong>Price: $12 - $18 per 12 oz bag</strong></p>
      </div>
      <div className="service">
        <h2>Fancy Cookies</h2>
        <p>Indulge in our exquisite selection of fancy cookies for all occasions. Our bakers create artisanal cookies with the finest ingredients.</p>
        <p><strong>Price: $8 - $20 per dozen</strong></p>
      </div>
    </div>
  );
}

export default Services;