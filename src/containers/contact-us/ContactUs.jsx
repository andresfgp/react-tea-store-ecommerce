import './ContactUs.css';

const ContactUs = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
        </div>
        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div>
                <div className="address">
                  <h4>Location:</h4>
                  <p>Melbourne, Australia</p>
                </div>
                <div className="email">
                  <h4>Email:</h4>
                  <p>contact@aussietea.com</p>
                </div>
                <div className="phone">
                  <h4>Phone:</h4>
                  <p>(+61) 123-456-7890</p>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d96429.97201272316!2d144.9631!3d-37.8136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau"
                frameBorder="0"
                className='info-iframe'
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="10"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
