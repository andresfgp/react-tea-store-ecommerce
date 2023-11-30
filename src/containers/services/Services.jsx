import Service from './Service';
import './Services.css';

const Services = () => {
  return (

    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-container-items">
        <Service 
          img="../public/assets/coffee-blends.png"
          title="Coffee Blends"
          text="Explore our extensive range of premium teas from around the world. We offer a diverse selection of loose-leaf teas and tea blends to cater to every palate."
          price="Price: $15 - $30 per 100g"
        />
        <Service 
          img="../public/assets/tea-selection.png"
          title="Tea Selection"
          text="Discover our expertly crafted organic coffee blends to start your day right. We source beans from sustainable farms and roast them to perfection."
          price="Price: $12 - $18 per 12 oz bag"
        />
        <Service 
          img="../public/assets/fancy-cookies.png"
          title="Fancy Cookies"
          text="Indulge in our exquisite selection of fancy cookies for all occasions. Our bakers create artisanal cookies with the finest ingredients."
          price="Price: $8 - $20 per dozen"
        />

      </div>
    </div>
  );
}

export default Services;
